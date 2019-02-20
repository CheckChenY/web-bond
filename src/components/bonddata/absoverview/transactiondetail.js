import React,{ Component } from 'react';
// import { Table, Button, Pagination } from 'antd';
import { Tabs } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './transactiondetail.css';

const TabPane = Tabs.TabPane;




class Transactiondetail extends Component{

    render(){
        return(
            <div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='transaction-detail-title-span'></div>
                        <span className='transaction-detail-title'>二级市场成交明细数据</span>
                    </div>
                    <Tabs defaultActiveKey="1" type="card" style={{marginTop:'10px'}}>
                        <TabPane tab="银行间ABS成交明细" key="1">
                            <table className='transaction-detail-table' >
                                <tbody>
                                    <tr>
                                        <td>代码</td>
                                        <td>债券简称</td>
                                        <td>交易日期</td>
                                        <td>加权价格</td>
                                        <td>交易量</td>
                                        <td>成交金额(万余)</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>1689186.1B</td>
                                        <td>16中盈1C</td>
                                        <td>2018-10-23</td>
                                        <td>102.36</td>
                                        <td>390.00</td>
                                        <td>39.921.57</td>
                                    </tr>
                                    <tr></tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td></td>
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
                                        <td></td>
                                    </tr>
                                    <tr></tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td></td>
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
                                        <td></td>
                                    </tr>
                                    <tr></tr>
                                </tbody>
                            </table>
                        </TabPane>
                        <TabPane tab="深交所ABS成交明细" key="2">
                            <table className='transaction-detail-table' >
                                <tbody>
                                    <tr >
                                        <td>深交所代码</td>
                                        <td>深交所债券简称</td>
                                        <td>深交所交易日期</td>
                                        <td>深交所加权价格</td>
                                        <td>深交所交易量</td>
                                        <td>深交所成交金额(万余)</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>1689186.1B</td>
                                        <td>16中盈1C</td>
                                        <td>2018-10-23</td>
                                        <td>102.36</td>
                                        <td>390.00</td>
                                        <td>39.921.57</td>
                                    </tr>
                                    <tr></tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td></td>
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
                                        <td></td>
                                    </tr>
                                    <tr></tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td></td>
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
                                        <td></td>
                                    </tr>
                                    <tr></tr>
                                </tbody>
                            </table>
                        </TabPane>
                        <TabPane tab="上交所ABS成交明细" key="3">
                            <table className='transaction-detail-table' >
                                <tbody>
                                    <tr>
                                        <td>上交所代码</td>
                                        <td>上交所债券简称</td>
                                        <td>上交所交易日期</td>
                                        <td>上交所加权价格</td>
                                        <td>上交所交易量</td>
                                        <td>上交所成交金额(万余)</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>1689186.1B</td>
                                        <td>16中盈1C</td>
                                        <td>2018-10-23</td>
                                        <td>102.36</td>
                                        <td>390.00</td>
                                        <td>39.921.57</td>
                                    </tr>
                                    <tr></tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td></td>
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
                                        <td></td>
                                    </tr>
                                    <tr></tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td></td>
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
                                        <td></td>
                                    </tr>
                                    <tr></tr>
                                </tbody>
                            </table>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default Transactiondetail;