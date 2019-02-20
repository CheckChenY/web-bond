import React,{ Component } from 'react';
import { Table } from 'antd';
import './rightSixTableTwo.css';

const Column = Table.Column;

const dataSource = [{
    rating_adjustment_date:'2018-10-24',
    bond_name:'15永泰能源MITN002',
    debt_rating:'C',
    subject_rating:'C',
    guarantor_rating:'C',
    issuer:'永泰能源股份有限公司',
    guarantor:'永泰集团有限公司',
    },{
    rating_adjustment_date:'2018-10-24',
    bond_name:'15永泰能源MITN002',
    debt_rating:'C',
    subject_rating:'C',
    guarantor_rating:'C',
    issuer:'永泰能源股份有限公司',
    guarantor:'永泰集团有限公司',
    },{
  }];

  

class RightSixTableTwo extends Component{

    

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
                        className='rightsixTable-two-table'
                        size='middle'
                        dataSource={dataSource}
                        pagination={false}
                        rowClassName={(record, index)=>(index%2===0?
                                (
                                    'rightsixTable-two-table-row-one'
                                ):(
                                    'rightsixTable-two-table-row-two'
                                ))}
                    >
                        <Column
                            title='评级调整日期'
                            dataIndex="rating_adjustment_date"
                            key="rating_adjustment_date"                    
                            width='4%'
                        />
                        <Column
                            title='债券简称'
                            dataIndex="bond_name"
                            key="bond_name"                    
                            width='4%'
                        />
                        
                        <Column
                            title='债项评级'
                            dataIndex="debt_rating"
                            key="debt_rating"                    
                            width='2%'
                        />
                        <Column
                            title='主体评级'
                            dataIndex="subject_rating"
                            key="subject_rating"                    
                            width='2%'
                        />
                        <Column
                            title='担保人评级'
                            dataIndex="guarantor_rating"
                            key="guarantor_rating"                    
                            width='2%'
                        />
                        <Column
                            title='发行人'
                            dataIndex="issuer"
                            key="issuer"                    
                            width='6%'
                        />
                        <Column
                            title='担保人'
                            dataIndex="guarantor"
                            key="guarantor"                    
                            width='6%'
                        />      
                    </Table>
                </div>
            </div>
        )
    }
}
export default RightSixTableTwo;