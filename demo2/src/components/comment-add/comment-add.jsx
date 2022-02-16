import React, {Component} from "react";
import PropTypes from "prop-types";

class CommentAdd extends Component {

    /*constructor(props) {
        super(props);
        // 使用自定义方式时，必须要bind一下，这样比较烦，推荐使用箭头函数
        this.handleAdd = this.handleAdd.bind(this);

    }*/

    state = {
        username: '',
        content: ''
    }

    // 声明父组件的参数类型
    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    /*handleAdd(){
        alert(0)
    }*/
    // （推荐）使用箭头函数，自定义函数使用箭头函数后，就不需要bind了
    handleAdd = () => {
        // 收集数据，并封闭成comment对象
        const comment = this.state;
        // 更新数据，子组件调用父组件的方法来向父组件添加comment,以实现数据从子组件-->父组件的传递
        this.props.addComment(comment);
        // 清除输入的数据
        this.setState({username: '', content: ''})
    }

    handleUserChange = (event) => {
        const myUserName = event.target.value;
        this.setState({username: myUserName})
    }

    handleContentChange = (event) => {
        const myContent = event.target.value;
        this.setState({content: myContent})
    }

    render() {
        const {username, content} = this.state;

        return (
            <div className="container">
                <div>
                    <form>
                        <div className="form-group">
                            <label>用户名</label>
                            <input type="text" placeholder="用户名" value={username} onChange={this.handleUserChange}/>
                        </div>
                        <div className="form-group">
                            <label>评论内容</label>
                            <textarea rows="6" placeholder="评论内容" value={content}
                                      onChange={this.handleContentChange}></textarea>
                        </div>
                        <div className="form-group">
                            <button type="button" onClick={this.handleAdd}>提交</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CommentAdd;