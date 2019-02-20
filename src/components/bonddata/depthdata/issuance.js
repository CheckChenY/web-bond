import React,{ Component } from 'react';
// import { Table, Button, Pagination } from 'antd';
// import { Row, Col, Input, Tabs } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './issuance.css';

// const TabPane = Tabs.TabPane;



class Issuance extends Component{

    render(){
        return(
            <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                    <div className='issuance-title-span'></div>
                    <span className='issuance-title'>发行情况</span>
                </div>
                <table style={{width:'100%', marginTop:'10px'}}>
                    <tbody>
                        <tr>
                            <td className='issuance-table-col-one'>发行起始日期</td>
                            <td className='issuance-table-col-two'>2018-10-22</td>
                            <td className='issuance-table-col-one'>发行截止日期</td>
                            <td className='issuance-table-col-two'>2018-10-22</td>
                        </tr>
                        <tr>
                            <td className='issuance-table-col-one'>缴款日期</td>
                            <td className='issuance-table-col-two'>2018-10-24</td>
                            <td className='issuance-table-col-one'>发行方式</td>
                            <td className='issuance-table-col-two'>公墓</td>
                        </tr>
                        <tr>
                            <td className='issuance-table-col-one'>上市日期</td>
                            <td className='issuance-table-col-two'>—</td>
                            <td className='issuance-table-col-one'>发行公告日</td>
                            <td className='issuance-table-col-two'>2018-10-15</td>
                        </tr>
                        <tr>
                            <td className='issuance-table-col-one'>计划发行量(亿元)</td>
                            <td className='issuance-table-col-two'>1.90</td>
                            <td className='issuance-table-col-one'>实际发行量(亿元)</td>
                            <td className='issuance-table-col-two'>1.90</td>
                        </tr>
                        <tr>
                            <td className='issuance-table-col-one'>薄记管理人</td>
                            <td className='issuance-table-col-two'>华泰证券股份有限公司</td>
                            <td className='issuance-table-col-one'>承销方式</td>
                            <td className='issuance-table-col-two'>余额包销</td>
                        </tr>
                        <tr>
                            <td className='issuance-table-col-one'>主承销商</td>
                            <td className='issuance-table-col-two'>华泰证券股份有限公司</td>
                            <td className='issuance-table-col-one'>分销期</td>
                            <td className='issuance-table-col-two'>2018-10-23-2018-10-24</td>
                        </tr>
                        <tr>
                            <td className='issuance-table-col-one'>副承销商</td>
                            <td className='issuance-table-col-two'>—</td>
                            <td className='issuance-table-col-one'>招标方式</td>
                            <td className='issuance-table-col-two'>薄记建档</td>
                        </tr>
                        <tr>
                            <td className='issuance-table-col-one'>主承金额分摊</td>
                            <td className='issuance-table-col-two'>华泰证券股份有限公司-19000万</td>
                            <td className='issuance-table-col-one'>中标区间</td>
                            <td className='issuance-table-col-two'>—</td>
                        </tr>
                        <tr>
                            <td className='issuance-table-col-one'>承销团</td>
                            <td className='issuance-table-col-two'>华泰证券股份有限公司、广发证券股份有限…</td>
                            <td className='issuance-table-col-one'>发行费率(%)</td>
                            <td className='issuance-table-col-two'>—</td>
                        </tr>
                        <tr>
                            <td className='issuance-table-col-one'>招标标的</td>
                            <td className='issuance-table-col-two'>利率</td>
                            <td className='issuance-table-col-one'>上网发行日期</td>
                            <td className='issuance-table-col-two'>—</td>
                        </tr>
                        <tr>
                            <td className='issuance-table-col-one'>中标价格</td>
                            <td className='issuance-table-col-two'>—</td>
                            <td className='issuance-table-col-one'>同期债</td>
                            <td className='issuance-table-col-two'>—</td>
                        </tr>                   
                        <tr>
                            <td className='issuance-table-col-one'>认购倍数</td>
                            <td className='issuance-table-col-two'>—</td>
                            <td className='issuance-table-col-one'></td>
                            <td className='issuance-table-col-two'></td>
                        </tr>
                        <tr>
                            <td className='issuance-table-col-one'>上网认购代码</td>
                            <td className='issuance-table-col-two'>—</td>
                            <td className='issuance-table-col-one'></td>
                            <td className='issuance-table-col-two'></td>
                        </tr> 
                        <tr>
                            <td className='issuance-table-col-one'>上网发行数量</td>
                            <td className='issuance-table-col-two'>—</td>
                            <td className='issuance-table-col-one'></td>
                            <td className='issuance-table-col-two'></td>
                        </tr> 
                        <tr>
                            <td className='issuance-table-col-one'></td>
                            <td className='issuance-table-col-two'></td>
                            <td className='issuance-table-col-one'></td>
                            <td className='issuance-table-col-two'></td>
                        </tr>
                        <tr>
                            <td className='issuance-table-col-one'></td>
                            <td className='issuance-table-col-two'></td>
                            <td className='issuance-table-col-one'></td>
                            <td className='issuance-table-col-two'></td>
                        </tr>              
                    </tbody>
                </table>          
            </div>
        )
    }
}
export default Issuance;