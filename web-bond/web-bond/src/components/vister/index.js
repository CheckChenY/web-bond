import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './index.css';
class Vister extends Component{
    render(){
        return(
            <div>
                <div className='div-header'>
                    我是访客首页
                </div>
                <div style={{textAlign:'center',paddingTop:'40px'}}>
                    <Link to='/login'><Button type='primary'>去登录页</Button></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/register'><Button type='primary'>去注册页</Button></Link>
                </div>
            </div>
        )
    }
}

export default Vister;