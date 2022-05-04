'use strict';

// react
import React from 'react';

// index
import 'normalize.css';
import './index.scss';
import IndexDrag from './index-drag.js';
import IndexPath from './index-path.js';
import Indexbtn from './index-btn.js';

/**
 * index component
 */
export default class IndexComponent extends React.Component {
  render() {
    return (
      <div className='index-container'>
        <IndexDrag/>
        <IndexPath
          clickReset = {this.props.clickReset}
          clickPick = {this.props.clickPick}
        />
        <Indexbtn
          clickGo = {this.props.clickGo}
        />
      </div>
    );
  }
}