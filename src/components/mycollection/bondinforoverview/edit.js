import React,{ Component} from 'react';

import { Row, Col } from 'antd';
import {Button,Modal } from 'antd';
import { Badge,Icon } from 'antd';
// import { Badge, Button, Icon, Switch } from 'antd';

import './edit.css';


class Edit extends Component{

    state = { visible: false }

    showModal = () => {
      this.setState({
        visible: true,
      });
    }
  
    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
  
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    render() {
        return (
        <div>
            <Button type="primary" onClick={this.showModal}>
                债券资料总览条件编辑
            </Button>
            <Modal
                title={ 
                    <span className="menu-title">我的搜索方案查看</span>
                }
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                // okText="确认"
                // cancelText="取消"
                destroyOnClose={true}
                // closable={false}
                footer={[
                    null
                ]}
            >
                <Row className="menu-head">
                    <Col span={24}>查看已保存的搜索方案</Col>
                </Row>
                <Row className="menu-body-one">
                    <Col span={6} className="menu-body-one-text" id="hello">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text" style={{display:'inline-block',position:'absolute'}}>
                        <span>
                        
                        搜索条件1
                        
                            
                            </span>
                    </Col>
                    <Badge count={<Icon type="close"/>} style={{marginLeft:'96px',marginTop:'-20px',width:'19px',height:'19px',position:'relative',backgroundColor:'#81aaff',padding:'0 1px 3px 3px'}}>
                            
                            </Badge>
                </Row>
                <Row className="menu-choose">
                    <Col span={6}></Col>
                    <Col span={6} className="menu-ensure">
                        <Button className="menu-ensure-text">删除
                            {/* <div style={{ marginTop: 10 ,marginLeft:'30px'}}>
                                <div> */}
                                    {/* <Badge dot={this.state.show} count={<Icon type="user" />}>
                                        <a href="#" className="head-example" />
                                    </Badge> */}
                                {/* </div> */}
                {/* <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} /> */}
    {/* <Badge count={109} style={{ backgroundColor: '#52c41a' }} /> */}
                                {/* <Switch onChange={this.onChange} checked={this.state.show} /> */}
                            {/* </div> */}
                        </Button>
                        {/* <div style={{ marginTop: 10 ,marginLeft:'30px'}}>
                            <Badge dot={this.state.show}>
                                <a href="hello" className="head-example" />
                            </Badge>
                            <Switch onChange={this.onChange} checked={this.state.show} />
                        </div> */}
                    </Col>
                    <Col span={6} className="menu-ensure">
                        <button className="menu-ensure-text">返回
                        </button>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </Modal>
                {/* <div style={{ marginTop: 10 ,marginLeft:'30px'}}>
                    <Badge dot={this.state.show}>
                        <a href="hello" className="head-example" />
                    </Badge>
                    <Switch onChange={this.onChange} checked={this.state.show} />
                </div> */}
        </div>
        );
    }
}

export default Edit;
