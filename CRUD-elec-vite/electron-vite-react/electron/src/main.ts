import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { createUser, getUsers, updateUser, deleteUser } from '../src/crud';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts'),
      contextIsolation: true,
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.handle('createUser', async (_event, { username, password, email }) => {
  await createUser(username, password, email);
});

ipcMain.handle('getUsers', async () => {
  return await getUsers();
});

ipcMain.handle('updateUser', async (_event, { id, username, password, email }) => {
  await updateUser(id, username, password, email);
});

ipcMain.handle('deleteUser', async (_event, id) => {
  await deleteUser(id);
});





