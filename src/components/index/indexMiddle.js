import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import intl from 'react-intl-universal';
// import {
//     tabLanguange
//   } from '../../redux/actions/header/index';
import {Col} from 'antd';
// import icomImg from '../assit/icon.png';
import './indexMiddle.css';

class IndexMiddle extends Component{
    render(){
        return(
            <Col span={10}>
                <div className="indexMiddle">
                    我是中间的
                </div>
            </Col>
        )
    }
}

export default IndexMiddle;