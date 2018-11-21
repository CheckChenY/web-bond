import React,{ Component } from 'react';
import { Table, Button, Icon,Pagination } from 'antd';
import './bondinfortext.css';

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
  }];

class Bondinfortext extends Component{

    render(){
        return(
            <div>
                <Table 
                    className='bondinfortext-rate-debt-bid-table'
                    size='middle'
                    dataSource={dataSource}
                    pagination={{ pageSize: 16 , position:'bottom'}}
                    rowClassName={(record , index)=>(index%2===0?
                        (
                            'xxx'
                        ):(
                            'xxx'
                        ))}
                    rowKey={record => record.uid}
                >
                    <Column
                        title='收藏'
                        dataIndex="collect"
                        key="collect"                    
                        width='10%'
                        className='xxx'
                        render={(status,record) => 
                            (
                            <span>
                                {/* { status === 1 ?( 
                                    <Button className='xxx'>
                                        <img src={icomImg} alt='收藏' style={{width:'14px', height:'14px'}}/>
                                    </Button>
                                    )
                                    :(
                                    <Button className='xxx'>
                                        <img src={icomImg} alt='收藏' style={{width:'14px', height:'14px'}}/>
                                    </Button>
                                )} */}
                                <Button className='bondinforoverview-rightBox-collect-button'>
                                    <Icon type="heart" style={{color:'#ff6161', height:'16px', width:'16px'}} />
                                </Button>
                            </span>
                          )
                        }
                    />
                    <Column
                        title='发行日'
                        dataIndex="issue_date"
                        key="issue_date"                    
                        width='10%'
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
                        width='15%'
                        className='xxx'
                    />

                    <Column
                        title='起息日'
                        dataIndex="value_date"
                        key="value_date"                    
                        width='10%'
                        className='xxx'
                    />
                    <Column
                        title='到息日'
                        dataIndex="arrival_date"
                        key="arrival_date"                    
                        width='10%'
                        className='xxx'
                    />
                    <Column
                        title='发行日'
                        dataIndex="issue_data"
                        key="issue_data"                    
                        width='10%'
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
                    <span style={{display:'inline-block', width:'10%'}}>显示1条结果</span>
                    <span style={{display:'inline-block', width:'80%', textAlign:'center'}}>
                        <Pagination
                            className='xxxx' 
                            defaultCurrent={10} 
                            total={10}
                        />
                    </span>
                </div> 
            </div>
        )
    }
}
export default Bondinfortext;