import React,{ Component } from 'react';
import { Table, Button, Pagination, Icon, Row, Col } from 'antd';
// import { Button } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './putback.css';
// import icomImg from '../../assit/collect.png';

const Column = Table.Column;

const dataSource = [{
    collect: '1',
    put_back_code:'182116',
    bond_name:'14新供销债',
    latest_par:'5.07',
    special_term_years:'4+3',
    put_back_date:'2018-11-25',
    put_back_announcement_date:'2018-11-25',
    executive_price:'100.00'
  }];

class Putback extends Component{

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
                            title='回售代码'
                            dataIndex="put_back_code"
                            key="put_back_code"                    
                            width='10%'
                        />
                        <Column
                            title='债券简称'
                            dataIndex="bond_name"
                            key="bond_name"                    
                            width='20%'
                        />
                        <Column
                            title='最新票面'
                            dataIndex="latest_par"
                            key="latest_par"                    
                            width='10%'
                        />
                        <Column
                            title='特殊期限'
                            dataIndex="special_term_years"
                            key="special_term_years"                    
                            width='10%'
                        />
                        <Column
                            title='回售行权日'
                            dataIndex="put_back_date"
                            key="put_back_date"                    
                            width='10%'
                        />
                        <Column
                            title='回售公告日'
                            dataIndex="put_back_announcement_date"
                            key="put_back_announcement_date"                    
                            width='10%'
                        />
                        <Column
                            title='行权价格'
                            dataIndex="executive_price"
                            key="executive_price"                    
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
export default Putback;