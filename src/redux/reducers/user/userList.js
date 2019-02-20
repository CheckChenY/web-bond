
import {
    FETCH_ALL_USER_LIST,
    FETCH_ALL_USER_LIST_SUCCESS,
    FETCH_ALL_USER_LIST_FAIL,
  } from '../../../constants/ActionTypes';

//   import { OperationStatus } from '../../../constants/OperationStatus';
  
  const initialState = {
    list: []
  };
  
  const userListlist = (state = initialState, { type, listaa }) => {
    switch (type) {
      case FETCH_ALL_USER_LIST:
        return {
          ...state,
        //   status: OperationStatus.initial
        };
      case FETCH_ALL_USER_LIST_SUCCESS:
        return {
        //   ...state,
          listsssss: listaa,
        //   status: OperationStatus.load_success,
        };
      case FETCH_ALL_USER_LIST_FAIL:
        return {
          ...state,
        //   status: OperationStatus.load_fail,
        };
      default:
        return state;
    }
  };
  
  export default userListlist;
  