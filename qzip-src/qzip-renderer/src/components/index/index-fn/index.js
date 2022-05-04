'use strict';

/**
 * clickPickSrc
 */
export const clickPickSrc = async () => {
    const res = await window.electron.clickPickSrcIPC();
    console.log('pick src', path);
}

/**
 * clickPickDest
 */
export const clickPickDest = async () => {
    const res = await window.electron.clickPickDestIPC();
    console.log('pick dest', res);
}

/**
 * clickGo
 */
export const clickGo = async () => {
    const res = await window.electron.clickGoIPC();
    console.log('go', res);
}