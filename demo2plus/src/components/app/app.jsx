import React, {Component} from "react";

import "./app.css"
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";
import AxiosPage from "../axios-page/axios-page";

class App extends Component {

    // 一般，我们初始化state时，喜欢写在constructor内，有点冗余，并不优雅
    /*constructor(props) {
        super(props);
        //父组件定义初始化state,这样，子组件可公用state内的状态数据
        this.state = {
            comments: [
                {username: 'Tom', content: 'React太难了'},
                {username: 'Willis', content: 'React太难了'}
            ]

        }
    }*/

    // （推荐）下面这种写法来初始化state，更优雅，作用：给组件对象指定state属性
    state = {
        comments: [
            {username: 'Tom', content: 'React太难了'},
            {username: 'Willis', content: 'React太难了'}
        ]
    }
    // 添加操作，此方法，父组件并不会用，而是子组件为传递参数方便，交给子组件来调用传数据的
    addComment = (comment) => {
        const {comments} = this.state;
        comments.unshift(comment);
        // 更新状态
        this.setState({comments: comments})
    }

    // 删除操作，此方法，父组件并不会用，而是子组件为传递参数方便，交给子组件来调用传数据的
    delComment = (index) => {
        const {comments} = this.state;
        comments.splice(index, 1);// 删除下标为index的1个comment
        // 更新状态
        this.setState({comments: comments})
    }

    render() {
        const {comments} = this.state;
        return (
            <div>
                <header>
                    <div className="container">
                        <h1>请发表评论</h1>
                    </div>
                </header>
                <AxiosPage/>
                <CommentAdd addComment={this.addComment}/>
                <CommentList comments={comments} delComment={this.delComment}/>
            </div>);
    }
}

export default App; // 用于暴露该组件，这样其它组件就可以引用它了