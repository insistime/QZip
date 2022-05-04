'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { getPreloads } = require('qiao-electron');

// preload
const { 
    clickPickSrcIPC,
    clickPickDestIPC,
    clickGoIPC,
} = require('../core/zip/zip-preload.js');

// get all preloads
const getAllPreloads = () => {
    const customPreloads = {
        clickPickSrcIPC,
        clickPickDestIPC,
        clickGoIPC,
    };

    const s = getPreloads(customPreloads);
    console.log(s);
    return s;
};

// preload
const allPreloads = getAllPreloads();
contextBridge.exposeInMainWorld('electron', allPreloads);