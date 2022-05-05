'use strict';

// alias
module.exports = {
  splitChunks: {
    cacheGroups: {
      react: {
        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        name: 'react',
        chunks: 'all',
        priority: 0,
        reuseExistingChunk: true,
      },
      default: {
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
};