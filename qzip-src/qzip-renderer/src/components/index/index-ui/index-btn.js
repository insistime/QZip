'use strict';

// react
import { Component } from 'react';

// index constant
import { IndexConstant } from '../_constant.js';

/**
 * index btn
 */
export default class IndexBtn extends Component {
    render() {
        return (
            <div className='index-btn'>
                <div className='btn' onClick={this.props.clickGo}>{IndexConstant.goText}</div>
            </div>
        );
    }
}