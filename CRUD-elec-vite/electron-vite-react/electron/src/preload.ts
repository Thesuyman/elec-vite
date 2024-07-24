import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electronAPI', {
  createUser: (data: { username: string, password: string, email: string }) =>
    ipcRenderer.invoke('create-user', data),
  getUsers: () => ipcRenderer.invoke('get-users'),
  updateUser: (data: { id: number, username: string, password: string, email: string }) =>
    ipcRenderer.invoke('update-user', data),
  deleteUser: (id: number) => ipcRenderer.invoke('delete-user', id), 
});
