//reducers/index.js
import { combineReducers } from 'redux';
import usereer from './user/index'; // 一般会配置多个reducer然后使用combineReducers将他们合并起来
import login from './login/index'; 
import register from './register/index'; 
import lan from './header/index'; 
const rootReducer = combineReducers({
  usereer,login,register,lan
});

export default rootReducer;