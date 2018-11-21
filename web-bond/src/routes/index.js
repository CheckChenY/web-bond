import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configure from '../redux/store/configureStore';
import App from '../App';
import UserList from '../containers/user/userList';
import Login from '../components/login/login';
import Register from '../containers/register/index';
import Vister from '../components/vister/index';

import Bondinformation from '../components/bondinformation/bondissuance';
// import Bondinformation from '../components/bondinformation/creditrisk';
// import Bondinformation from '../components/bondinformation/releaseannouncement';
// import Bondinformation from '../components/bondinformation/exerciseprompt';
// import Bondinformation from '../components/bondinformation/paymentinterest';
// import Bondinformation from '../components/bondinformation/searchcondition';
// import Bonddata from '../components/bonddata/absoverview';
// import Bonddata from '../components/bonddata/depthdata';
import Bonddata from '../components/bonddata/absdepthdata';
// import Managementboard from '../components/managementboard/menumanagement';
// import Managementboard from '../components/managementboard/itemmanagement';
import Bondcollection from '../components/mycollection/bondcollection/bondcollection';
// import Bondcollection from '../components/mycollection/bondcollection/bondcollectsearch';
// import Bondcollection from '../components/mycollection/bondcollection/bondcollecttext';
import Bondinforoverview from '../components/mycollection/bondinforoverview/bondinforoverview';
// import Bondinforoverview from '../components/mycollection/bondinforoverview/bondinforsearch';
// import Bondinforoverview from '../components/mycollection/bondinforoverview/bondinfortext';
// import Bondinforoverview from '../components/mycollection/bondinforoverview/bonddetails';
import Password from '../components/password/returnpassword';
// import Password from '../components/password/editpassword';
import Openmarket from '../components/openmarket/openmarket';


// import NotFound from '../common/NotFound/NotFound';

// import { connect } from 'react-redux';
import intl from 'react-intl-universal';
// import {
//     tabLanguange
//   } from '../redux/actions/header/index';

const locales = {
  "zh-TW": require('../locales/zh-TW.json'),
  "zh-CN": require('../locales/zh-CN.json'),
  "zh-EN": require('../locales/zh-EN.json'),
};

intl.init({
  currentLocale: "zh-CN", // TODO: determine locale here
  locales,
})

const history = createBrowserHistory();
const store = configure();

class RootRouter extends Component {

  // componentDidMount() {
	// 	const self = this,
  //   { tabLanguange} = self.props;
	// 	tabLanguange("zh-CN");
	// }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Vister} />
            <Route path='/login' component={Login} />
            <Route path='/userList' component={UserList} /> 
            <Route path='/register' component={Register} />
            <Route path='/index' component={App} />

            <Route path='/bondissuance' component={Bondinformation} />
            {/* <Route path='/creditrisk' component={Bondinformation} /> */}
            {/* <Route path='/releaseannouncement' component={Bondinformation} /> */}
            {/* <Route path='/exerciseprompt' component={Bondinformation} /> */}
            {/* <Route path='/paymentinterest' component={Bondinformation} /> */}
            {/* <Route path='/searchcondition' component={Bondinformation} /> */}
            {/* <Route path='/absoverview' component={Bonddata} /> */}
            <Route path='/depthdata' component={Bonddata} />
            {/* <Route path='/menumanagement' component={Managementboard} /> */}
            {/* <Route path='/itemmanagement' component={Managementboard} /> */}
            <Route path='/bondcollection' component={Bondcollection} />
            {/* <Route path='/bondcollectsearch' component={Bondcollection} /> */}
            {/* <Route path='/bondcollecttext' component={Bondcollection} /> */}
            <Route path='/bondinforoverview' component={Bondinforoverview} />
            {/* <Route path='/bondinforsearch' component={Bondinforoverview} /> */}
            {/* <Route path='/bondinfortext' component={Bondinforoverview} /> */}
            {/* <Route path='/bonddetails' component={Bondinforoverview} /> */}
            <Route path='/returnpassword' component={Password} />
            {/* <Route path='/editpassword' component={Password} /> */}
            <Route path='/openmarket' component={Openmarket} />



            {/* <Route path='tFound' component={NotFound} /> */}
            <Redirect from='' to="tFound" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}



// const mapStateToProps = state => ({
//   language: state.lan.indexLanguage.lanage,
// });
// // debugger;

// const mapDispatchToProps = state => {
//     return state.lan.indexLanguage
// };

// export default connect(
// mapDispatchToProps,{
//   tabLanguange
// })(RootRouter);
export default RootRouter;
