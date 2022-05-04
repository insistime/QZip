'use strict';

// electron
const { ipcMain } = require('electron');

// const
const { 
    IPC_ZIP_CLICK_SRC,
    IPC_ZIP_CLICK_DEST,
    IPC_ZIP_CLICK_GO,
} = require('../../_util/constant.js');

// ipc zip click src
ipcMain.handle(IPC_ZIP_CLICK_SRC, async () => {
    return 1;
});

// ipc zip click dest
ipcMain.handle(IPC_ZIP_CLICK_DEST, async () => {
    return 2;
});

// ipc zip click go
ipcMain.handle(IPC_ZIP_CLICK_GO, async () => {
    return 3;
});