



export const FETCH_REGISTER_USER_LIST_SUCCESS = 'FETCH_REGISTER_USER_LIST_SUCCESS';



export const plusAction = (plusData) => (dispatch) => {
  dispatch({
      type:FETCH_REGISTER_USER_LIST_SUCCESS,
      data: ++ plusData
  })
};
  