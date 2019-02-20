import React,{ Component } from 'react';
import { Table, Button, Pagination, Icon, Row, Col } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './releaseannouncementtable.css';
// import icomImg from '../../assit/collect.png';

const Column = Table.Column;

const dataSource = [{
    collect: '1',
    transaction_code:'293122',
    bond_name:'14新供销债',
    declaration_date:'2018-10-02',
    circulation:'0.92',
    deadline:'8',
    issuance_rating:'C',
    issuer:'永泰能源股份有限公司',
  }];

class Releaseannouncementtable extends Component{

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
                        className='release-announcement-tb-table'
                        size='middle'
                        dataSource={dataSource01}
                        pagination={false}
                        rowClassName={(record, index)=>(index%2===0?
                                (
                                    'release-announcement-tb-table-row-one'
                                ):(
                                    'release-announcement-tb-table-row-two'
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
                                        <Button className='release-announcement-tb-collect-button'>
                                            <Icon type="heart" style={{color:'#ff6161', height:'16px', width:'16px'}} />
                                        </Button>
                                    </span>
                                ):('')
                            )
                            }
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
                            width='20%'
                        />
                        <Column
                            title='公告日期'
                            dataIndex="declaration_date"
                            key="declaration_date"                    
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
                        <Column
                            title='发行人'
                            dataIndex="issuer"
                            key="issuer"                    
                            width='20%'
                        />
                    </Table>
                </div>
                <div style={{height:'40px'}}>
                    <Row>
                        <Col span={3}>
                            <div className='release-announcement-tb-total'>显示{dataSource.length}条结果</div>
                        </Col>
                        <Col span={21} style={{textAlign:'center'}}>
                            <Pagination
                                className='release-announcement-tb-pagination'
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
export default Releaseannouncementtable;