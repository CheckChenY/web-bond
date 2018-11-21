import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import intl from 'react-intl-universal';
// import {
//     tabLanguange
//   } from '../../redux/actions/header/index';
import {Row, Col} from 'antd';

// import icomImg from '../assit/icon.png';
import './index.css';

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

// import Tool from './corn/tools';
/* 此处注意，如果使用CSS Module，则必须命名css文件为*.module.css的形式 */
/* More detail can see from https://github.com/codebandits/react-app-rewire-css-modules

 */
// import styles from './App.module.css';

class Footer extends Component {

  handleContentChange(e){
    if (this.props.onSubmit) {
      const { tabLanguange } = this.props;
      console.log(e);
      tabLanguange(e);
    }
  }
  
  render() {
    // const suffix = userName ? <Icon type="close-circle" /> : null;
    return (
      <div className='footer'>
        <Row>
          <Col span={12} style={{textAlign:'left'}}>
            <span>{'首页 > '}</span>
            <span style={{color:'#387fda'}}>{this.props.currentname}</span>
          </Col>
          <Col span={12} style={{textAlign:'right'}}>
            <span>备案号：xxxxxxxx</span>
            <span style={{marginLeft:'40px'}}>版本：xxxxxxxx</span>
          </Col>
        </Row>
      </div>
    );
  }
}


export default Footer;

