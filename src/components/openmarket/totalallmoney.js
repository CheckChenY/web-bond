import React,{ Component } from 'react';
import { Table,Pagination} from 'antd';

import './totalallmoney.css';

const { Column, ColumnGroup } = Table;

const data = [{
    key: '1',
    number: '1',
    cash_fnding:'投放',
    bill_expires:'0.0000',
    positive_expires:'0.0000',
    peverse_repurchase:'5，200.0000',
    buy_bond:'0.0000',
    MLF_delivery:'4，035.0000',
    SLO_delivery:'',
    total:'9，235.0000'
  }, {
    key: '2',
    number: '1',
    cash_fnding:'投放',
    bill_expires:'0.0000',
    positive_expires:'0.0000',
    peverse_repurchase:'5，200.0000',
    buy_bond:'0.0000',
    MLF_delivery:'4，035.0000',
    SLO_delivery:'',
    total:'9，235.0000'
  },{
    key: '3',
    number: '1',
    cash_fnding:'投放',
    bill_expires:'0.0000',
    positive_expires:'0.0000',
    peverse_repurchase:'5，200.0000',
    buy_bond:'0.0000',
    MLF_delivery:'4，035.0000',
    SLO_delivery:'',
    total:'9，235.0000'
},{
    key: '4',
    number: '1',
    cash_fnding:'投放',
    bill_expires:'0.0000',
    positive_expires:'0.0000',
    peverse_repurchase:'5，200.0000',
    buy_bond:'0.0000',
    MLF_delivery:'4，035.0000',
    SLO_delivery:'',
    total:'9，235.0000'
  }];


class Totalallmoney extends Component{

    render(){
        return(
            <div>
                <Table 
                    className='credit-issuance-table'
                    size='middle'
                    dataSource={data}
                    pagination={{ pageSize: 16 , position:'bottom'}}
                    rowClassName={(record, index)=>(index%2===0?
                        (
                            'xxx'
                        ):(
                            'xxx'
                        ))}
                >
                    <ColumnGroup title="投放量">
                        <Column
                            title='序号'
                            dataIndex="number"
                            key="number"                    
                            // width='40px'
                            className='xxx' 
                        />
                        <Column
                            title='资金投放'
                            dataIndex="cash_fnding"
                            key="cash_fnding"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='票据到期'
                            dataIndex="bill_expires"
                            key="bill_expires"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='正回购到期'
                            dataIndex="positive_expires"
                            key="positive_expires"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='逆回购'
                            dataIndex="peverse_repurchase"
                            key="peverse_repurchase"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='买入债券'
                            dataIndex="buy_bond"
                            key="buy_bond"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='MLF(投放)'
                            dataIndex="MLF_delivery"
                            key="MLF_delivery"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='SLO(投放)'
                            dataIndex="SLO_delivery"
                            key="SLO_delivery"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='合计'
                            dataIndex="total"
                            key="total"                    
                            // width='40px'
                            className='xxx'
                        />
                    </ColumnGroup>    
                    <ColumnGroup title="回笼量">
                        <Column
                            title='资金投放'
                            dataIndex="cash_fnding"
                            key="cash_fnding"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='票据到期'
                            dataIndex="bill_expires"
                            key="bill_expires"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='正回购到期'
                            dataIndex="positive_expires"
                            key="positive_expires"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='逆回购'
                            dataIndex="peverse_repurchase"
                            key="peverse_repurchase"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='买入债券'
                            dataIndex="buy_bond"
                            key="buy_bond"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='MLF(投放)'
                            dataIndex="MLF_delivery"
                            key="MLF_delivery"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='SLO(投放)'
                            dataIndex="SLO_delivery"
                            key="SLO_delivery"                    
                            // width='40px'
                            className='xxx'
                        />
                        <Column
                            title='合计'
                            dataIndex="total"
                            key="total"                    
                            // width='40px'
                            className='xxx'
                        />
                    </ColumnGroup>   
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
export default Totalallmoney;