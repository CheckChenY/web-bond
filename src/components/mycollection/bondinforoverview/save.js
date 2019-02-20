import React,{ Component} from 'react';

import { Row, Col } from 'antd';
import {Button,Modal } from 'antd';
import {Input,Icon} from 'antd';

// import icomImg from '../../assit/icon.png';
import './save.css';

class Save extends Component{
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
                保存
            </Button>
            <Modal
                title={ 
                    <div>
                        <span className="save-title-line">&nbsp;</span>
                        <span className="save-title-solid">&nbsp;&nbsp;搜索方案保存</span>
                    </div>
                }
                className="save-all"
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
                <Row className="save-head">
                    <Col span={24}>保存现有搜索条件</Col>
                </Row>
                <Row className="save-body-one">
                    <Col span={4}></Col>
                    <Col span={16} className="save-body-one-text">
                        <Input
                            placeholder="请输入名称"
                            prefix={<Icon type="profile" style={{color: 'rgba(0,0,0,.25)',borderRight:'1px solid #a2a2a2',lineHeight:'30px',height:'25px',paddingRight:'9px'}} />}
                            ref={node => this.userNameInput = node}
                            style={{textAlign:'right'}}
                        />
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row style={{marginTop:'40px',textAlign:'center'}}>
                    <Col span={5}></Col>
                    <Col span={14}>
                        <button className="save-yes">保存</button>
                        <button className="save-edit">编辑</button>
                    </Col>
                    <Col span={5}></Col>
                </Row>
            </Modal>
        </div>
        );
    }
}

export default Save;
