import React,{ Component } from 'react';
// import { Table, Button, Pagination } from 'antd';
// import { Row, Col, Input, Tabs } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './basiccondition.css';

// const TabPane = Tabs.TabPane;



class Basiccondition extends Component{

    render(){
        return(
            <div style={{padding:'0 15px 15px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                    <div className='basic-condition-title-span'></div>
                    <span className='basic-condition-title'>基本条款</span>
                </div>
                <table style={{width:'100%', marginTop:'10px'}}>
                    <tbody>
                        <tr>
                            <td className='basic-condition-table-col-one'>债券代码</td>
                            <td className='basic-condition-table-col-two'>010107</td>
                            <td className='basic-condition-table-col-one'>债券简称</td>
                            <td className='basic-condition-table-col-two'>债券代码</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>当前余额(亿元)</td>
                            <td className='basic-condition-table-col-two'>240.00</td>
                            <td className='basic-condition-table-col-one'>债券类型</td>
                            <td className='basic-condition-table-col-two'>240.00</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>质押卷代码</td>
                            <td className='basic-condition-table-col-two'>090107 0107质押</td>
                            <td className='basic-condition-table-col-one'>折合标准券(元)</td>
                            <td className='basic-condition-table-col-two'>090107 0107质押</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>上市日期</td>
                            <td className='basic-condition-table-col-two'>2001-08-20</td>
                            <td className='basic-condition-table-col-one'>摘牌日期</td>
                            <td className='basic-condition-table-col-two'>2001-08-20</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>交易市场</td>
                            <td className='basic-condition-table-col-two'>010007.IB、101917.SZ、010107.SH</td>
                            <td className='basic-condition-table-col-one'>海外评级</td>
                            <td className='basic-condition-table-col-two'>010007.IB、101917.SZ、010107.SH</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>最新债券评级</td>
                            <td className='basic-condition-table-col-two'>—</td>
                            <td className='basic-condition-table-col-one'>评级机构</td>
                            <td className='basic-condition-table-col-two'>—</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>票面利率(当期)</td>
                            <td className='basic-condition-table-col-two'>4.2600</td>
                            <td className='basic-condition-table-col-one'>发行价格／最新面值</td>
                            <td className='basic-condition-table-col-two'>4.2600</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>利率类型</td>
                            <td className='basic-condition-table-col-two'>固定利率</td>
                            <td className='basic-condition-table-col-one'>息票品种</td>
                            <td className='basic-condition-table-col-two'>固定利率</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>付息频率</td>
                            <td className='basic-condition-table-col-two'>每年付息2次</td>
                            <td className='basic-condition-table-col-one'>下一付息日</td>
                            <td className='basic-condition-table-col-two'>每年付息2次</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>利率说明</td>
                            <td className='basic-condition-table-col-two'>4.26%</td>
                            <td className='basic-condition-table-col-one'>距下一付息日</td>
                            <td className='basic-condition-table-col-two'>4.26%</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>计息基准</td>
                            <td className='basic-condition-table-col-two'>A/365</td>
                            <td className='basic-condition-table-col-one'>票息类型</td>
                            <td className='basic-condition-table-col-two'>A/365</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>剩余期限(年)</td>
                            <td className='basic-condition-table-col-two'>2.7671</td>
                            <td className='basic-condition-table-col-one'>期限(年)</td>
                            <td className='basic-condition-table-col-two'>2.7671</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>起息利息</td>
                            <td className='basic-condition-table-col-two'>2001-07-31</td>
                            <td className='basic-condition-table-col-one'>到期日期</td>
                            <td className='basic-condition-table-col-two'>2001-07-31</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>发行规模(亿元)</td>
                            <td className='basic-condition-table-col-two'>240</td>
                            <td className='basic-condition-table-col-one'>发行方式</td>
                            <td className='basic-condition-table-col-two'>240</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>债券全称</td>
                            <td className='basic-condition-table-col-two'>2001年记账式七期国债(20年)</td>
                            <td className='basic-condition-table-col-one'>是否城投资曲线样本券</td>
                            <td className='basic-condition-table-col-two'>2001年记账式七期国债(20年)</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>发行人</td>
                            <td className='basic-condition-table-col-two'>中华人民共和国财政部</td>
                            <td className='basic-condition-table-col-one'>发行人企业性质</td>
                            <td className='basic-condition-table-col-two'>中华人民共和国财政部</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>发行人注册地址</td>
                            <td className='basic-condition-table-col-two'>北京市三里河路三巷3号</td>
                            <td className='basic-condition-table-col-one'></td>
                            <td className='basic-condition-table-col-two'></td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>托管机构</td>
                            <td className='basic-condition-table-col-two'>中央国债登记结算有限责任公司</td>
                            <td className='basic-condition-table-col-one'>担保人</td>
                            <td className='basic-condition-table-col-two'>中央国债登记结算有限责任公司</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>增信方式</td>
                            <td className='basic-condition-table-col-two'>—</td>
                            <td className='basic-condition-table-col-one'>增信方式</td>
                            <td className='basic-condition-table-col-two'>—</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>缴款日期</td>
                            <td className='basic-condition-table-col-two'>—</td>
                            <td className='basic-condition-table-col-one'>主承销商</td>
                            <td className='basic-condition-table-col-two'>—</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>内含特殊条款</td>
                            <td className='basic-condition-table-col-two'>—</td>
                            <td className='basic-condition-table-col-one'>下一行权日</td>
                            <td className='basic-condition-table-col-two'>—</td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'>条款说明</td>
                            <td className='basic-condition-table-col-two'>—</td>
                            <td className='basic-condition-table-col-one'></td>
                            <td className='basic-condition-table-col-two'></td>
                        </tr>
                        <tr>
                            <td className='basic-condition-table-col-one'></td>
                            <td className='basic-condition-table-col-two'></td>
                            <td className='basic-condition-table-col-one'></td>
                            <td className='basic-condition-table-col-two'></td>
                        </tr>             
                    </tbody>
                </table>          
            </div>
        )
    }
}
export default Basiccondition;