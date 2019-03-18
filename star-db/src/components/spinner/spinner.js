import React, { Component } from 'react';
import './spinner.css';

export default class Spinner extends Component {

    render() {
        return (
            <React.Fragment>
            <div style={{width: '46%' }}>   
            </div>
            <div className="lds-css ng-scope">
                <div className="lds-double-ring">
                    <div></div>
                    <div></div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}