import React, { Component } from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import {
    tabLanguange
  } from '../../redux/actions/header/index';
import {Row,Col,Input,Icon,Button} from 'antd';

import icomImg from '../assit/logo-1@3x.png';
import icomImg01 from '../assit/headerBK.png';
import './index.css';

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

// import Tool from './corn/tools';
/* 此处注意，如果使用CSS Module，则必须命名css文件为*.module.css的形式 */
/* More detail can see from https://github.com/codebandits/react-app-rewire-css-modules

 */
// import styles from './App.module.css';

class Header extends Component {

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
      <div className='header' style={{background:`url(${icomImg01})`,  backgroundSize:'100% 100%'}}>
        <Row>
          <Col span={8}>
            <img src={icomImg} alt="头部图标" style={{width:'20px', height:'27px',verticalAlign:'top'}} />
            <div className='header-left-text'>
              债券数据咨询
            </div>
          </Col>
          <Col span={16}>
            <div className='header-right'>
              {/* <Select defaultValue="zh-CN" style={{ width: 120 }} 
              onChange={this.handleContentChange.bind(this)}
              // onChange={tabLanguange}
              >
                <Option value="zh-CN">中文</Option>
                <Option value="zh-TW">繁体</Option>
                <Option value="zh-EN">英文</Option>
              </Select> */}

              <Input
                placeholder="搜索债券代码、债券名称"
                prefix={<Icon type="search" style={{ color: '#ffffff',opacity:'0.85' }} />}
                // suffix={suffix}
                // onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
                style={{width:'240px',textAlign:'right'}}
                className='header-right-input'
              />
              <Button type='default' style={{marginLeft:'8px'}} className='header-right-search-button'>
                <Icon type="search" style={{ color: '#ffffff',opacity:'0.85' }} />
              </Button>
              <Button type='default' className='header-right-button' style={{margin:'0 10px 0 30px'}}>
                <Icon type="login" style={{ color: '#ffffff' }} />
                {intl.get('sign-in')}
              </Button>
              <div style={{display:'inline-block', height:'12px', width:'1px', background:'rgba(255, 255, 255, 0.85)' }}/>
              <Button type='default' className='header-right-button' style={{margin:'0 25px 0 10px'}}>
                <Icon type="user-add" style={{ color: '#ffffff' }} />
                {intl.get('register')}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  language: state.lan.indexLanguage.lanage,
});
// debugger;

const mapDispatchToProps = dispatch => ({
    tabLanguange(data) {
        dispatch(tabLanguange(data));
    }
});

export default connect(
mapStateToProps,
mapDispatchToProps)(Header);

