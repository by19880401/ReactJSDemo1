import React from "react";
import {NavLink} from "react-router-dom";

/**
 * 自定义NavLink组件，用于封装原来的NavLink组件，并添加自定义属性
 */
class CustomNavLink extends React.Component {
    render() {
        /*{...this.props}这个语法特别强大，它指：当前组件接受所有一切传递过来的参数，而不用一一列举这些参数*/
        return (<NavLink {...this.props} activeClassName="customActiveClass"/>);
    }
}

export default CustomNavLink;