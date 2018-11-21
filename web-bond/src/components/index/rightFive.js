import React,{ Component } from 'react';
import { Table } from 'antd';
import './rightFive.css';

const Column = Table.Column;

const dataSource = [{
    trasaction_code:'293122',
    interest_type:'付息',
    bond_name:'13镇建工MIN001',
    announcement_date:'2018-10-24',
    issue_amount:'0.92',
    term:'8',
    release_rating:'C',
    issuer:'永泰能源股份有限公司',
    // },{
    //     trasaction_code:'293122',
    //     interest_type:'付息',
    //     bond_name:'13镇建工MIN001',
    //     announcement_date:'2018-10-24',
    //     issue_amount:'0.92',
    //     term:'8',
    //     release_rating:'C',
    //     issuer:'永泰能源股份有限公司',
  }];

  

class RightFive extends Component{

    

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
                        className='rightfiveTable-table'
                        size='middle'
                        dataSource={dataSource}
                        pagination={false}
                        rowClassName={(record, index)=>(index%2===0?
                                (
                                    'rightfiveTable-table-row-one'
                                ):(
                                    'rightfiveTable-table-row-two'
                                ))}
                    >
                        <Column
                            title='交易代码'
                            dataIndex="trasaction_code"
                            key="trasaction_code"                    
                            width='3%'
                        />
                        <Column
                            title='利率类型'
                            dataIndex="interest_type"
                            key="interest_type"                    
                            width='3%'
                        />
                        <Column
                            title='债券简称'
                            dataIndex="bond_name"
                            key="bond_name"                    
                            width='6%'
                        />
                        <Column
                            title='公告日期'
                            dataIndex="announcement_date"
                            key="announcement_date"                    
                            width='3%'
                        />
                        <Column
                            title='发行额（亿元）'
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
                            width='3%'
                        /> 
                        <Column
                            title='发行人'
                            dataIndex="issuer"
                            key="issuer"                    
                            width='6%'
                        />    
                    </Table>
                </div>
            </div>
        )
    }
}
export default RightFive;