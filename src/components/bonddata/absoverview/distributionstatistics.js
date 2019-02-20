import React,{ Component } from 'react';
// import { Table, Button, Pagination } from 'antd';
import { Row, Col } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './distributionstatistics.css';

import icomImg01 from '../../assit/distributionstatistics01.png';
import icomImg02 from '../../assit/distributionstatistics02.png';

class Distributionstatistics extends Component{

    render(){
        return(
            <div>
                <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                    <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                        <div className='distribution-statistics-title-span'></div>
                        <span className='distribution-statistics-title'>发行统计</span>
                    </div>
                    <Row style={{marginTop:'10px'}}>
                        <Col span={12}>
                            <div style={{padding:'5px 10px 5px 8px', backgroundColor:'#f2f2f2'}}>
                                信贷资产证券化CLO项目
                            </div>
                            <img src={icomImg01} alt="临时" style={{width:'100%', height:'255px',margin:'3px 0 0 0'}}/>
                        </Col>                        
                        <Col span={12} style={{paddingLeft:'12px'}}>
                            <div style={{padding:'5px 10px 5px 8px', backgroundColor:'#f2f2f2'}}>
                                企业资产证券化ABS项目
                            </div>
                            <img src={icomImg02} alt="临时" style={{width:'100%', height:'255px', margin:'3px 0 0 0'}}/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Distributionstatistics;