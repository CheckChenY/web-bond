import React,{ Component } from 'react';
// import { Table, Button, Pagination } from 'antd';
// import { Row, Col, Input, Tabs } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './creditrating.css';

// const TabPane = Tabs.TabPane;



class Creditrating extends Component{

    render(){
        return(
            <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                    <div className='credit-rating-title-span'></div>
                    <span className='credit-rating-title'>信用评级</span>
                </div>
                <table style={{width:'100%', marginTop:'10px'}}>
                    <tbody>
                        <tr className='credit-rating-table-head'>
                            <td>评级标准</td>
                            <td>发布日期</td>
                            <td>评级展望</td>
                            <td>变动方向</td>
                            <td>评级机构</td>
                            <td>债券类型</td>
                        </tr>
                        <tr className='credit-rating-table-row'>
                            <td>债券评级</td>
                            <td>2018-08-07</td>
                            <td>—</td>
                            <td>首次</td>
                            <td>上海新世纪</td>
                            <td>长期信用评级</td>
                        </tr>
                        <tr className='credit-rating-table-row' style={{backgroundColor: '#f9f9f9'}}>
                            <td>债券评级</td>
                            <td>2018-08-07</td>
                            <td>—</td>
                            <td>首次</td>
                            <td>上海新世纪</td>
                            <td>长期信用评级</td>
                        </tr>                                 
                    </tbody>
                </table>          
            </div>
        )
    }
}
export default Creditrating;