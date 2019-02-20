import React,{ Component } from 'react';
// import { Table, Button, Pagination } from 'antd';
// import { Row, Col, Input, Tabs } from 'antd';
// import intl from 'react-intl-universal';
// import Header from '../header/index';
import './institutionalinvestor.css';

// const TabPane = Tabs.TabPane;



class Institutionalinvestor extends Component{

    render(){
        return(
            <div style={{padding:'0 15px 15px', marginTop:'10px', backgroundColor:'#ffffff', border:'1px solid #e2e2e2'}}>
                <div style={{height:'50px', borderBottom:'solid 1px #e2e2e2',lineHeight:'50px'}}>
                    <div className='institutional-investor-title-span'></div>
                    <span className='institutional-investor-title'>机构投资者</span>
                </div>
                <div style={{width:'100%', marginTop:'10px', textAlign:'center'}}>
                    <span className='institutional-investor-text'>
                        暂时没有数据
                    </span>

                </div>          
            </div>
        )
    }
}
export default Institutionalinvestor;