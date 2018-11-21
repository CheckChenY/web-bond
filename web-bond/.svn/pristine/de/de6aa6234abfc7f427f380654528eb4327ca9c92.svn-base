import React,{ Component } from 'react';
import { Table, Button, Pagination,Icon, Row, Col } from 'antd';
// import { Button } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './negotiablecertificatedeposit.css';
// import icomImg from '../../assit/collect.png';

const Column = Table.Column;

const dataSource = [{
    collect: '1',
    issue_date:'2018-10-24',
    bond_type:'同业存单',
    bond_name:'13镇建工MIN001',
    payment_date:'-',
    circulation:'24.60',
    deadline:'1',
    issuance_rating:'AAA'





    
    
    
    
    
    
  }];

class Negotiablecertificatedeposit extends Component{

    render(){

        let dataSource01=[];       
        dataSource01=dataSource.slice(0, 15);
        while(dataSource01.length<15)
        {
            dataSource01.push(Object(''))
        }

        return(
            <div>
                <div style={{overflowX:'auto'}}>
                    <Table 
                        className='negotiable-certificate-deposit-table'
                        size='middle'
                        dataSource={dataSource01}
                        pagination={false}
                        rowClassName={(record, index)=>(index%2===0?
                                (
                                    'negotiable-certificate-deposit-table-row-one'
                                ):(
                                    'negotiable-certificate-deposit-table-row-two'
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
                                        <Button className='negotiable-certificate-deposit-collect-button'>
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
                            title='债券类型'
                            dataIndex="bond_type"
                            key="bond_type"                    
                            width='10%'
                        />
                        <Column
                            title='债券简称'
                            dataIndex="bond_name"
                            key="bond_name"                    
                            width='20%'
                        />
                        <Column
                            title='缴款日'
                            dataIndex="payment_date"
                            key="payment_date"                    
                            width='10%'
                        />
                        <Column
                            title='发行额(亿)'
                            dataIndex="circulation"
                            key="circulation"                    
                            width='10%'
                        />
                        <Column
                            title='期限(年)'
                            dataIndex="deadline"
                            key="deadline"                    
                            width='10%'
                        />
                        <Column
                            title='发行评级'
                            dataIndex="issuance_rating"
                            key="issuance_rating"                    
                            width='10%'
                        />                                 
                    </Table>
                </div>
                <div style={{height:'40px'}}>
                    <Row>
                        <Col span={3}>
                            <div className='negotiable-certificate-deposit-total'>显示{dataSource.length}条结果</div>
                        </Col>
                        <Col span={21} style={{textAlign:'center'}}>
                            <Pagination
                                className='negotiable-certificate-deposit-pagination'
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
export default Negotiablecertificatedeposit;