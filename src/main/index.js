import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join, dirname } from 'path'
import { execFile } from 'child_process'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import path from 'path'
import fs from 'fs'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      webSecurity: false // Allows local poster/screenshot images to load
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.on('ping', () => console.log('pong'))

  // --- DYNAMIC EXTERNAL FOLDER LOGIC ---
  const baseDir = app.isPackaged ? dirname(app.getPath('exe')) : app.getAppPath();
  const gamesFolder = join(baseDir, 'games');
  const gamesJsonPath = join(gamesFolder, 'games.json');

  // 1. Read JSON & Convert Image Paths to browser-friendly URLs
  ipcMain.handle('get-games-list', async () => {
    try {
      if (!fs.existsSync(gamesJsonPath)) {
        console.warn("No games.json found at:", gamesJsonPath);
        return [];
      }
      const rawData = fs.readFileSync(gamesJsonPath, 'utf-8');
      let games = JSON.parse(rawData);

      games = games.map(game => {
        if (game.posterPath) {
          game.posterUrl = 'file:///' + join(gamesFolder, game.posterPath).replace(/\\/g, '/');
        }
        if (game.screenshots) {
          game.screenshotUrls = game.screenshots.map(s => 'file:///' + join(gamesFolder, s).replace(/\\/g, '/'));
        }
        return game;
      });

      return games;
    } catch (error) {
      console.error("Error reading games.json:", error);
      return [];
    }
  });

  // 2. Launch Game Relative to games folder
  ipcMain.handle('launch-game', async (event, relativeExePath) => {
    try {
      const absoluteExePath = join(gamesFolder, relativeExePath);
      const gameDirectory = dirname(absoluteExePath);

      console.log('Main Process: Launching...', absoluteExePath);

      execFile(absoluteExePath, { cwd: gameDirectory }, (error) => {
        if (error) console.error('Launch Error:', error);
      });
      return { success: true };
    } catch (error) {
      console.error('Failed to parse launch path:', error);
      return { success: false };
    }
  });

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})