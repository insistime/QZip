'use strict';

// react
import React from 'react';

// index
import './index.scss';
import IndexPath from './index-path.js';
import Indexbtn from './index-btn.js';

/**
 * index component
 */
export default class IndexComponent extends React.Component {
  render() {
    return (
      <div className='index-container'>
        <IndexPath
          srcPath = {this.props.srcPath}
          destPath = {this.props.destPath}
          clickPickSrc = {this.props.clickPickSrc}
          clickPickDest = {this.props.clickPickDest}
        />
        <Indexbtn
          clickGo = {this.props.clickGo}
        />
      </div>
    );
  }
}