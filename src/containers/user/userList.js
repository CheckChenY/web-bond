// import { connect } from 'react-redux';
// import UserList from '../../components/userList';
// import {
//   fetchAllUserList
// } from '../../redux/actions/user';

// const mapDispatchToProps = state => ({
//   state:state.userList
//   });
  
//   export default connect(
//     mapDispatchToProps,{
//       fetchAllUserList
//   }
// )(UserList);


import { connect } from 'react-redux';
import UserLists from '../../components/userList';
import {
  fetchAllUserList
} from '../../redux/actions/user';


//lista  渲染頁面獲取的參數值
//useree  => reducers/index->useree
//userListss  => reducers/user/index->userListss
//listsssss  => reducers/user/userList->listsssss
const mapStateToProps = state => ({
  lista: state.usereer.userListss.listsssss,
});

const mapDispatchToProps = dispatch => ({
  fetchAllUserList() {
    dispatch(fetchAllUserList());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLists);

