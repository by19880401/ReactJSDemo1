// .jsx 标识当前文件是个组件模块，.js标识当前文件是个普通模块
import React, {Component} from "react";// 所有的组件类，全部要引入React
import logo from '../logo.svg'

import './app.css' //引入组件自己的样式

/*export default 暴露时，也可以这样*/
class App extends Component {
    render() {
        return (<div>
            <img className="app-logo" src={logo} alt="logo"/>
            <p className="app-title">Hi Cola, this is a React Component.</p>
        </div>)
    }
}

// 默认暴露该组件，就接口一样，这样别人就能直接使用了
export default App