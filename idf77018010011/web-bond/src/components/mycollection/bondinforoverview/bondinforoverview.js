import React, { Component } from 'react';
import {Row,Col} from 'antd';
import { Button,Icon } from 'antd';
import Header from '../../../components/header/index';
import './bondinforoverview.css';
import Bondinforsearch from './bondinforsearch';
import Bondinfortext from './bondinfortext';
// import Edit from './edit';
// import Select from './select';
// import Bonddetails from './bonddetails';
// import Save from './save';


class Bondinforoverview extends Component{

    handleSubmitComment (comment) {
        const { tabLanguange } = this.props;
          tabLanguange(comment);
        console.log(comment)
      }

    render(){
        return(
            <div>
                <div className="bondinforoverview-top">
                    <Header onSubmit={this.handleSubmitComment.bind(this)} />
                </div>
                <div className="bondinforoverview-mainBox">
                    <div className="bondinforoverview-leftBox">
                        <Bondinforsearch />
                    </div>
                    <div className="bondinforoverview-rightBox">
                        <Row className='bondinforoverview-rightBox-title-row'>
                            <Col span={22} >
                                <div className='bondinforoverview-rightBox-title-span'>
                                
                                </div>  
                                <span className='bondinforoverview-title'>债券资料查询</span>
                            </Col>
                            <Col span={2} style={{textAlign:'right', paddingRight:'18px'}}>
                                <Button className='bondinforoverview-rightBox-refresh-button'>
                                    <Icon type="reload" style={{color:'#3287ff', height:'14px',width:'14px'}} />
                                    刷新
                                </Button>
                            </Col>
                        </Row>
                        <Row className='bondinforoverview-rightBox-title-row'>
                            <Col span={24} >
                                <div className='bondinforoverview-rightBox-table'>
                                    <Bondinfortext/>
                                    {/* <Select /> */}
                                    {/* <Save /> */}
                                    {/* <Bonddetails /> */}
                                </div> 
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="bottom" style={{backgroundColor:'yellow'}}>底部，高度40px</div>
            </div>
        )
    }
}

export default Bondinforoverview;