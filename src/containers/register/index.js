import { connect } from 'react-redux';
import Register from '../../components/register/index';
import {
    plusAction
} from '../../redux/actions/register/index';


//lista  渲染頁面獲取的參數值
//useree  => reducers/index->useree
//userListss  => reducers/user/index->userListss
//listsssss  => reducers/user/userList->listsssss
const mapStateToProps = state => ({
  plus: state.register.indexReginster.plus,
});

const mapDispatchToProps = dispatch => ({
    plusAction(d) {
        dispatch(plusAction(d));
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);