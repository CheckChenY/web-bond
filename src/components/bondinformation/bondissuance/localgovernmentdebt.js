import React,{ Component } from 'react';
import { Table, Button, Pagination, Icon, Row, Col } from 'antd';
// import { Button } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './localgovernmentdebt.css';
// import icomImg from '../../assit/collect.png';

const Column = Table.Column;

const dataSource = [{
    collect: '1',
    bond_name:'13镇建工MIN001',
    deadline:'7',
    circulation:'14.47',
    coupon_rate:'-',
    payment_date:'11-14',
    listing_date:'-',
    add_amount:'0.0000',
  }];

  

class Localgovernmentdebt extends Component{

    

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
                        className='local-government-debt-table'
                        size='middle'
                        dataSource={dataSource01}
                        pagination={false}
                        rowClassName={(record, index)=>(index%2===0?
                                (
                                    'local-government-debt-table-row-one'
                                ):(
                                    'local-government-debt-table-row-two'
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
                                        <Button className='local-government-debt-collect-button'>
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
                            title='票面利率'
                            dataIndex="coupon_rate"
                            key="coupon_rate"                    
                            width='10%'
                        />
                        <Column
                            title='缴款日'
                            dataIndex="payment_date"
                            key="payment_date"                    
                            width='10%'
                        />
                        <Column
                            title='上市日'
                            dataIndex="listing_date"
                            key="listing_date"                    
                            width='10%'
                        />
                        <Column
                            title='地方政府债券新增金额'
                            dataIndex="add_amount"
                            key="add_amount"                    
                            width='20%'
                        />   
                    </Table>
                </div>
                <div style={{height:'40px'}}>
                    <Row>
                        <Col span={3}>
                            <div className='local-government-debt-total'>显示{dataSource.length}条结果</div>
                        </Col>
                        <Col span={21} style={{textAlign:'center'}}>
                            <Pagination
                                className='local-government-debt-pagination'
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
export default Localgovernmentdebt;