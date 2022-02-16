// 引入react和reactDOM组件
import React from "react";
import ReactDOM from "react-dom";

// 引入自定义组件，所有自定义组件的引入，都需要以"./"开头，而所有第三方组件的引入，直接写其名称即可，如上react和react-dom等
import App from "./components/app/app"

// 渲染
ReactDOM.render(<App/>, document.getElementById("root"));