import React,{ Component } from 'react';
import { Table } from 'antd';
import './rightSevenTableOne.css';

const Column = Table.Column;

const dataSource = [{
    issue_date:'2018-10-24',
    bond_type:'一般中期票据',
    bond_name:'15永泰能源MITN002',
    payment_date:'2018-11-20',
    issue_amount:'24.60',
    term:'1',
    release_rating:'AAA',
  }];

  

class RightSevenTableOne extends Component{

    

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
                        className='rightsevenTable-one-table'
                        size='middle'
                        dataSource={dataSource}
                        pagination={false}
                        rowClassName={(record, index)=>(index%2===0?
                                (
                                    'rightsevenTable-one-table-row-one'
                                ):(
                                    'rightsevenTable-one-table-row-two'
                                ))}
                    >
                        <Column
                            title='发行日'
                            dataIndex="issue_date"
                            key="issue_date"                    
                            width='4%'
                        />
                        <Column
                            title='债券类型'
                            dataIndex="bond_type"
                            key="bond_type"                    
                            width='5%'
                        />
                        <Column
                            title='债券简称'
                            dataIndex="bond_name"
                            key="bond_name"                    
                            width='5%'
                        />
                        <Column
                            title='缴款日'
                            dataIndex="payment_date"
                            key="payment_date"                    
                            width='5%'
                        />
                        <Column
                            title='发行额（亿）'
                            dataIndex="issue_amount"
                            key="issue_amount"                    
                            width='4%'
                        />
                        <Column
                            title='期限（年）'
                            dataIndex="term"
                            key="term"                    
                            width='3%'
                        />
                        <Column
                            title='发行评级'
                            dataIndex="release_rating"
                            key="release_rating"                    
                            width='4%'
                        />      
                    </Table>
                </div>
            </div>
        )
    }
}
export default RightSevenTableOne;