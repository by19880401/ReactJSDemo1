import React from "react";//必须引入react；另：如果引入的是第三方组件模块，直接写模块名即可，如 "react"和下面的“react-dom”
import  ReactDOM from "react-dom"; // 使用ReactDOM进行渲染，所以要引入ReactDOM
import App from "./components/app"; // 要渲染App组件，故引入; 另：如果引入的是自定义组件模块，则写相对路径，必须以./开头或者../开头

import './index.css'

// 开始渲染
ReactDOM.render(<App/>, document.getElementById("root"))