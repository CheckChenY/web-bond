import React,{ Component } from 'react';
// import { Table, Button, Pagination } from 'antd';
import { Row, Col } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './assetsecuritizationproject.css';

import icomImg01 from '../../assit/assetsecuritizationproject01.png';



class Assetsecuritizationproject extends Component{

    render(){
        return(
            <div>
                <div style={{padding:'15px', backgroundColor:'#ffffff', border:'solid 1px #e2e2e2'}}>
                    <div style={{padding:'15px', backgroundColor:'#f2f2f2'}}>
                        <Row>
                            <Col span={16}>
                                <table className='asset-securitization-project-table-one'>
                                    <tbody >
                                        <tr>
                                            <td style={{width:'20%'}}></td>
                                            <td style={{width:'10%'}}>信贷CLO项目</td>
                                            <td style={{width:'5%'}}></td>
                                            <td style={{width:'10%'}}>企业ABS项目</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontSize:'9px',fontWeight:'normal'}}>发行期项目数／项目总额</td>
                                            <td>2／121.14</td>
                                            <td style={{borderLeft:'solid 1px #e2e2e2'}}></td>
                                            <td>1/1.88</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontSize:'9px',fontWeight:'normal'}}>近2月发行公告的项目／总额（亿）</td>
                                            <td>29/1.640.22</td>
                                            <td style={{borderLeft:'solid 1px #e2e2e2'}}></td>
                                            <td>126/1.752.42</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontSize:'9px',fontWeight:'normal'}}>近一个月成交总量（亿）</td>
                                            <td>252.23</td>
                                            <td style={{borderLeft:'solid 1px #e2e2e2'}}></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td style={{fontSize:'9px',fontWeight:'normal'}}>近一个评级挑战ABS数量（上调／下调）</td>
                                            <td>0/0</td>
                                            <td style={{borderLeft:'solid 1px #e2e2e2'}}></td>
                                            <td>0/3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                            <Col span={8}></Col>
                        </Row>
                    </div>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='asset-securitization-project-title-span'></div>
                        <span className='asset-securitization-project-title'>最新发行的资产证券化项目</span>
                    </div>
                    <Row style={{marginTop:'15px'}}>
                        <Col span={12}>
                            <img src={icomImg01} alt="临时" style={{width:'100%', height:'214px'}}/>
                        </Col>
                        <Col span={12} style={{ paddingLeft:'14px'}}>
                            <div style={{backgroundColor:'#f2f2f2'}}>
                                <div className='asset-securitization-project-table-two-title'>平安证券-中华宝理-金茂供应链</div>
                                <table style={{marginTop:'20px'}} className='asset-securitization-project-table-two'>
                                    <tbody>
                                        <tr>
                                            <td>发行机构</td>
                                            <td style={{width:'35%'}}></td>
                                            <td>发行人</td>
                                            <td>平安证券有限公司</td>
                                        </tr>
                                        <tr>
                                            <td>发行总额</td>
                                            <td>1.88亿元</td>
                                            <td>主承销商</td>
                                            <td>平安证券有限公司</td>
                                        </tr>
                                        <tr>
                                            <td>基础资产</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>发行起始日</td>
                                            <td>2018-10-24</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Assetsecuritizationproject;