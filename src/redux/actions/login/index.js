//actions/User.js
import {
  FETCH_LOGIN_USER_LIST,
  FETCH_LOGIN_USER_LIST_SUCCESS,
  FETCH_LOGIN_USER_LIST_FAIL
} from '../../../constants/login/ActionType';
import Axios from 'axios';
// import qs from 'qs';

export const LOGIN_IN_ACTION = 'LOGIN_IN_ACTION';
export const LOGIN_IN_SUCCESS = 'LOGIN_IN_SUCCESS';
export const LOGIN_IN_FAIL = 'LOGIN_IN_FAIL';


  // 登录
  const getLoginAction = () => ({
    type: LOGIN_IN_ACTION,
  });
  const getLoginSuccess = (payload) => ({

    type: LOGIN_IN_SUCCESS,
    payload
  });
  const getLoginFail = () => ({
    type: LOGIN_IN_FAIL
  });
  export const loginReduceFun = (obj) => (dispatch) => {
    console.log(obj);
    dispatch(getLoginAction(obj));
      return Axios.post('/User/login',{
          uname:obj.userName.input.value,
          upwd:obj.password.input.value,
      },
      // {headers: {'Content-Type': 'application/application/json;charset=UTF-8'}}
      )
      .then(res => {
          if(res.data.meta.success === 1){
            obj.props.history.push('/index');
            return dispatch(getLoginSuccess(res.data));
          }else{
            alert(res.data.meta.message)
          }
      })
      .catch((error) => {
          console.log(error);
          dispatch(getLoginFail());
      }); 
  };

  
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
      return Axios.get('/api/user/list')
          .then(res => {
              return dispatch(getAllUserListSuccess(res.data));
          })
          .catch((error) => {
              console.log(error);
              dispatch(getAllUserListFail());
          }); 
  };
  