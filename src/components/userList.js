import React, { Component } from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import Header from './header/index';
// import { connect } from 'react-redux';
import {
  tabLanguange
} from '../redux/actions/header/index';
import { Table,Button } from 'antd';

class UserList extends Component {
  handleSubmitComment (comment) {
    const { tabLanguange } = this.props;
      // console.log(e);
      tabLanguange(comment);
    console.log(comment)
  }

  render() {
    const self = this,
    { lista,fetchAllUserList } = self.props;

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
    }];
    return (
      <div>
        <Header onSubmit={this.handleSubmitComment.bind(this)} />
        <h1 style={{ textAlign: 'center' }}>{intl.get('userlistTable')}</h1>
        <div>
          <Button type='primary'
            onClick={
              fetchAllUserList
            }
          >
            获取数据
          </Button>
        </div>
        <div style={{ width: '50%', margin: '10px auto' }}>
          <Table dataSource={lista} columns={columns} />
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = state => {
  return state.lan.indexLanguage
};

export default connect(
  mapDispatchToProps, {
    tabLanguange
  }
)(UserList);
// export default UserList;


