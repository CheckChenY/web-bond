import React,{ Component } from 'react';
// import { Table, Button, Pagination } from 'antd';
import { DatePicker, Button, } from 'antd';
import moment from 'moment';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './cashflow.css';

const RangePicker = DatePicker.RangePicker;


class Cashflow extends Component{

    render(){
        return(
            <div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='cash-flow-title-span'></div>
                        <span className='cash-flow-title'>现金流</span>
                    </div>
                    <div style={{marginTop:'12px'}}>
                        <span>发生日期</span>
                        <RangePicker
                            ranges={{ 
                                Today: [moment(), moment()], 
                                最近一周: [moment().subtract(7, 'days'), moment()],
                                最近三周: [moment().subtract(21, 'days'), moment()],
                                最近一月: [moment().subtract(1, 'months'), moment()],
                                最近三月: [moment().subtract(3, 'months'), moment()],
                                最近半年: [moment().subtract(6, 'months'), moment()],
                                最近一年: [moment().subtract(12, 'months'), moment()],
                            }}
                            style={{width:'280px', margin:'0 5px'}}
                            format="YYYY/MM/DD"
                        />
                        <Button>确认</Button>
                    </div>
                    <table style={{marginTop:'15px'}} className='cash-flow-table'>
                        <tbody>
                            <tr style={{background:'#f2f2f2'}}>
                                <td>期末每百元面额应付利息</td>
                                <td>期末每百元面额应付本金</td>
                                <td>期末每百元面额现金流</td>
                                <td>现金流类型</td>
                                <td>票面利率(%)</td>
                            </tr>
                            <tr>
                                <td>2.1300</td>
                                <td>0.0000</td>
                                <td>2.1300</td>
                                <td>付息</td>
                                <td>4.2600</td>
                            </tr>
                            <tr style={{ background:'#f9f9f9'}}>
                                <td>2.1300</td>
                                <td>0.0000</td>
                                <td>2.1300</td>
                                <td>付息</td>
                                <td>4.2600</td>
                            </tr>
                            <tr>
                                <td>2.1300</td>
                                <td>0.0000</td>
                                <td>2.1300</td>
                                <td>付息</td>
                                <td>4.2600</td>
                            </tr>
                            <tr style={{ background:'#f9f9f9'}}>
                                <td>2.1300</td>
                                <td>0.0000</td>
                                <td>2.1300</td>
                                <td>付息</td>
                                <td>4.2600</td>
                            </tr>
                            <tr>
                                <td>2.1300</td>
                                <td>0.0000</td>
                                <td>2.1300</td>
                                <td>付息</td>
                                <td>4.2600</td>
                            </tr>
                            <tr style={{ background:'#f9f9f9'}}>
                                <td>2.1300</td>
                                <td>0.0000</td>
                                <td>2.1300</td>
                                <td>付息</td>
                                <td>4.2600</td>
                            </tr>                        
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Cashflow;