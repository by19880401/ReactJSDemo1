// {Component}相当于是把Component组件从react里解构出来，也可以不解构，而写成React.Component
import React from "react";

export default class Message extends React.Component {

    state = {
        /*messages: [
            {id: 1, title: 'message001'},
            {id: 2, title: 'message002'},
            {id: 3, title: 'message003'}
        ]*/

        messages: []
    }

    componentDidMount() {
        // 模拟发送ajax请求，异步获取数据
        setTimeout(() => {// 等等5s后，更新state状态
            // 假装请求到了如下数据
            const messages = [
                {id: 1, title: 'message001'},
                {id: 2, title: 'message002'},
                {id: 3, title: 'message003'}
            ]
            // 更新状态
            this.setState({messages: messages});
        }, 5000)
    }

    render() {
        const {messages} = this.state;
        return (
            <ul>
                {messages.map((msg, index) =><li key={index}><a href="#">{msg.title}</a></li>)}
            </ul>
        );
    }
}