import React,{ Component } from 'react';
import { Table, Button, Pagination, Icon, Row, Col } from 'antd';
// import { Button } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './interestpayment.css';
// import icomImg from '../../assit/collect.png';

const Column = Table.Column;

const dataSource = [{
    collect: '1',
    date:'2018-10-24',
    transaction_code:'10135910.IB',
    bond_name:'13镇建工MIN001',
    interest_rate_type:'付息',
    current_coupon_rate:'7.3000',
    annual_interest_rate:'1次／年',
    interest_payable:'7.3000'
  }];

class Interestpayment extends Component{

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
                        className='interest-payment-table'
                        size='middle'
                        dataSource={dataSource01}
                        pagination={false}
                        rowClassName={(record, index)=>(index%2===0?
                                (
                                    'interest-payment-table-row-one'
                                ):(
                                    'interest-payment-table-row-two'
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
                                        <Button className='interest-payment-collect-button'>
                                            <Icon type="heart" style={{color:'#ff6161', height:'16px', width:'16px'}} />
                                        </Button>
                                    </span>
                                ):('')
                            )
                            }
                        />
                        <Column
                            title='日期'
                            dataIndex="date"
                            key="date"                    
                            width='10%'
                        />
                        <Column
                            title='交易代码'
                            dataIndex="transaction_code"
                            key="transaction_code"                    
                            width='10%'
                        />
                        <Column
                            title='债券简称'
                            dataIndex="bond_name"
                            key="bond_name"                    
                            width='15%'
                        />
                        <Column
                            title='利率类型'
                            dataIndex="interest_rate_type"
                            key="interest_rate_type"                    
                            width='10%'
                        />
                        <Column
                            title='票面利率(当期)'
                            dataIndex="current_coupon_rate"
                            key="current_coupon_rate"                    
                            width='10%'
                        />
                        <Column
                            title='年付息频率'
                            dataIndex="annual_interest_rate"
                            key="annual_interest_rate"                    
                            width='10%'
                        />
                        <Column
                            title='应付利息'
                            dataIndex="interest_payable"
                            key="interest_payable"                    
                            width='10%'
                        />         
                    </Table>
                </div>
                <div style={{height:'40px'}}>
                    <Row>
                        <Col span={3}>
                            <div className='interest-payment-total'>显示{dataSource.length}条结果</div>
                        </Col>
                        <Col span={21} style={{textAlign:'center'}}>
                            <Pagination
                                className='interest-payment-pagination'
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
export default Interestpayment;