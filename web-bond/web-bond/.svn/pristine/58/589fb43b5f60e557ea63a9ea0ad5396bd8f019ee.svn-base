import React,{ Component } from 'react';
// import { Table, Button, Pagination } from 'antd';
import { Row, Col, Input } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './trendanalysis.css';

import icomImg01 from '../../assit/trendanalysis01.png';
import icomImg02 from '../../assit/trendanalysis02.png';



class  Trendanalysis extends Component{

    render(){
        return(
            <div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff',  border:'1px solid #e2e2e2'}}>
                    <div></div>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='trend-analysis-title-span'></div>
                        <span className='trend-analysis-title'>分层证券票息趋势分析</span>
                    </div>
                    <Row style={{marginTop:'12px'}}>
                        <Col span={12}>
                            <div style={{padding:'10px 15px 15px 20px', backgroundColor:'#f2f2f2'}}>
                                <Row>
                                    <Col span={12}>信贷资产证券化CLO</Col>
                                    <Col span={12} style={{textAlign:'right'}}>更多</Col>
                                </Row>
                                <Row style={{marginTop:'10px'}}>
                                    <span>档次</span>
                                    <Input type='text' defaultValue='优先a档' style={{margin:'0 14px', width:'120px'}}/>
                                    <span>期限范围</span>
                                    <Input type='text' defaultValue='全部' style={{margin:'0 14px', width:'120px'}}/>
                                </Row>                     
                            </div>
                            <img src={icomImg01} alt="临时" style={{width:'100%', height:'360px', marginTop:'15px'}}/> 
                        </Col>                        
                        <Col span={12}>
                            <div style={{padding:'10px 15px 15px 20px', backgroundColor:'#f2f2f2', marginLeft:'10px'}}>
                                <Row>
                                    <Col span={12}>信贷资产证券化CLO</Col>
                                    <Col span={12} style={{textAlign:'right'}}>更多</Col>
                                </Row>
                                <Row style={{marginTop:'10px'}}>
                                    <span>档次</span>
                                    <Input type='text' defaultValue='优先a档' style={{margin:'0 14px', width:'120px'}}/>
                                    <span>期限范围</span>
                                    <Input type='text' defaultValue='全部' style={{margin:'0 14px', width:'120px'}}/>
                                </Row>
                            </div>
                            <img src={icomImg02} alt="临时" style={{width:'97%', marginLeft:'10px', height:'360px', marginTop:'15px'}}/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default  Trendanalysis;