//actions/User.js
import {
    FETCH_LOGIN_USER_LIST,
    FETCH_LOGIN_USER_LIST_SUCCESS,
    FETCH_LOGIN_USER_LIST_FAIL
  } from '../../../constants/login/ActionType';
  import axios from 'axios';
  
  // 获取用户列表
  const getAllUserList = () => ({
    type: FETCH_LOGIN_USER_LIST,
  });
  const getAllUserListSuccess = (payload) => ({
    type: FETCH_LOGIN_USER_LIST_SUCCESS,
    payload
  });
  const getAllUserListFail = () => ({
    type: FETCH_LOGIN_USER_LIST_FAIL
  });
  export const fetchLoginEnter = (obj) => (dispatch) => {
    console.log(obj);
    dispatch(getAllUserList());
    // 获取用户列表
    // 因为设置了proxy的缘故，所以不需要写http://localhost:3003
    // 会自动定向到后端服务器
      return axios.get('/api/user/list')
          .then(res => {
              return dispatch(getAllUserListSuccess(res.data));
          })
          .catch((error) => {
              console.log(error);
              dispatch(getAllUserListFail());
          }); 
  };
  