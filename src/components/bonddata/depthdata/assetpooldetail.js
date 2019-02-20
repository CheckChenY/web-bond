import React,{ Component } from 'react';
// import { Table, Button, Pagination } from 'antd';
import { Row, Col, DatePicker, Button, Select, Tabs} from 'antd';
import moment from 'moment';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './assetpooldetail.css';

import icomImg01 from '../../assit/assetpooldetail01.jpg';
import icomImg02 from '../../assit/assetpooldetail02.png';
import icomImg03 from '../../assit/assetpooldetail03.png';
import icomImg04 from '../../assit/assetpooldetail04.png';
import icomImg05 from '../../assit/assetpooldetail05.png';

const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;
const TabPane = Tabs.TabPane;


class Assetpooldetail extends Component{

    render(){
        return(
            <div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                   <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='asset-pool-title-span'></div>
                        <span className='asset-pool-title'>资产池初始情况</span>
                    </div>
                    <table style={{width:'100%', marginTop:'10px'}}>
                        <tbody>
                            <tr>
                                <td className='asset-pool-detail-table-col-one'>合同总金额(万元)</td>
                                <td className='asset-pool-detail-table-col-two'>300,000,00</td>
                                <td className='asset-pool-detail-table-col-one'>单笔贷款最高合同金额(万元)</td>
                                <td className='asset-pool-detail-table-col-two'>—</td>
                            </tr>
                            <tr>
                                <td className='asset-pool-detail-table-col-one'>资产池未偿本金额(万元)</td>
                                <td className='asset-pool-detail-table-col-two'>300，022.51</td>
                                <td className='asset-pool-detail-table-col-one'>加权平均贷款年利率(%)</td>
                                <td className='asset-pool-detail-table-col-two'>6.42</td>
                            </tr>
                            <tr>
                                <td className='asset-pool-detail-table-col-one'>借款人数量</td>
                                <td className='asset-pool-detail-table-col-two'>2325</td>
                                <td className='asset-pool-detail-table-col-one'>当前执行单笔贷款最高年利率(%)</td>
                                <td className='asset-pool-detail-table-col-two'>12.00</td>
                            </tr>
                            <tr>
                                <td className='asset-pool-detail-table-col-one'>贷款笔数</td>
                                <td className='asset-pool-detail-table-col-two'>9432</td>
                                <td className='asset-pool-detail-table-col-one'>加权平均贷款合同期限(月)</td>
                                <td className='asset-pool-detail-table-col-two'>11.62129032</td>
                            </tr>
                            <tr>
                                <td className='asset-pool-detail-table-col-one'>单笔贷款平均合同金额(万元)</td>
                                <td className='asset-pool-detail-table-col-two'>—</td>
                                <td className='asset-pool-detail-table-col-one'>加权平均贷款账龄(月)</td>
                                <td className='asset-pool-detail-table-col-two'>3.92</td>
                            </tr>
                            <tr>
                                <td className='asset-pool-detail-table-col-one'>加权平均贷款利率期限(元)</td>
                                <td className='asset-pool-detail-table-col-two'>7.70</td>
                                <td className='asset-pool-detail-table-col-one'></td>
                                <td className='asset-pool-detail-table-col-two'></td>
                            </tr>
                            <tr>
                                <td className='asset-pool-detail-table-col-one'></td>
                                <td className='asset-pool-detail-table-col-two'></td>
                                <td className='asset-pool-detail-table-col-one'></td>
                                <td className='asset-pool-detail-table-col-two'></td>
                            </tr>
                        </tbody>
                    </table>          
                </div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='asset-pool-title-span'></div>
                        <span className='asset-pool-title'>资产池变化情况</span>
                    </div>
                    <Row style={{marginTop:'20px'}}>
                        <Col span={12}>
                            <div>
                                <span>选择期限</span>
                                <RangePicker
                                    ranges={{ 
                                        Today: [moment(), moment()], 
                                        最近一周: [moment().subtract(7, 'days'), moment()],
                                        最近三周: [moment().subtract(21, 'days'), moment()],
                                        最近一月: [moment().subtract(1, 'months'), moment()],
                                        最近三月: [moment().subtract(3, 'months'), moment()],
                                        最近半年: [moment().subtract(6, 'months'), moment()],
                                        最近一年: [moment().subtract(12, 'months'), moment()],
                                    }}
                                    style={{width:'200px', margin:'0 5px'}}
                                    format="YYYY/MM/DD"
                                />
                                <Button>确认</Button>
                            </div>
                            <table style={{marginTop:'15px'}} className='asset-pool-detail-table-change-information'>
                                <tbody>
                                    <tr style={{background:'#f2f2f2'}}>
                                        <td></td>
                                        <td style={{textAlign:'right'}}>初始值</td>
                                    </tr>
                                    <tr>
                                        <td>抵押贷款余额(万元)</td>
                                        <td style={{textAlign:'right'}}>300，022.51</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>抵押贷款数目</td>
                                        <td style={{textAlign:'right'}}>9,432.00</td>
                                    </tr>
                                    <tr>
                                        <td>加权平均抵押贷款利率(%)</td>
                                        <td style={{textAlign:'right'}}>6.42</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>加权平均抵押贷款利率剩余期限(月)</td>
                                        <td style={{textAlign:'right'}}>7.70</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col span={12}>
                            <div>
                                <span>选择类型</span>
                                <Select
                                    defaultValue='1'
                                    style={{ width: '200px', margin:'0 5px' }}
                                >
                                    <Option key='1'>抵押贷款余额(万元)</Option>
                                    <Option key='2'>xxxxxxxx</Option>
                                    <Option key='3'>yyyyyyyy</Option>
                                    <Option key='4'>xxxxxxxx</Option>
                                </Select>
                                <Button>确认</Button>
                            </div>
                            <img src={icomImg01} alt="临时" style={{width:'100%', height:'150px', marginTop:'15px'}}/>
                        </Col>
                    </Row>
                </div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='asset-pool-title-span'></div>
                        <span className='asset-pool-title'>资产池初始评级</span>
                    </div>
                    <div style={{width:'100%', marginTop:'10px', textAlign:'center'}}>
                        <span style={{lineHeight:'152px',width:'152px', borderRadius:'50%', display:'inline-block', background:'#f5f5f5'}}>
                            暂时没有数据
                        </span>
                    </div> 
                </div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='asset-pool-title-span'></div>
                        <span className='asset-pool-title'>资产池初时利率分布</span>
                    </div>
                    <Row style={{ marginTop:'10px' }}>
                        <Col span={15}>
                            <table className='asset-pool-detail-table-distribution'>
                                <tbody>
                                    <tr style={{background:'#f2f2f2'}}>
                                        <td>贷款利率</td>
                                        <td>金额(万元)</td>
                                        <td>占比(%)</td>
                                        <td>数量(笔)</td>
                                        <td>占比(%)</td>
                                    </tr>
                                    <tr>
                                        <td>(0,90)</td>
                                        <td>13，242.10</td>
                                        <td>4.41</td>
                                        <td>384</td>
                                        <td>4.07</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>(180,270)</td>
                                        <td>99，205.29</td>
                                        <td>33.07</td>
                                        <td>2，690</td>
                                        <td>28.52</td>
                                    </tr>
                                    <tr>
                                        <td>（270，365）</td>
                                        <td>116，431.81</td>
                                        <td>38.81</td>
                                        <td>4，480</td>
                                        <td>47.50</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>（90，180）</td>
                                        <td>71，143.31</td>
                                        <td>23.71</td>
                                        <td>1，878</td>
                                        <td>19.91</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col span={9}>
                            <img src={icomImg02} alt="临时" style={{width:'98%', height:'160px', marginLeft:'12px'}}/>
                        </Col>
                    </Row>
                </div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='asset-pool-title-span'></div>
                        <span className='asset-pool-title'>资产池特征分布</span>
                    </div>
                    <Row style={{marginTop:'10px'}}>
                        <Col span={15}>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="初始资产池地域集中度" key="1">
                                    <table className='asset-pool-detail-table-distribution'>
                                        <tbody>
                                            <tr style={{background:'#f2f2f2'}}>
                                                <td>发放地区</td>
                                                <td>金额(万元)</td>
                                                <td>占比(%)</td>
                                                <td>数量(笔)</td>
                                                <td>占比(%)</td>
                                            </tr>
                                            <tr>
                                                <td>北京</td>
                                                <td>13，242.10</td>
                                                <td>4.41</td>
                                                <td>384</td>
                                                <td>4.07</td>
                                            </tr>
                                            <tr style={{background:'#f9f9f9'}}>
                                                <td>北京市</td>
                                                <td>99，205.29</td>
                                                <td>33.07</td>
                                                <td>2，690</td>
                                                <td>28.52</td>
                                            </tr>
                                            <tr>
                                                <td>杭州</td>
                                                <td>116，431.81</td>
                                                <td>38.81</td>
                                                <td>4，480</td>
                                                <td>47.50</td>
                                            </tr>
                                            <tr style={{background:'#f9f9f9'}}>
                                                <td>杭州市</td>
                                                <td>71，143.31</td>
                                                <td>23.71</td>
                                                <td>1，878</td>
                                                <td>19.91</td>
                                            </tr>
                                        </tbody>
                                    </table>                        
                                </TabPane>
                                <TabPane tab="初始资产池行业集中度" key="2">
                                    暂空
                                </TabPane>
                                <TabPane tab="初始借款人在贷款发时点年龄分布" key="3">
                                    暂空
                                </TabPane>
                            </Tabs>
                        </Col>
                        <Col span={9}>
                            <img src={icomImg03} alt="临时" style={{width:'98%', height:'220px', marginLeft:'12px'}}/>
                        </Col>
                    </Row>
                </div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='asset-pool-title-span'></div>
                        <span className='asset-pool-title'>资产池初时期限分布</span>
                    </div>
                    <Row style={{marginTop:'10px'}}>
                        <Col span={15}>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="初始贷款剩余期限分布" key="1">
                                    <table className='asset-pool-detail-table-distribution'>
                                        <tbody>
                                            <tr style={{background:'#f2f2f2'}}>
                                                <td>剩余期限</td>
                                                <td>金额(万元)</td>
                                                <td>占比(%)</td>
                                                <td>数量(笔)</td>
                                                <td>占比(%)</td>
                                            </tr>
                                            <tr>
                                                <td>(0,90)</td>
                                                <td>13，242.10</td>
                                                <td>4.41</td>
                                                <td>384</td>
                                                <td>4.07</td>
                                            </tr>
                                            <tr style={{background:'#f9f9f9'}}>
                                                <td>(180,270)</td>
                                                <td>99，205.29</td>
                                                <td>33.07</td>
                                                <td>2，690</td>
                                                <td>28.52</td>
                                            </tr>
                                            <tr>
                                                <td>（270，365）</td>
                                                <td>116，431.81</td>
                                                <td>38.81</td>
                                                <td>4，480</td>
                                                <td>47.50</td>
                                            </tr>
                                            <tr style={{background:'#f9f9f9'}}>
                                                <td>（90，180）</td>
                                                <td>71，143.31</td>
                                                <td>23.71</td>
                                                <td>1，878</td>
                                                <td>19.91</td>
                                            </tr>
                                        </tbody>
                                    </table>                        
                                </TabPane>
                                <TabPane tab="初始贷款合同期限" key="2">
                                    暂空
                                </TabPane>
                                <TabPane tab="初始账龄分布" key="3">
                                    暂空
                                </TabPane>
                            </Tabs>
                        </Col>
                        <Col span={9}>
                            <img src={icomImg04} alt="临时" style={{width:'98%', height:'220px', marginLeft:'12px'}}/>
                        </Col>
                    </Row>
                </div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='asset-pool-title-span'></div>
                        <span className='asset-pool-title'>资产池担保情况</span>
                    </div>
                    <Row style={{marginTop:'10px'}}>
                        <Col span={15}>
                            <table className='asset-pool-detail-table-distribution'>
                                <tbody>
                                    <tr style={{background:'#f2f2f2'}}>
                                        <td>担保情况</td>
                                        <td>金额(万元)</td>
                                        <td>占比(%)</td>
                                        <td>数量(笔)</td>
                                        <td>占比(%)</td>
                                    </tr>
                                    <tr>
                                        <td>抵押</td>
                                        <td>13，242.10</td>
                                        <td>4.41</td>
                                        <td>384</td>
                                        <td>4.07</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>抵押担保</td>
                                        <td>99，205.29</td>
                                        <td>33.07</td>
                                        <td>2，690</td>
                                        <td>28.52</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col span={9}>
                            <img src={icomImg05} alt="临时" style={{width:'98%', height:'196px', marginLeft:'12px'}}/>
                        </Col>
                    </Row>
                </div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='asset-pool-title-span'></div>
                        <span className='asset-pool-title'>货款预期状态</span>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span>日期</span>
                        <DatePicker defaultValue={moment()} format={'YYYY-MM-DD'} style={{margin:'0 5px', width:'125px'}}/>
                        <Button>确认</Button>
                    </div>
                    <table style={{marginTop:'15px'}} className='asset-pool-detail-table-distribution'>
                        <tbody>
                            <tr style={{background:'#f2f2f2'}}>
                                <td>贷款逾期状态</td>
                                <td>贷款笔数</td>
                                <td>占期末资产池抵押贷款数（%）</td>
                                <td>数量(笔)</td>
                                <td>占期末资产池贷款余额(%)</td>
                            </tr>
                            <tr style={{ height:'30px'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{background:'#f9f9f9', height:'30px'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='asset-pool-title-span'></div>
                        <span className='asset-pool-title'>货款拖欠率</span>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span>选择期限</span>
                        <RangePicker
                            ranges={{ 
                                Today: [moment(), moment()], 
                                最近一周: [moment().subtract(7, 'days'), moment()],
                                最近三周: [moment().subtract(21, 'days'), moment()],
                                最近一月: [moment().subtract(1, 'months'), moment()],
                                最近三月: [moment().subtract(3, 'months'), moment()],
                                最近半年: [moment().subtract(6, 'months'), moment()],
                                最近一年: [moment().subtract(12, 'months'), moment()],
                            }}
                            style={{width:'200px', margin:'0 5px'}}
                            format="YYYY/MM/DD"
                        />
                        <Button>确认</Button>
                    </div>
                    <table style={{marginTop:'15px'}} className='asset-pool-detail-table-distribution'>
                        <tbody>
                            <tr style={{background:'#f2f2f2', height:'30px'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ height:'30px'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{background:'#f9f9f9', height:'30px'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{marginTop:'10px'}}>
                        <span>选择类型</span>
                        <Select
                            defaultValue='1'
                            style={{ width: '200px', margin:'0 5px' }}
                        >
                            <Option key='1'>抵押贷款余额(万元)</Option>
                            <Option key='2'>xxxxxxxx</Option>
                            <Option key='3'>yyyyyyyy</Option>
                            <Option key='4'>xxxxxxxx</Option>
                        </Select>
                        <Button>确认</Button>
                    </div>
                    <table style={{marginTop:'15px'}} className='asset-pool-detail-table-distribution'>
                        <tbody>
                            <tr style={{background:'#f2f2f2', height:'30px'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{ height:'30px'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{background:'#f9f9f9', height:'30px'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='asset-pool-title-span'></div>
                        <span className='asset-pool-title'>货款违约率</span>
                    </div>
                    <Row style={{marginTop:'10px'}}>
                        <Col span={12}>
                            <div>
                                <span>选择期限</span>
                                <RangePicker
                                    ranges={{ 
                                        Today: [moment(), moment()], 
                                        最近一周: [moment().subtract(7, 'days'), moment()],
                                        最近三周: [moment().subtract(21, 'days'), moment()],
                                        最近一月: [moment().subtract(1, 'months'), moment()],
                                        最近三月: [moment().subtract(3, 'months'), moment()],
                                        最近半年: [moment().subtract(6, 'months'), moment()],
                                        最近一年: [moment().subtract(12, 'months'), moment()],
                                    }}
                                    style={{width:'200px', margin:'0 5px'}}
                                    format="YYYY/MM/DD"
                                />
                                <Button>确认</Button>
                            </div>
                            <table style={{marginTop:'15px'}} className='asset-pool-detail-table-change-information'>
                                <tbody>
                                    <tr style={{background:'#f2f2f2'}}>
                                        <td></td>
                                        <td style={{textAlign:'right'}}>2018-05</td>
                                    </tr>
                                    <tr>
                                        <td>累计违约时点违约抵押贷款金额(万元)</td>
                                        <td style={{textAlign:'right'}}>—</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>累计回收本金(万元)</td>
                                        <td style={{textAlign:'right'}}>—</td>
                                    </tr>
                                    <tr>
                                        <td>累计违约率(%)</td>
                                        <td style={{textAlign:'right'}}>—</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>严重拖欠率(%)</td>
                                        <td style={{textAlign:'right'}}>—</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col span={12}>
                            <div>
                                <span>选择类型</span>
                                <Select
                                    defaultValue='1'
                                    style={{ width: '200px', margin:'0 5px' }}
                                >
                                    <Option key='1'>累计违约率%</Option>
                                    <Option key='2'>xxxxxxxx</Option>
                                    <Option key='3'>yyyyyyyy</Option>
                                    <Option key='4'>xxxxxxxx</Option>
                                </Select>
                                <Button>确认</Button>
                            </div>
                            <img src={icomImg01} alt="临时" style={{width:'100%', height:'150px', marginTop:'15px'}}/>
                        </Col>
                    </Row>
                </div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='asset-pool-title-span'/>
                        <span className='asset-pool-title'>处置状态分类</span>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span>日期</span>
                        <DatePicker defaultValue={moment()} format={'YYYY-MM-DD'} style={{margin:'0 5px', width:'125px'}}/>
                        <Button>确认</Button>
                    </div>
                    <table style={{marginTop:'15px'}} className='asset-pool-detail-table-distribution'>
                        <tbody>
                            <tr style={{background:'#f2f2f2'}}>
                                <td>处置状态分类</td>
                                <td>违约抵押贷款笔数</td>
                                <td>占初始起算日资产池抵押贷款笔数(%)</td>
                                <td>违约时点本金余额（万元）</td>
                                <td>占初始起算日资产池余额(%)</td>
                            </tr>
                            <tr style={{ height:'30px'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{background:'#f9f9f9', height:'30px'}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Assetpooldetail;