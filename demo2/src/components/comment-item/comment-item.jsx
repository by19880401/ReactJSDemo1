import React, {Component} from "react";
import PropTypes from "prop-types";

class CommentItem extends Component {

    // 首先，声明参数类型
    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    render() {
        // 然后，接受参数
        const {comment} = this.props;
        return (
            <li>
                <div>
                    <a href="javascript:;">删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说：</span></p>
                <p>{comment.content}</p>
            </li>
        )
    }
}

export default CommentItem;