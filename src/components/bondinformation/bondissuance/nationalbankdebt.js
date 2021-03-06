import React,{ Component } from 'react';
import { Table, Button, Pagination, Icon, Row, Col } from 'antd';
// import { Button } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './nationalbankdebt.css';
// import icomImg from '../../assit/collect.png';

const Column = Table.Column;

const dataSource = [{
    collect: '1',
    issue_date:'2018-10-24',
    tender_date:'10:30～11:30',
    bond_name:'13镇建工MIN001',
    deadline:'1',
    circulation:'24.60',
    bond_type:'地方政府债',
    weighted_interest:'—',
  }];

  

class Nationalbankdebt extends Component{

    

    render(){

        let dataSource01=[];       
        dataSource01=dataSource.slice(0, 15);
        while(dataSource01.length<15)
        {
            dataSource01.push(Object(''))
        }
        
        return(
            <div >
                <div style={{overflowX:'auto'}}>
                    <Table 
                        className='national-bank-debt-table'
                        size='middle'
                        dataSource={dataSource01}
                        pagination={false}
                        rowClassName={(record, index)=>(index%2===0?
                                (
                                    'national-bank-debt-table-row-one'
                                ):(
                                    'national-bank-debt-table-row-two'
                                ))}
                    >
                        <Column
                            title='收藏'
                            dataIndex="collect"
                            key="collect"
                            style={{width:'1000px'}}                    
                            width='10%'
                            render={(status,record) => 
                                (status?(
                                    <span>
                                        <Button className='national-bank-debt-collect-button'>
                                            <Icon type="heart" style={{color:'#ff6161', height:'16px', width:'16px'}} />
                                        </Button>
                                    </span>
                                ):('')
                            )
                            }
                        />
                        <Column
                            title='发行日'
                            dataIndex="issue_date"
                            key="issue_date"                    
                            width='10%'
                        />
                        <Column
                            title='招标日期'
                            dataIndex="tender_date"
                            key="tender_date"                    
                            width='10%'
                        />
                        <Column
                            title='债券简称'
                            dataIndex="bond_name"
                            key="bond_name"                    
                            width='20%'
                        />
                        <Column
                            title='期限(年)'
                            dataIndex="deadline"
                            key="deadline"                    
                            width='10%'
                        />
                        <Column
                            title='发行额(亿)'
                            dataIndex="circulation"
                            key="circulation"                    
                            width='10%'
                        />
                        <Column
                            title='债券类型'
                            dataIndex="bond_type"
                            key="bond_type"                    
                            width='10%'
                        />
                        <Column
                            title='加权利率'
                            dataIndex="weighted_interest"
                            key="weighted_interest"                    
                            width='10%'
                        />
                        
                                    
                    </Table>
                </div>
                <div style={{height:'40px'}}>
                    <Row>
                        <Col span={3}>
                            <div className='national-bank-debt-total'>显示{dataSource.length}条结果</div>
                        </Col>
                        <Col span={21} style={{textAlign:'center'}}>
                            <Pagination
                                className='national-bank-debt-pagination'
                                size="small" 
                                pageSize={15}
                                defaultCurrent={1}
                                total={dataSource.length}
                                showSizeChanger
                                showQuickJumper
                                // onChange={
                                //     (current, size)=>getHKMarketstockList(current,userAccount)
                                // }
                            />
                        </Col>
                    </Row>
                </div>  
            </div>
        )
    }
}
export default Nationalbankdebt;