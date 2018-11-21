import React,{ Component } from 'react';
import { Table, Button, Pagination, Icon, Row, Col } from 'antd';
// import { Button } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './highrating.css';
// import icomImg from '../../assit/collect.png';

const Column = Table.Column;

const dataSource = [{
    collect: '1',
    rating_adjustment_date:'2018-10-31',
    bond_name:'15永泰能源MITN002',
    debt_rating:'C ↑',
    main_rating:'C',
    guarantor_rating:'C',
    issuer:'永泰能源股份有限公司',
    guarantor:'永泰集团有限公司'
  }];

class Highrating extends Component{

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
                        className='high-rating-table'
                        size='middle'
                        dataSource={dataSource01}
                        pagination={false}
                        rowClassName={(record, index)=>(index%2===0?
                                (
                                    'high-rating-table-row-one'
                                ):(
                                    'high-rating-table-row-two'
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
                                        <Button className='high-rating-collect-button'>
                                            <Icon type="heart" style={{color:'#ff6161', height:'16px', width:'16px'}} />
                                        </Button>
                                    </span>
                                ):('')
                            )
                            }
                        />
                        <Column
                            title='评级调整日期'
                            dataIndex="rating_adjustment_date"
                            key="rating_adjustment_date"                    
                            width='10%'
                        />
                        <Column
                            title='债券简称'
                            dataIndex="bond_name"
                            key="bond_name"                    
                            width='20%'
                        />
                        <Column
                            title='债项评级'
                            dataIndex="debt_rating"
                            key="debt_rating"                    
                            width='8%'
                        />
                        <Column
                            title='主体评级'
                            dataIndex="main_rating"
                            key="main_rating"                    
                            width='8%'
                        />
                        <Column
                            title='担保人评级'
                            dataIndex="guarantor_rating"
                            key="guarantor_rating"                    
                            width='10%'
                        />
                        <Column
                            title='发行人'
                            dataIndex="issuer"
                            key="issuer"                    
                            width='20%'
                        />
                        <Column
                            title='担保人'
                            dataIndex="guarantor"
                            key="guarantor"                    
                            width='20%'
                        />         
                    </Table>
                </div>
                <div style={{height:'40px'}}>
                    <Row>
                        <Col span={3}>
                            <div className='high-rating-total'>显示{dataSource.length}条结果</div>
                        </Col>
                        <Col span={21} style={{textAlign:'center'}}>
                            <Pagination
                                className='high-rating-pagination'
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
export default Highrating;