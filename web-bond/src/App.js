import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row } from 'antd';
// import intl from 'react-intl-universal';
import Header from './components/header/index';
import IndexLeft from './components/index/indexLeft';
// import IndexMiddle from './components/index/indexMiddle';
import IndexRight from './components/index/indexRight';
import { connect } from 'react-redux';
import {
    tabLanguange
  } from './redux/actions/header/index';

class App extends Component {

  handleSubmitComment (comment) {
    const { tabLanguange } = this.props;
      tabLanguange(comment);
    console.log(comment)
  }
  render() {
    return (
      <div style={{backgroundColor:'#f2f2f2'}}>
        {/* <div  className="top" style={{width: '100%',height: '50px',position:'absolute',top:'0'}}>
          <Header onSubmit={this.handleSubmitComment.bind(this)} />
        </div> */}
        {/* <div className="mainBox" style={{width:'100%',position:'absolute',top:'50px',bottom:'30px',padding:'10px'}}>
          <Row>
            <div className="leftBox" style={{height:'100%',width:'25%',float:'left',marginBottom:'30px',overflow: 'auto'}}>
              <IndexLeft /> */}
              {/* <IndexMiddle /> */}
            {/* </div>
            <div className="rightBox" style={{height:'100%',width:'75%',marginLeft:'0',marginBottom:'30px',overflow: 'auto'}}>
              <IndexRight /> */}
              {/* <Link to='/userList'><Button type='primary'>{intl.get('userlist')}</Button></Link> */}
            {/* </div>
          </Row>
        </div> */}
        {/* <div className="bottom" style={{width: '100%',height: '50px',position:'absolute',bottom:'0',backgroundColor:'yellow'}}>底部，高度30px</div> */}


        <div>
          <Header onSubmit={this.handleSubmitComment.bind(this)} />
        </div>
        <div style={{padding:'10px'}}>
          <Row>
              <IndexLeft />
              {/* <IndexMiddle /> */}
              <IndexRight />
              {/* <Link to='/userList'><Button type='primary'>{intl.get('userlist')}</Button></Link> */}
          </Row>
        </div>

      </div>
    );
  }
}
const mapDispatchToProps = state => {
  return state.lan.indexLanguage
};

export default connect(
  mapDispatchToProps, {
    tabLanguange
  }
)(App);
// export default App;
