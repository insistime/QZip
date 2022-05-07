'use strict';

// react
import { Component } from 'react';

// index
import 'normalize.css';
import './index.scss';
import IndexPath from './index-path.js';
import Indexbtn from './index-btn.js';

/**
 * index component
 */
export default class IndexComponent extends Component {
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