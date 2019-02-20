import React,{ Component } from 'react';
// import { Table, Button, Pagination } from 'antd';
import { Row, Col } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './institutestatistical.css';

import icomImg01 from '../../assit/institutestatistical01.png';
import icomImg02 from '../../assit/institutestatistical02.png';
import icomImg03 from '../../assit/institutestatistical03.png';
import icomImg04 from '../../assit/institutestatistical04.png';


class Institutestatistical extends Component{

    render(){
        return(
            <div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                   <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='institute-statistical-title-span'></div>
                        <span className='institute-statistical-title'>机构统计</span>
                    </div>
                    <Row style={{marginTop:'10px'}}>
                        <Col span={12}>
                            <div style={{padding:'5px 10px 5px 8px', backgroundColor:'#f2f2f2'}}>
                                信贷CLO发起机构分布
                            </div>
                            <img src={icomImg01} alt="临时" style={{width:'100%', height:'250px', marginTop:'15px'}}/> 
                            <table className='institute-statistical-table'>
                                <tbody>
                                    <tr style={{background:'#f2f2f2'}}>
                                        <td>排名</td>
                                        <td>发起机构</td>
                                        <td>总数</td>
                                        <td>总额(亿元)</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>中国建设银行</td>
                                        <td>23</td>
                                        <td>0.20</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>2</td>
                                        <td>中国工商银行</td>
                                        <td>17</td>
                                        <td>0.14</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>交通银行</td>
                                        <td>4</td>
                                        <td>0.04</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>4</td>
                                        <td>兴业银行</td>
                                        <td>5</td>
                                        <td>0.04</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </Col>                        
                        <Col span={12} style={{paddingLeft:'10px'}}>
                            <div style={{padding:'5px 10px 5px 8px', backgroundColor:'#f2f2f2', }}>
                                信贷CLO发行机构分布
                            </div>
                            <img src={icomImg02} alt="临时" style={{width:'100%', height:'250px', marginTop:'15px'}}/>
                            <table className='institute-statistical-table'>
                                <tbody>
                                    <tr style={{background:'#f2f2f2'}}>
                                        <td>排名</td>
                                        <td>发起机构</td>
                                        <td>总数</td>
                                        <td>总额(亿元)</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>建设信托</td>
                                        <td>23</td>
                                        <td>0.20</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>2</td>
                                        <td>中海信托</td>
                                        <td>17</td>
                                        <td>0.14</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>中信信托</td>
                                        <td>4</td>
                                        <td>0.04</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>4</td>
                                        <td>上海国际信托</td>
                                        <td>5</td>
                                        <td>0.04</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </Col>
                    </Row>
                    <Row style={{marginTop:'10px'}}>
                        <Col span={12}>
                            <div style={{padding:'5px 10px 5px 8px', backgroundColor:'#f2f2f2'}}>
                                企业ABS原始权益人分布
                            </div>
                            <img src={icomImg03} alt="临时" style={{width:'100%', height:'250px', marginTop:'15px'}}/>
                            <table className='institute-statistical-table'>
                                <tbody>
                                    <tr style={{background:'#f2f2f2'}}>
                                        <td>排名</td>
                                        <td>原始权益人</td>
                                        <td>总数</td>
                                        <td>总额(亿元)</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>上海浦发银行</td>
                                        <td>23</td>
                                        <td>0.20</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>2</td>
                                        <td>重庆市蚂蚁商场</td>
                                        <td>17</td>
                                        <td>0.14</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>深圳市前海一方</td>
                                        <td>4</td>
                                        <td>0.04</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>4</td>
                                        <td>重庆市蚂蚁小微</td>
                                        <td>5</td>
                                        <td>0.04</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </Col>                        
                        <Col span={12} style={{paddingLeft:'10px'}}>
                            <div style={{padding:'5px 10px 5px 8px', backgroundColor:'#f2f2f2', }}>
                                企业ABS计划管理人分布
                            </div>
                            <img src={icomImg04} alt="临时" style={{width:'100%', height:'250px', marginTop:'15px'}}/>
                            <table className='institute-statistical-table'>
                                <tbody>
                                    <tr style={{background:'#f2f2f2'}}>
                                        <td>排名</td>
                                        <td>计划管理人</td>
                                        <td>总数</td>
                                        <td>总额(亿元)</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>信达证券</td>
                                        <td>23</td>
                                        <td>0.20</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>2</td>
                                        <td>德邦证券</td>
                                        <td>17</td>
                                        <td>0.14</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>中信证券</td>
                                        <td>4</td>
                                        <td>0.04</td>
                                    </tr>
                                    <tr style={{background:'#f9f9f9'}}>
                                        <td>4</td>
                                        <td>方正证券</td>
                                        <td>5</td>
                                        <td>0.04</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </Col>
                    </Row>
                </div>            
            </div>
        )
    }
}
export default Institutestatistical;