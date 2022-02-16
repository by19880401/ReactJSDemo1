import React, {Component} from "react";
import CommentList from "../comment-list/comment-list";

class CommentItem extends Component{
    render() {
        return (
            <div className="reply">
                <h3>评论回复</h3>
                <h2 style={{display:'none'}}>暂无评论，请点击左侧添加评论！</h2>
                <CommentList/>
            </div>
        )
    }
}

export default CommentItem;