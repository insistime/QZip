'use strict';

// react
import React from 'react';

// index
import 'normalize.css';
import './index.scss';
import IndexDest from './index-dest.js';
import IndexSrc from './index-src.js';
import Indexbtn from './index-btn.js';

/**
 * index component
 */
export default class IndexComponent extends React.Component {
  render() {
    return (
      <div className='index-container'>
        <IndexDest/>
        <IndexSrc/>
        <Indexbtn
          clickGo = {this.props.clickGo}
        />
      </div>
    );
  }
}