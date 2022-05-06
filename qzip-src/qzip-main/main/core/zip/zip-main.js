'use strict';

// path
const path = require('path');

// q
const q = require('qiao-zip');

/**
 * zipOrUnzip
 * @param {*} src 
 * @param {*} dest 
 * @returns 
 */
exports.zipOrUnzip = (src, dest) => {
    if(!src || !dest) return;

    const ext = path.extname(src);
    if(ext == '.zip'){
        q.unzip(src, dest + '/');
        return 'unzip success!';
    }

    return 1;
};