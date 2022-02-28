import React from "react";

// 引入redux的store
import store from "../redux/store";

import {createIncreaseAction, createDecreaseAction} from "../redux/calculator_action";

class Calculator extends React.Component {

    handlePlus = () => {
        //从<select>组件中获取选中的option值
        const {value} = this.selectComponent;
        // 发送action请求给store
        // store.dispatch({type: "increase", data: value * 1})
        store.dispatch(createIncreaseAction(value * 1));
    }

    handleReduce = () => {
        const {value} = this.selectComponent;
        // 发送action请求给store
        // store.dispatch({type: "increase", data: value * 1})
        store.dispatch(createDecreaseAction(value * 1));
    }

    handleOddPlus = () => {
        const calResult = store.getState();
        const {value} = this.selectComponent;
        if (calResult % 2 !== 0) {//求模，值为奇数时，才执行加法操作
            // 发送action请求给store
            // store.dispatch({type: "increase", data: value * 1})
            store.dispatch(createIncreaseAction(value * 1));
        }

    }

    handleSyncPlus = () => {
        setTimeout(() => {//模拟异步操作，点击之后等待1000ms再执行加法操作
            const {value} = this.selectComponent;
            // 发送action请求给store
            // store.dispatch({type: "increase", data: value * 1})
            store.dispatch(createIncreaseAction(value * 1));
        }, 1000);

    }

    render() {
        return (
            <div>
                <h2>计算的结果是：{store.getState()}</h2>&nbsp;
                <select ref={(p) => this.selectComponent = p}>/**注意：this.selectComponent中selectComponent是自定义的任意字符串名称，此处随意写为：selectComponent，你也可以写为selectOptions等你认为很好听的名称*/
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>&nbsp;
                <button onClick={this.handlePlus}>[加]操作+</button>
                &nbsp;
                <button onClick={this.handleReduce}>[减]操作-</button>
                &nbsp;
                <button onClick={this.handleOddPlus}>仅计算的结果为奇数时执行[加]操作+</button>
                &nbsp;
                <button onClick={this.handleSyncPlus}>异步执行[加]操作+</button>
            </div>
        );
    }
}

export default Calculator;