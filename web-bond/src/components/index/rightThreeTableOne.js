import React,{ Component } from 'react';
import { Table } from 'antd';
import './rightThreeTableOne.css';

const Column = Table.Column;

const dataSource = [{
    bond_name:'13镇建工MIN001',
    latest_face:'6.60',
    number_years:'5',
    special_years:'5+N',
    redemption_date:'2018-10-24',
    redemption_amount:'8',
    redemption_exercise_amount:'2018-11-20',
  }];

  

class RightThreeTableOne extends Component{

    

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
                        className='rightthreeTable-one-table'
                        size='middle'
                        dataSource={dataSource}
                        pagination={false}
                        rowClassName={(record, index)=>(index%2===0?
                                (
                                    'rightthreeTable-one-table-row-one'
                                ):(
                                    'rightthreeTable-one-table-row-two'
                                ))}
                    >
                        <Column
                            title='债券简称'
                            dataIndex="bond_name"
                            key="bond_name"                    
                            width='3%'
                        />
                        <Column
                            title='最新票面'
                            dataIndex="latest_face"
                            key="latest_face"                    
                            width='3%'
                        />
                        <Column
                            title='剩余期限年数'
                            dataIndex="number_years"
                            key="number_years"                    
                            width='3%'
                        />
                        <Column
                            title='特殊期限年数'
                            dataIndex="special_years"
                            key="special_years"                    
                            width='3%'
                        />
                        <Column
                            title='赎回公告日'
                            dataIndex="redemption_date"
                            key="redemption_date"                    
                            width='3%'
                        />
                        <Column
                            title='赎回金额'
                            dataIndex="redemption_amount"
                            key="redemption_amount"                    
                            width='3%'
                        />
                        <Column
                            title='赎回行权日'
                            dataIndex="redemption_exercise_amount"
                            key="redemption_exercise_amount"                    
                            width='3%'
                        />      
                    </Table>
                </div>
            </div>
        )
    }
}
export default RightThreeTableOne;