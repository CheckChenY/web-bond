import React,{ Component } from 'react';
import { Button, Input, Icon, Checkbox, Col, Row, Form, Select } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';

import './index.css';

import icomImg01 from '../assit/registerBK.jpg';
import icomImg02 from '../assit/registerFormBK.png';
import icomImg03 from '../assit/logo.png';


const FormItem = Form.Item;
const Option = Select.Option;


class Reginster extends Component{

    render(){
        // const self = this,
        // { plusAction ,plus} = self.props;
        return(
            <div style={{background:`url(${icomImg01}) no-repeat`, backgroundSize:'100% 100%', padding:'72px 78px'}}>
                <Row style={{borderRadius:'8px'}}>
                    <Col span={14} style={{backgroundColor:'rgba(32,32,32,0.82)'}}>
                        <div style={{marginTop:'20px'}}>
                            <div className='login-form-title-span'/>
                            <div className='login-form-title'>用户注册</div>
                        </div>
                        <div className='register-form-title-en'>user register</div>
                        <Form style={{marginTop:'28px'}} className='register-form'>
                            <Row>
                                <Col span={12} style={{padding:'0 20px 0 28px'}}>
                                    <FormItem>
                                        <Input className='register-form-input' prefix={<Icon type="user" style={{fontSize:'18px', color: 'rgba(255,255,255)' }}  />} placeholder="请输入用户名" />
                                    </FormItem>
                                    <FormItem>
                                        <Input className='register-form-input' prefix={<Icon type="lock" style={{fontSize:'18px', color: 'rgba(255,255,255)' }}  />} placeholder="请输入密码" />
                                    </FormItem>
                                    <FormItem>
                                        <Input className='register-form-input' prefix={<Icon type="lock" style={{fontSize:'18px', color: 'rgba(255,255,255)' }}  />} placeholder="请重复输入密码" />
                                    </FormItem>
                                    <FormItem>
                                        <Input className='register-form-input' prefix={<Icon type="mail" style={{fontSize:'18px', color: 'rgba(255,255,255)' }}  />} placeholder="请输入邮箱" />
                                    </FormItem>
                                    <FormItem>
                                        <Col span={16}>
                                            <Input className='register-form-input' prefix={<Icon type="safety" style={{fontSize:'18px', color: 'rgba(255,255,255)' }}  />} placeholder="请输入邮箱" />
                                        </Col>
                                        <Col span={8} >
                                            <Button className='register-form-verify-button'>获取验证码</Button>
                                        </Col>                                        
                                    </FormItem>
                                    <FormItem style={{marginTop:'20px'}} className='register-form-agreement'>
                                        <Checkbox>阅读并接受</Checkbox>
                                        <a href="http://www.baidu.com" >《xxxxxxx协议》</a>及<a href="http://www.sina.com" >《xxxx声明》</a>
                                    </FormItem>
                                    <FormItem style={{marginTop:'40px'}}>
                                        <Button className='register-form-register-button'>注册</Button>                  
                                    </FormItem>
                                </Col>
                                <Col span={12} style={{padding:'0 28px 0 20px'}}>
                                    <FormItem>
                                        <Input className='register-form-input' prefix={<Icon type="user-add" style={{fontSize:'18px', color: 'rgba(255,255,255)' }} />} placeholder="请输入姓名" />
                                    </FormItem>
                                    <FormItem>
                                        <Input className='register-form-input' prefix={<Icon type="phone" style={{fontSize:'18px', color: 'rgba(255,255,255)' }}  />} placeholder="请输入手机" />
                                    </FormItem>
                                    <FormItem>
                                        {/* <Select defaultValue="Zhejiang" prefix={<Icon type="man" style={{fontSize:'18px', color: 'rgba(255,255,255)' }}  />}>
                                            <Option value="男">Zhejiang</Option>
                                            <Option value="女">Jiangsu</Option>
                                        </Select> */}
                                        {/* <Input className='register-form-input' prefix={<Icon type="man" style={{fontSize:'18px', color: 'rgba(255,255,255)' }}  />} placeholder="请输入性别" /> */}
                                        
                                         <div className='register-form-sex'> 
                                            <Icon type="man" style={{fontSize:'18px', color: 'rgba(255,255,255)' }}  />
                                            <Select defaultValue="man" style={{ width: '100px' }} className='register-form-sex-select'>
                                                <Option value="man">男</Option>
                                                <Option value="woman">女</Option>
                                            </Select>
                                        </div>
                                    </FormItem>
                                    <FormItem>
                                        <Input className='register-form-input' prefix={<Icon type="bank" style={{fontSize:'18px', color: 'rgba(255,255,255)' }}  />} placeholder="请输入公司名称" />
                                    </FormItem>
                                    <FormItem>
                                        <Input className='register-form-input' prefix={<Icon type="contacts" style={{fontSize:'18px', color: 'rgba(255,255,255)' }}  />} placeholder="请输入联系地址" />
                                    </FormItem>
                                </Col>
                            </Row>                             
                        </Form>
                        <div style={{margin:'39px 0 10px 0', display:'inline-block', width:'100%'}}>
                            <Col span={12}>
                                <Button className='register-form-back-homepage-button'>{'< 返回首页'}</Button>
                            </Col>
                            <Col span={12} className='register-form-versions'>版本：xxxxxxxx</Col>                            
                        </div>
                    </Col>
                    <Col span={10} style={{background:`url(${icomImg02}) no-repeat`, backgroundSize:'100% 100%', height:'557px'}}>
                    <div style={{marginTop:'28px'}}>
                        <img src={icomImg03} alt="logo" style={{width:'36px', height:'36px', borderRadius:'50%', marginLeft:'30px'}}/>
                        <div className='register-top-text'>精胜债券数据资讯</div>
                    </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Reginster;