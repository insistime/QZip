'use strict';

// react
import React from 'react';

// index constant
import { IndexConstant } from '../_constant.js';

/**
 * index path
 */
export default class IndexPath extends React.Component {
    render() {
        return (
            <div className='index-path'>
                <div className='index-src'>
                    <div className='label'>
                        src
                    </div>
                    <div className='input'>
                    </div>
                    <div className='btn' onClick={this.props.clickReset}>
                        重置
                    </div>
                </div>
                <div className='index-dest'>
                    <div className='label'>
                        dest
                    </div>
                    <div className='input'>
                    </div>
                    <div className='btn' onClick={this.props.clickPick}>
                        选择
                    </div>
                </div>
            </div>
        );
    }
}