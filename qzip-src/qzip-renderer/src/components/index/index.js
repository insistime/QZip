'use strict';

// react
import React from 'react';

// index ui
import IndexComponent from './index-ui/index.js';

// index func
import {
} from './index-fn/index.js';

/**
 * index container
 */
export default class IndexContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  clickReset(){
    console.log('reset');
  }

  clickPick(){
    console.log('pick');
  }

  clickGo(){
    console.log('go');
  }

  render() {
    return (
      <IndexComponent
        clickReset = {this.clickReset}
        clickPick = {this.clickPick}
        clickGo = {this.clickGo}
      />
    );
  }
}