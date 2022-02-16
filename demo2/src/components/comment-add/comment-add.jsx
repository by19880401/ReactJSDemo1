import React,{Component} from "react";

class CommentAdd extends Component{
    render() {
        return (
            <div className="container">
                <div>
                    <form>
                        <div className="form-group">
                            <label>用户名</label>
                            <input type="text" placeholder="用户名"/>
                        </div>
                        <div className="form-group">
                            <label>评论内容</label>
                            <textarea rows="6" placeholder="评论内容"></textarea>
                        </div>
                        <div className="form-group">
                            <button type="button">提交</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CommentAdd;