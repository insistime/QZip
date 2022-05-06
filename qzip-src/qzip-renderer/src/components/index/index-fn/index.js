'use strict';

/**
 * clickPickSrc
 */
export const clickPickSrc = async (that) => {
    const res = await window.electron.clickPickSrcIPC();
    if(!res || !res.length) return;

    that.setState({
        srcPath: res[0]
    });
}

/**
 * clickPickDest
 */
export const clickPickDest = async () => {
    const res = await window.electron.clickPickDestIPC();
    console.log('pick dest', res);
}

/**
 * clickZipGo
 */
export const clickZipGo = async () => {
    const res = await window.electron.clickGoIPC();
    console.log('go', res);
}