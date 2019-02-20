import React,{ Component } from 'react';
import { Table } from 'antd';
import './rightFourTableThree.css';

const Column = Table.Column;

const dataSource = [{
    data:'2018-10-24',
    trasaction_code:'X1728282',
    bond_name:'13镇建工MIN001',
    interest_type:'到期',
    nomination_rate:'3.45',
    interest_frequency:'2',
    interest_payable:'6.99',
    },{
    data:'2018-10-24',
    trasaction_code:'X1728282',
    bond_name:'13镇建工MIN001',
    interest_type:'到期',
    nomination_rate:'3.45',
    interest_frequency:'2',
    interest_payable:'6.99',
    },{
    data:'2018-10-24',
    trasaction_code:'X1728282',
    bond_name:'13镇建工MIN001',
    interest_type:'到期',
    nomination_rate:'3.45',
    interest_frequency:'2',
    interest_payable:'6.99',
  }];

  

class RightFourTableThree extends Component{

    

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
                        className='rightfourTable-three-table'
                        size='middle'
                        dataSource={dataSource}
                        pagination={false}
                        rowClassName={(record, index)=>(index%2===0?
                                (
                                    'rightfourTable-three-table-row-one'
                                ):(
                                    'rightfourTable-three-table-row-two'
                                ))}
                    >
                        <Column
                            title='日期'
                            dataIndex="data"
                            key="data"                    
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
                            dataIndex="nomination_rate"
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
export default RightFourTableThree;