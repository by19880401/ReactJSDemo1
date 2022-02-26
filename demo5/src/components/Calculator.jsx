import React from "react";

class Calculator extends React.Component {

    state = {
        calResult: 0
    }

    handlePlus = () => {
        const {calResult} = this.state;//从state中获取定义的初始值0或者操作之后的结果值
        const {value} = this.selectComponent;//从<select>组件中获取选中的option值
        // 执行加法操作，同时更新state
        this.setState({calResult: calResult + value * 1});// 由于value是字符串，所以乘以数字1相当于给它做一次弱类型转化，转为数字
    }

    handleReduce = () => {
        const {calResult} = this.state;
        const {value} = this.selectComponent;
        this.setState({calResult: calResult - value * 1});
    }

    handleOddPlus = () => {
        const {calResult} = this.state;
        const {value} = this.selectComponent;
        if (calResult % 2 !== 0) {//求模，值为奇数时，才执行加法操作
            this.setState({calResult: calResult + value * 1});
        }

    }

    handleSyncPlus = () => {
        setTimeout(() => {//模拟异步操作，点击之后等待1000ms再执行加法操作
            const {calResult} = this.state;
            const {value} = this.selectComponent;
            this.setState({calResult: calResult + value * 1});
        }, 1000);
    }

    render() {
        const {calResult} = this.state;

        return (
            <div>
                <h2>计算的结果是：{calResult}</h2>&nbsp;
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