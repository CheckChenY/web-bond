import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <p style={{
            height:'200px',
            backgroundColor:'lightblue'
          }}></p>
          <div style={{
            padding:'50px',
            textAlign:'center'
          }}>
          <Link to='/userList'>
            <Button type='primary'>
                用户列表
            </Button>
          </Link>
          </div>
        </header>
      </div>
    );
  }
}

export default App;