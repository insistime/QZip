'use strict';

// react
import { Component } from 'react';

// index ui
import IndexComponent from './index-ui/index.js';

// index func
import {
  clickPickSrc,
  clickPickDest,
  clickZipGo,
} from './index-fn/index.js';

/**
 * index container
 */
export default class IndexContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      srcPath: '',
      destPath: '',
    };

    this.clickSrc = this.clickSrc.bind(this);
    this.clickDest = this.clickDest.bind(this);
    this.clickGo = this.clickGo.bind(this);
  }

  clickSrc(){
    clickPickSrc(this);
  }
  clickDest(){
    clickPickDest(this);
  }
  clickGo(){
    clickZipGo(this);
  }

  render() {
    return (
      <IndexComponent
        srcPath = {this.state.srcPath}
        destPath = {this.state.destPath}

        clickPickSrc = {this.clickSrc}
        clickPickDest = {this.clickDest}
        clickGo = {this.clickGo}
      />
    );
  }
}