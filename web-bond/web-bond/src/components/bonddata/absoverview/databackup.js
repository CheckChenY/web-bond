import React,{ Component } from 'react';
// import { Table, Button, Pagination } from 'antd';
// import { Row, Col } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './databackup.css';




class Databackup extends Component{

    render(){
        return(
            <div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                   <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='data-backup-title-span'></div>
                        <span className='data-backup-title'>资产证券化备案数据</span>
                    </div>
                    <div style={{widtd:'100%', backgroundColor:'#e9e9e9', height:'40px',lineHeight:'40px', marginTop:'10px',padding:'0 20px'}}>
                        ABS发行备案明细
                    </div>
                    <table className='data-backup-table' style={{ marginTop:'10px' }}>
                        <tbody>
                            <tr>
                                <td>项目名称</td>
                                <td>更新日期</td>
                                <td>原始权益人</td>
                                <td>计划管理人</td>
                                <td>备案场所</td>
                            </tr>
                            <tr style={{background:'#f9f9f9'}}>
                                <td>天风证券-比亚迪新能源...</td>
                                <td>2018-10-23</td>
                                <td>深圳比亚迪国际...</td>
                                <td>天风证券股份有限公司</td>
                                <td>基金业协会</td>
                            </tr>
                            <tr>
                                <td>天风证券-比亚迪新能源...</td>
                                <td>2018-10-23</td>
                                <td>深圳比亚迪国际...</td>
                                <td>天风证券股份有限公司</td>
                                <td>基金业协会</td>
                            </tr>
                            <tr style={{background:'#f9f9f9'}}>
                                <td>天风证券-比亚迪新能源...</td>
                                <td>2018-10-23</td>
                                <td>深圳比亚迪国际...</td>
                                <td>天风证券股份有限公司</td>
                                <td>基金业协会</td>
                            </tr>
                            <tr>
                                <td>天风证券-比亚迪新能源...</td>
                                <td>2018-10-23</td>
                                <td>深圳比亚迪国际...</td>
                                <td>天风证券股份有限公司</td>
                                <td>基金业协会</td>
                            </tr>
                            <tr style={{background:'#f9f9f9'}}>
                                <td>天风证券-比亚迪新能源...</td>
                                <td>2018-10-23</td>
                                <td>深圳比亚迪国际...</td>
                                <td>天风证券股份有限公司</td>
                                <td>基金业协会</td>
                            </tr>
                            <tr></tr>
                            <tr style={{background:'#f9f9f9'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr></tr>
                            <tr style={{background:'#f9f9f9'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr></tr>
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
export default Databackup;