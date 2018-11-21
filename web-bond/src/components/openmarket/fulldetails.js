import React,{ Component } from 'react';
import { Table,Pagination} from 'antd';

import './fulldetails.css';

const { Column, ColumnGroup } = Table;

const data = [{
    key: '1',
    number: '1',
    cash_flow_data:'2018-10-06 至 2018-10-12',
    positive_expires:'0',
    peverse_repurchase:'5，200.0000',
    buy_bond:'0.0000',
    MLF_delivery:'45.0000',
    SLO_delivery:'',
    total:'9，235.0000'
  }, {
    key: '2',
    number: '1',
    cash_flow_data:'2018-10-06 至 2018-10-12',
    positive_expires:'0',
    peverse_repurchase:'5，200.0000',
    buy_bond:'0.0000',
    MLF_delivery:'45.0000',
    SLO_delivery:'',
    total:'9，235.0000'
  },{
    key: '3',
    number: '1',
    cash_flow_data:'2018-10-06 至 2018-10-12',
    positive_expires:'0',
    peverse_repurchase:'5，200.0000',
    buy_bond:'0.0000',
    MLF_delivery:'45.0000',
    SLO_delivery:'',
    total:'9，235.0000'
  }, {
    key: '4',
    number: '1',
    cash_flow_data:'2018-10-06 至 2018-10-12',
    positive_expires:'0',
    peverse_repurchase:'5，200.0000',
    buy_bond:'0.0000',
    MLF_delivery:'45.0000',
    SLO_delivery:'',
    total:'9，235.0000'
  },{
    key: '5',
    number: '1',
    cash_flow_data:'2018-10-06 至 2018-10-12',
    positive_expires:'0',
    peverse_repurchase:'5，200.0000',
    buy_bond:'0.0000',
    MLF_delivery:'45.0000',
    SLO_delivery:'',
    total:'9，235.0000'
  }];


class Fulldetails extends Component{

    render(){
        return(
            <div>
                <Table 
                    className='credit-issuance-table'
                    size='middle'
                    dataSource={data}
                    // pagination={{ pageSize: 16 , position:'bottom'}}
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
                            width='5%'
                            className='xxx' 
                        />
                        <Column
                            title='现金流发生日期'
                            dataIndex="cash_flow_data"
                            key="cash_flow_data"                    
                            width='10%'
                            className='xxx'
                        />
                        <Column
                            title='正回购到期'
                            dataIndex="positive_expires"
                            key="positive_expires"                    
                            width='10%'
                            className='xxx'
                        />
                        <Column
                            title='逆回购'
                            dataIndex="peverse_repurchase"
                            key="peverse_repurchase"                    
                            width='12%'
                            className='xxx'
                        />
                        <Column
                            title='买入债券'
                            dataIndex="buy_bond"
                            key="buy_bond"                    
                            width='10%'
                            className='xxx'
                        />
                        <Column
                            title='MLF(投放)'
                            dataIndex="MLF_delivery"
                            key="MLF_delivery"                    
                            width='12%'
                            className='xxx'
                        />
                        <Column
                            title='SLO(投放)'
                            dataIndex="SLO_delivery"
                            key="SLO_delivery"                    
                            width='10%'
                            className='xxx'
                        />
                        <Column
                            title='合计'
                            dataIndex="total"
                            key="total"                    
                            width='13%'
                            className='xxx'
                        />
                    </ColumnGroup>    
                    <ColumnGroup title="回笼量">
                        <Column
                            title='现金流发生日期'
                            dataIndex="cash_flow_data"
                            key="cash_flow_data"                    
                            width='10%'
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
export default Fulldetails;