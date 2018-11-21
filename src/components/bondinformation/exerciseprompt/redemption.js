import React,{ Component } from 'react';
import { Table, Button, Pagination, Icon, Row, Col } from 'antd';
// import { Button } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './redemption.css';
// import icomImg from '../../assit/collect.png';

const Column = Table.Column;

const dataSource = [{
    collect: '1',
    bond_name:'13国电MTN001',
    latest_par:'6.60',
    remaining_years:'5',
    special_term_years:'5+N',
    redemption_announcement_day:'2018-09-25',
    redemption_money:'8',
    redemption_date:'2018-12-20'
  }];

class Redemption extends Component{

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
                            title='剩余期限年数'
                            dataIndex="remaining_years"
                            key="remaining_years"                    
                            width='10%'
                        />
                        <Column
                            title='特殊期限年数'
                            dataIndex="special_term_years"
                            key="special_term_years"                    
                            width='10%'
                        />
                        <Column
                            title='赎回公告日'
                            dataIndex="redemption_announcement_day"
                            key="redemption_announcement_day"                    
                            width='10%'
                        />
                        <Column
                            title='赎回金额'
                            dataIndex="redemption_money"
                            key="redemption_money"                    
                            width='10%'
                        />
                        <Column
                            title='赎回行权日'
                            dataIndex="redemption_date"
                            key="redemption_date"                    
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
export default Redemption;