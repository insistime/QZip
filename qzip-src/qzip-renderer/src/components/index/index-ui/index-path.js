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
                        {IndexConstant.srcText}
                    </div>
                    <div className='input'>
                        <input value={this.props.srcPath} disabled/>
                    </div>
                    <div className='btn' onClick={this.props.clickPickSrc}>
                        {IndexConstant.srcBtn}
                    </div>
                </div>
                <div className='index-dest'>
                    <div className='label'>
                        {IndexConstant.destText}
                    </div>
                    <div className='input'>
                        <input value={this.props.destPath} disabled/>
                    </div>
                    <div className='btn' onClick={this.props.clickPickDest}>
                        {IndexConstant.destBtn}
                    </div>
                </div>
            </div>
        );
    }
}