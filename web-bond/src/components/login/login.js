
import React,{ Component } from 'react';
import Axios from 'axios';
import { Form, Icon, Input, Button, Checkbox, Row ,Col} from 'antd';

import './login.css'

import icomImg01 from '../assit/loginBK.jpg';
import icomImg02 from '../assit/loginFormBK.jpg';
import icomImg03 from '../assit/logo.png';




const FormItem = Form.Item;



class NormalLoginForm extends Component {
  
  handleSubmit = (e) => {
    const self = this,
    { props } = self;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        // Axios.get('/Market/homePage').then(function(){
        //     alert(123)
        // })
        Axios.post('/User/userLogin', {
          userAccount: values.userName,
          userPassword: values.password
        })
        .then(function (response) {
          if(response.data.code === 1){
              props.history.push(`/index?id=${response.data.code}`)
            }else{

          }
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {/* <div style={{background:`url(${icomImg01}) no-repeat`, backgroundSize:'100% 100%'}}>
          <div className="login-top">
            <div style={{marginTop:'11px'}}>
              <img src={icomImg03} alt="logo" style={{width:'38px', height:'50px', borderRadius:'50%', marginLeft:'20px'}}/>
              <div className='login-top-text'>精胜债券数据资讯</div>
            </div>     
          </div>
          <div className="login-mainBox">
              <div className="login-childBox">
                <Row style={{background:`url(${icomImg02}) no-repeat`, backgroundSize:'100% 100%', borderRadius:'8px'}}>
                  <Col span={14}/>
                  <Col span={8} style={{margin:'54px 0'}}>
                    <div className='login-form-box'>
                      <Row>
                        <Col span={16} style={{paddingTop:'20px'}}>
                          <div>
                            <div className='login-form-title-span'></div>
                            <div className='login-form-title'>登录</div>
                          </div>
                          <div className='login-form-title-en'>login in</div>
                        </Col>
                        <Col span={8} style={{textAlign:'right'}}>
                          <div className='login-form-rigth-register'/>                         
                          <Button className='login-form-rigth-register-button'>注册</Button> 
                        </Col>
                      </Row>
                      <Form style={{marginTop:'30px',padding:'0 23px'}}>
                        <FormItem style={{marginBottom:'20px', height:'30px'}}>
                          <Input className='login-form-input' prefix={<Icon type="user" style={{fontSize:'18px', color: 'rgba(255,255,255)' }} />} placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem style={{marginBottom:'45px', height:'30px'}}>
                          <Input className='login-form-input' prefix={<Icon type="lock" style={{fontSize:'18px', color: 'rgba(255,255,255)' }} />} type="password" placeholder="请输入密码" />
                        </FormItem>
                        <FormItem style={{marginBottom:'45px', height:'30px'}}>
                          <Checkbox className='login-form-auto-login'>下次自动登陆</Checkbox>
                        </FormItem>
                        <Button htmlType="submit" className='login-form-login-button'>
                            登陆
                        </Button>
                        <Button className='login-form-forget-psd-button'>忘记密码？</Button>  
                      </Form>
                      <div style={{width:'100%', margin:'14px 0 10px 0', padding:'0 15px', display:'inline-block'}}>
                        <Col span={12} className='login-form-versions'>版本：xxxxxxxx</Col>
                        <Col span={12} style={{textAlign:'right'}}>
                          <Button className='login-form-back-homepage-button'>返回首页 ></Button>
                        </Col>
                      </div>
                    </div>
                  </Col>
                  <Col span={2}/>
                </Row>
              </div>
            </div>
          <div className="login-bottom">底部</div> */}

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
                          <Button className='login-form-rigth-register-button'>注册</Button> 
                        </Col>
                      </Row>
                      <Form style={{height:'66%',padding:'0 23px'}}>
                        <FormItem style={{marginBottom:'0', height:'20%'}}>
                          <Input className='login-form-input' prefix={<Icon type="user" style={{fontSize:'18px', color: 'rgba(255,255,255)' }} />} placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem style={{marginBottom:'0', height:'25%'}}>
                          <Input className='login-form-input' prefix={<Icon type="lock" style={{fontSize:'18px', color: 'rgba(255,255,255)' }} />} type="password" placeholder="请输入密码" />
                        </FormItem>
                        <FormItem style={{marginBottom:'0', height:'25%'}}>
                          <Checkbox className='login-form-auto-login'>下次自动登陆</Checkbox>
                        </FormItem>
                        <Button htmlType="submit" className='login-form-login-button'>
                            登陆
                        </Button>
                        <Button className='login-form-forget-psd-button'>忘记密码？</Button>  
                      </Form>
                      <div style={{height:'10%', width:'100%', padding:'14px 15px 10px 15px', display:'inline-block'}}>
                        <Col span={12} className='login-form-versions'>版本：xxxxxxxx</Col>
                        <Col span={12} style={{textAlign:'right'}}>
                          <Button className='login-form-back-homepage-button'>返回首页 ></Button>
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

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
