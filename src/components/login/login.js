
import React,{ Component } from 'react';
// import Axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  loginReduceFun
 } from '../../redux/actions/login/index';
import { Form, Icon, Input, Button, Checkbox, Row ,Col} from 'antd';

import './login.css'

import icomImg01 from '../assit/loginBK.jpg';
import icomImg02 from '../assit/loginFormBK.jpg';
import icomImg03 from '../assit/logo.png';




const FormItem = Form.Item;



class NormalLoginForm extends Component {
  render() {
    const self = this,
    { loginReduceFun } = self.props;
    return (
      <div>
          <div style={{background:`url(${icomImg01}) no-repeat`, backgroundSize:'100% 100%', height:'100%', width:'100%', position:'fixed'}}>
            <div style={{padding:'10px 0 0 0'}}>
              <img src={icomImg03} alt="logo" style={{width:'38px', height:'50px', borderRadius:'50%', marginLeft:'20px'}}/>
              <div className='login-top-text'>精胜债券数据资讯</div>
            </div>  
            <div style={{margin:'45px 10%', height:'72%',display:'inline-block', width:'80%'}}>
              <Row style={{background:`url(${icomImg02}) no-repeat`, backgroundSize:'100% 100%', borderRadius:'8px', height:'100%'}}>
                <Col span={14}/>
                <Col span={8} style={{height:'100%'}}>
                  <div style={{height:'11%', display:'inline-block', width:'100%'}}/>   {/*占位*/}
                  <div style={{height:'78%',display:'inline-block', width:'100%'}}>
                    <div className='login-form-box' style={{height:'100%'}}>
                      <Row style={{height:'24%'}}>
                        <Col span={16} style={{height:'100%'}}>
                          <div style={{height:'10%', display:'inline-block', width:'100%'}}/>   {/*占位*/}
                          <div>
                            <div className='login-form-title-span'></div>
                            <div className='login-form-title'>登录</div>
                          </div>
                          <div className='login-form-title-en'>login in</div>
                        </Col>
                        <Col span={8} style={{textAlign:'right'}}>
                          <div className='login-form-rigth-register'/> 
                          <Link to='/register'>
                            <Button className='login-form-rigth-register-button'>注册</Button> 
                          </Link>                        
                        </Col>
                      </Row>
                      <Form style={{height:'66%',padding:'0 23px'}}>
                        <FormItem style={{marginBottom:'0', height:'20%'}}>
                          <Input className='login-form-input' 
                            ref = { input=>{this.userName = input }}
                            prefix={<Icon type="user" style={{fontSize:'18px', color: 'rgba(255,255,255)' }} />} 
                            placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem style={{marginBottom:'0', height:'25%'}}>
                          <Input className='login-form-input' 
                            ref = { input=>{this.password = input }}
                            prefix={<Icon type="lock" style={{fontSize:'18px', color: 'rgba(255,255,255)' }} />} 
                            type="password" placeholder="请输入密码" />
                        </FormItem>
                        <FormItem style={{marginBottom:'0', height:'25%'}}>
                          <Checkbox className='login-form-auto-login'>下次自动登陆</Checkbox>
                        </FormItem>
                        <Button 
                        onClick={
                          ()=>loginReduceFun(self)
                        }
                        className='login-form-login-button'>
                            登陆
                        </Button>
                        <Button className='login-form-forget-psd-button'>忘记密码？</Button>  
                      </Form>
                      <div style={{height:'10%', width:'100%', padding:'14px 15px 10px 15px', display:'inline-block'}}>
                        <Col span={12} className='login-form-versions'>版本：xxxxxxxx</Col>
                        <Col span={12} style={{textAlign:'right'}}>
                        <Link to='/'>
                          <Button className='login-form-back-homepage-button'>返回首页 ></Button>
                        </Link>
                        </Col>
                      </div>
                    </div>
                    </div>
                  </Col>
                <Col span={2}/>
              </Row>
            </div>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return state.login.loginReducerIndex
}

export default connect(
  mapDispatchToProps,{
    loginReduceFun
  }
)(NormalLoginForm)

// const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

// export default WrappedNormalLoginForm;

// export default NormalLoginForm;

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
