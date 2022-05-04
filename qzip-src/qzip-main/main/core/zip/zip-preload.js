'use strict';

// electron
const { ipcRenderer } = require('electron');

// const
const { 
    IPC_ZIP_CLICK_SRC,
    IPC_ZIP_CLICK_DEST,
    IPC_ZIP_CLICK_GO,
} = require('../../_util/constant.js');

/**
 * clickPickSrcIPC
 */
export const clickPickSrcIPC = async () => {
    return await ipcRenderer.invoke(IPC_ZIP_CLICK_SRC);
}

/**
 * clickPickDestIPC
 */
export const clickPickDestIPC = async () => {
    return await ipcRenderer.invoke(IPC_ZIP_CLICK_DEST);
}

/**
 * clickGoIPC
 */
export const clickGoIPC = async () => {
    return await ipcRenderer.invoke(IPC_ZIP_CLICK_GO);
}