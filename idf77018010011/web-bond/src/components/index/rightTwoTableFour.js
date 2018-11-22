import React,{ Component } from 'react';
import { Table } from 'antd';
import './rightTwoTableFour.css';

const Column = Table.Column;

const dataSource = [{
    issue_date:'2018-10-24',
    tender_date:'2018-11-20',
    bond_name:'13镇建工MIN001',
    deadline:'1',
    circulation:'24.60',
    bond_type:'地方政府债',
    weighted_interest:'—',
    },{
    issue_date:'2018-10-24',
    tender_date:'2018-11-20',
    bond_name:'13镇建工MIN001',
    deadline:'1',
    circulation:'24.60',
    bond_type:'地方政府债',
    weighted_interest:'—',
    },{
    issue_date:'2018-10-24',
    tender_date:'2018-11-20',
    bond_name:'13镇建工MIN001',
    deadline:'1',
    circulation:'24.60',
    bond_type:'地方政府债',
    weighted_interest:'—',
  }];

  

class RightTwoTableFour extends Component{

    

    render(){

        let dataSource01=[];       
        dataSource01=dataSource.slice(0, 10);
        while(dataSource01.length<10)
        {
            dataSource01.push(Object(''))
        }
        
        return(
            <div >
                <div >
                    <Table 
                        className='righttwoTable-four-table'
                        size='middle'
                        dataSource={dataSource01}
                        pagination={false}
                        rowClassName={(record, index)=>(index%2===0?
                                (
                                    'righttwoTable-four-table-row-one'
                                ):(
                                    'righttwoTable-four-table-row-two'
                                ))}
                    >
                        <Column
                            title='发行日'
                            dataIndex="issue_date"
                            key="issue_date"                    
                            width='3%'
                        />
                        <Column
                            title='招标日期'
                            dataIndex="tender_date"
                            key="tender_date"                    
                            width='3%'
                        />
                        <Column
                            title='债券简称'
                            dataIndex="bond_name"
                            key="bond_name"                    
                            width='3%'
                        />
                        <Column
                            title='期限(年)'
                            dataIndex="deadline"
                            key="deadline"                    
                            width='3%'
                        />
                        <Column
                            title='发行额(亿)'
                            dataIndex="circulation"
                            key="circulation"                    
                            width='3%'
                        />
                        <Column
                            title='债券类型'
                            dataIndex="bond_type"
                            key="bond_type"                    
                            width='3%'
                        />
                        <Column
                            title='加权利率'
                            dataIndex="weighted_interest"
                            key="weighted_interest"                    
                            width='3%'
                        />      
                    </Table>
                </div>
            </div>
        )
    }
}
export default RightTwoTableFour;