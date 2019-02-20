import React,{ Component } from 'react';
import { Table, Pagination } from 'antd';
// import { Button } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './cyclestatistics.css';
// import icomImg from '../assit/collect.png';

const Column = Table.Column;

const dataSource = [{
    number: '1',
    cash_flow_date:'2018-10-09',
    variety:'逆回购到期',
    code:'R014',
    codename:'14日回购',
    term:'14天',
    coupon:'8',
    money:'600.00'
}, {
    number: '1',
    cash_flow_date:'2018-10-09',
    variety:'逆回购到期',
    code:'R014',
    codename:'14日回购',
    term:'14天',
    coupon:'8',
    money:'600.00'
  },{
    number: '1',
    cash_flow_date:'2018-10-09',
    variety:'逆回购到期',
    code:'R014',
    codename:'14日回购',
    term:'14天',
    coupon:'8',
    money:'600.00'
  },{
    number: '1',
    cash_flow_date:'2018-10-09',
    variety:'逆回购到期',
    code:'R014',
    codename:'14日回购',
    term:'14天',
    coupon:'8',
    money:'600.00'
  },{
    number: '1',
    cash_flow_date:'2018-10-09',
    variety:'逆回购到期',
    code:'R014',
    codename:'14日回购',
    term:'14天',
    coupon:'8',
    money:'600.00'
  },{
    number: '1',
    cash_flow_date:'2018-10-09',
    variety:'逆回购到期',
    code:'R014',
    codename:'14日回购',
    term:'14天',
    coupon:'8',
    money:'600.00'
},{
    number: '1',
    cash_flow_date:'2018-10-09',
    variety:'逆回购到期',
    code:'R014',
    codename:'14日回购',
    term:'14天',
    coupon:'8',
    money:'600.00'

  }];


class Cyclestatistics extends Component{

    render(){
        return(
            <div>
                <Table 
                    className='credit-issuance-table'
                    size='middle'
                    dataSource={dataSource}
                    pagination={{ pageSize: 16 , position:'bottom'}}
                    rowClassName={(record, index)=>(index%2===0?
                        (
                            'xxx'
                        ):(
                            'xxx'
                        ))}
                    // style={{height:'500px'}}
                >
                    <Column
                        title='序号'
                        dataIndex="number"
                        key="number"                    
                        width='10%'
                        className='xxx'
                            
                    />
                    <Column
                        title='现金流发生日期'
                        dataIndex="cash_flow_date"
                        key="cash_flow_date"                    
                        width='15%'
                        className='xxx'
                    />
                    <Column
                        title='品种'
                        dataIndex="variety"
                        key="variety"                    
                        width='10%'
                        className='xxx'
                    />
                    <Column
                        title='代码'
                        dataIndex="code"
                        key="code"                    
                        width='10%'
                        className='xxx'
                    />
                    <Column
                        title='名称'
                        dataIndex="codename"
                        key="name"                    
                        width='10%'
                        className='xxx'
                    />
                    <Column
                        title='期限'
                        dataIndex="term"
                        key="term"                    
                        width='10%'
                        className='xxx'
                    />
                    <Column
                        title='票息(%)'
                        dataIndex="coupon"
                        key="coupon"                    
                        width='10%'
                        className='xxx'
                    />
                    <Column
                        title='金额'
                        dataIndex="money"
                        key="money"                    
                        width='10%'
                        className='xxx'
                    />              
                </Table>
                <div style={{marginTop:'10px'}}>
                    <span style={{display:'inline-block', width:'10%'}}>显示1条结果</span>
                    <span style={{display:'inline-block', width:'80%', textAlign:'center'}}>
                        <Pagination
                            className='xxxx' 
                            defaultCurrent={10} 
                            total={10}
                            // onChange={
                            //     (current, size)=>getHKMarketstockList(current,userAccount)
                            // }
                        />
                    </span>
                </div>  
            </div>
        )
    }
}
export default Cyclestatistics;