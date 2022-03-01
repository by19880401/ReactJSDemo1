import React from "react";

// 引入redux的store
import store from "../redux/store";

// 引入action里的两个函数方法
import {createIncreaseAction, createDecreaseAction} from "../redux/calculator_action";

class Calculator extends React.Component {

    /**
     * 组件挂载完成后执行
     * 问题：这里我们只渲染Calculator这一个组件，如果有N多个组件时，每个组件都需要写componentDidMount(){...}来进行渲染，这样其实并不好，有没有一劳永逸的办法呢？
     * 答案：有，可以在index.js里进行渲染，所以此处代码应该被注释掉
     */
    /*componentDidMount() {
        // 这是redux的一个回调函数，当redux里的管理的状态state发生改变时，就会触发redux里store.subscriber(...)，可以用它来监听/渲染组件
        store.subscribe(()=>{
            this.setState({});//在react中，当你set一个空的状态时，也会引起状态的改变，从而使组件重新渲染
        })
    }*/

    handlePlus = () => {
        //从<select>组件中获取选中的option值
        const {value} = this.selectComponent;
        // 发送action请求给store，让store去找对应的reducer去做对应的逻辑操作
        // store.dispatch({type: "increase", data: value * 1})
        store.dispatch(createIncreaseAction(value * 1));
    }

    handleReduce = () => {
        const {value} = this.selectComponent;
        // 发送action请求给store，让store去找对应的reducer去做对应的逻辑操作
        // store.dispatch({type: "increase", data: value * 1})
        store.dispatch(createDecreaseAction(value * 1));
    }

    handleOddPlus = () => {
        const calResult = store.getState();
        const {value} = this.selectComponent;
        if (calResult % 2 !== 0) {//求模，值为奇数时，才执行加法操作
            // 发送action请求给store，让store去找对应的reducer去做对应的逻辑操作
            // store.dispatch({type: "increase", data: value * 1})
            store.dispatch(createIncreaseAction(value * 1));
        }

    }

    handleSyncPlus = () => {
        setTimeout(() => {//模拟异步操作，点击之后等待1000ms再执行加法操作
            const {value} = this.selectComponent;
            // 发送action请求给store，让store去找对应的reducer去做对应的逻辑操作
            // store.dispatch({type: "increase", data: value * 1})
            store.dispatch(createIncreaseAction(value * 1));
        }, 1000);

    }

    render() {
        return (
            <div>
                <h2>计算的结果是：{store.getState()}</h2>&nbsp;/**从store里获取状态值*/
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