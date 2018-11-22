import React,{ Component } from 'react';
// import { Table, Button, Pagination } from 'antd';
// import { Row, Col, Input, Tabs } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './projectapproval.css';

// const TabPane = Tabs.TabPane;




class Projectapproval extends Component{

    render(){
        return(
            <div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='project-approval-title-span'></div>
                        <span className='project-approval-title'>资产证券化项目审批</span>
                    </div>
                    <div style={{widtd:'100%', backgroundColor:'#e9e9e9', height:'40px',lineHeight:'40px', marginTop:'10px', padding:'0 10px'}}>
                        沪深交易所受理ABS交易明细
                    </div>
                    <table style={{ arginTop:'10px' }} className='project-approval-table'>
                        <tbody>
                            <tr>
                                <td>项目名称</td>
                                <td>更新日期</td>
                                <td>原始权益人</td>
                                <td>承销商</td>
                                <td>承销商</td>
                            </tr>
                            <tr style={{background:'#f9f9f9'}}>
                                <td>华福-超越三号资产支持</td>
                                <td>2018-10-23</td>
                                <td>北京金茂信通</td>
                                <td>华福证券有限公司</td>
                                <td>华福证券有限公司</td>
                            </tr>
                            <tr>
                                <td>华福-超越三号资产支持</td>
                                <td>2018-10-23</td>
                                <td>北京金茂信通</td>
                                <td>华福证券有限公司</td>
                                <td>华福证券有限公司</td>
                            </tr>
                            <tr style={{background:'#f9f9f9'}}>
                                <td>华福-超越三号资产支持</td>
                                <td>2018-10-23</td>
                                <td>北京金茂信通</td>
                                <td>华福证券有限公司</td>
                                <td>华福证券有限公司</td>
                            </tr>
                            <tr>
                                <td>华福-超越三号资产支持</td>
                                <td>2018-10-23</td>
                                <td>北京金茂信通</td>
                                <td>华福证券有限公司</td>
                                <td>华福证券有限公司</td>
                            </tr>
                            <tr style={{background:'#f9f9f9'}}>
                                <td>华福-超越三号资产支持</td>
                                <td>2018-10-23</td>
                                <td>北京金茂信通</td>
                                <td>华福证券有限公司</td>
                                <td>华福证券有限公司</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{background:'#f9f9f9'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{background:'#f9f9f9'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{background:'#f9f9f9'}}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Projectapproval;