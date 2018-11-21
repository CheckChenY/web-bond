
import React from 'react'
import ReactDOM from 'react-dom';
import RootRouter from './routes/index';
import * as serviceWorker from './serviceWorker';

// http://10.204.24.129:8080

ReactDOM.render(
    <RootRouter />, 
    // <App />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
