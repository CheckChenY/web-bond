import React,{ Component } from 'react';
import { Table, Pagination } from 'antd';
import './bondcollecttext.css';

const Column = Table.Column;

const dataSource = [{
    collect: '1',
    issue_date:'2018-10-24',
    market:'银行间',
    bond_name:'13镇建工MIN001',
    value_date:'2017-02-12',
    arrival_date:'2017-02-13',
    issue_data:'2017-02-13',
    release_rating:'AAA'
  }, {
    collect: '1',
    issue_date:'2018-10-24',
    market:'银行间',
    bond_name:'13镇建工MIN001',
    value_date:'2017-02-12',
    arrival_date:'2017-02-13',
    issue_data:'2017-02-13',
    release_rating:'AAA'
  },{
    collect: '1',
    issue_date:'2018-10-24',
    market:'银行间',
    bond_name:'13镇建工MIN001',
    value_date:'2017-02-12',
    arrival_date:'2017-02-13',
    issue_data:'2017-02-13',
    release_rating:'AAA'
  },{
    collect: '1',
    issue_date:'2018-10-24',
    market:'银行间',
    bond_name:'13镇建工MIN001',
    value_date:'2017-02-12',
    arrival_date:'2017-02-13',
    issue_data:'2017-02-13',
    release_rating:'AAA'
  },{
    collect: '1',
    issue_date:'2018-10-24',
    market:'银行间',
    bond_name:'13镇建工MIN001',
    value_date:'2017-02-12',
    arrival_date:'2017-02-13',
    issue_data:'2017-02-13',
    release_rating:'AAA'
  },{
    collect: '1',
    issue_date:'2018-10-24',
    market:'银行间',
    bond_name:'13镇建工MIN001',
    value_date:'2017-02-12',
    arrival_date:'2017-02-13',
    issue_data:'2017-02-13',
    release_rating:'AAA'
  },{
    collect: '1',
    issue_date:'2018-10-24',
    market:'银行间',
    bond_name:'13镇建工MIN001',
    value_date:'2017-02-12',
    arrival_date:'2017-02-13',
    issue_data:'2017-02-13',
    release_rating:'AAA'
  },{
    collect: '1',
    issue_date:'2018-10-24',
    market:'银行间',
    bond_name:'13镇建工MIN001',
    value_date:'2017-02-12',
    arrival_date:'2017-02-13',
    issue_data:'2017-02-13',
    release_rating:'AAA'
  },{
    collect: '1',
    issue_date:'2018-10-24',
    market:'银行间',
    bond_name:'13镇建工MIN001',
    value_date:'2017-02-12',
    arrival_date:'2017-02-13',
    issue_data:'2017-02-13',
    release_rating:'AAA'
  }];


    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        // getCheckboxProps: record => ({
        //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
        //     name: record.name,
        // }),
    };

class Bondcollecttext extends Component{

    render(){
        return(
            <div>
                <Table 
                    className='bondcollecttext-rate-debt-bid-table'
                    size='middle'
                    dataSource={dataSource}
                    pagination={{ pageSize: 16 , position:'bottom'}}
                    rowSelection={rowSelection}
                    rowClassName={(index)=>(index%2===0?
                        (
                            'xxx'
                        ):(
                            'xxx'
                        ))}
                >
                    <Column
                        title='发行日'
                        dataIndex="issue_date"
                        key="issue_date"                    
                        width='12%'
                        className='xxx'
                    />
                    <Column
                        title='市场'
                        dataIndex="market"
                        key="market"                    
                        width='10%'
                        className='xxx'
                    />
                    
                    <Column
                        title='债券简称'
                        dataIndex="bond_name"
                        key="bond_name"                    
                        width='25%'
                        className='xxx'
                    />

                    <Column
                        title='起息日'
                        dataIndex="value_date"
                        key="value_date"                    
                        width='12%'
                        className='xxx'
                    />
                    <Column
                        title='到息日'
                        dataIndex="arrival_date"
                        key="arrival_date"                    
                        width='12%'
                        className='xxx'
                    />
                    <Column
                        title='发行日'
                        dataIndex="issue_data"
                        key="issue_data"                    
                        width='12%'
                        className='xxx'
                    />
                    <Column
                        title='发行评级'
                        dataIndex="release_rating"
                        key="release_rating"                    
                        width='10%'
                        className='xxx'
                    />                    
                </Table>
                <div style={{marginTop:'10px'}}>
                    <span style={{display:'inline-block', width:'15%'}}>显示1条结果</span>
                    <span style={{display:'inline-block', width:'80%', textAlign:'center'}}>
                        <Pagination
                            className='xxxX' 
                            defaultCurrent={10} 
                            total={10}
                        />
                    </span>
                </div>  
            </div>
        )
    }
}
export default Bondcollecttext;