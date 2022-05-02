'use strict';

// qzip-src package.json
const srcPkg = require('../qzip-src/qzip-main/package.json');

// config
let config = {
    appEnv          : 'online',
    appName         : srcPkg.name,
    appVersion      : srcPkg.version,
    appIconPath     : 'qzip-pack/static/icon/icon.icns',
    appCopyright    : 'Copyright © 2022 qzip 版权所有',

    arch            : 'arm64',
    asar            : true,

    srcPath         : 'qzip-src/qzip-main',
    srcFiles        : [ 
        'main',
        'node_modules',
        'renderer',
        'package.json'
    ],
    distPath        : 'qzip-dist',
    outPath         : 'qzip-out',

    dmgBackground   : 'qzip-pack/static/bg.png',
};

// cos config
// const cosConfig     = require('./cos-config.json');
// config.cosConfig    = {
//     SecretId	: cosConfig.SecretId,
//     SecretKey	: cosConfig.SecretKey,
//     Region	    : cosConfig.Region,
//     Bucket	    : cosConfig.Bucket,
//     destPath    : 'xx/',
// };

// qzip config
module.exports = config;