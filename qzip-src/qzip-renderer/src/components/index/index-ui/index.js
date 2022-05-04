'use strict';

// react
import React from 'react';

// index
import 'normalize.css';
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