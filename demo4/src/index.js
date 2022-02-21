import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {BrowserRouter} from "react-router-dom";
/*当要使用react-route来实现'路由效果'时，需要使用路由标签<BrowserRouter/>或者<HashRouter/>把<App/>标签包裹起来，这样路由器就会管理整个web应用的元素*/
ReactDOM.render(
    (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ),
    document.getElementById('root')
);
