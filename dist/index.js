const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        // frame: false
    });

    mainWindow.loadURL('http://127.0.0.1:5500/dist/pages/index.html');
});