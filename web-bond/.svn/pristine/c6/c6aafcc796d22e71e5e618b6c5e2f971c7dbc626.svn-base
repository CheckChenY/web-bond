import React,{ Component } from 'react';
import { Table } from 'antd';
import './rightFourTableOne.css';

const Column = Table.Column;

const dataSource = [{
    
  }];

  

class RightFourTableOne extends Component{

    

    render(){

        // let dataSource01=[];       
        // dataSource01=dataSource.slice(0, 10);
        // while(dataSource01.length<10)
        // {
        //     dataSource01.push(Object(''))
        // }
        
        return(
            <div >
                <div >
                    <Table 
                        className='rightfourTable-one-table'
                        size='middle'
                        dataSource={dataSource}
                        pagination={false}
                        rowClassName={(record, index)=>(index%2===0?
                                (
                                    'rightfourTable-one-table-row-one'
                                ):(
                                    'rightfourTable-one-table-row-two'
                                ))}
                    >
                        <Column
                            title='日期'
                            dataIndex="date"
                            key="date"                    
                            width='3%'
                        />
                        <Column
                            title='交易代码'
                            dataIndex="trasaction_code"
                            key="trasaction_code"                    
                            width='3%'
                        />
                        <Column
                            title='债券简称'
                            dataIndex="bond_name"
                            key="bond_name"                    
                            width='3%'
                        />
                        <Column
                            title='利率类型'
                            dataIndex="interest_type"
                            key="interest_type"                    
                            width='3%'
                        />
                        <Column
                            title='票面利率（当期）'
                            dataIndex="nomination_rate "
                            key="nomination_rate"                    
                            width='3%'
                        />
                        <Column
                            title='年付息频率'
                            dataIndex="interest_frequency"
                            key="interest_frequency"                    
                            width='3%'
                        />
                        <Column
                            title='应付利息'
                            dataIndex="interest_payable"
                            key="interest_payable"                    
                            width='3%'
                        />      
                    </Table>
                </div>
            </div>
        )
    }
}
export default RightFourTableOne;