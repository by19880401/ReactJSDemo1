import React, {Component} from "react";
import PropTypes from "prop-types";

import PubSub from 'pubsub-js';

class CommentItem extends Component {

    // 首先，声明参数类型
    static propTypes = {
        comment: PropTypes.object.isRequired,
        // delComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }

    handleClick = () => {
        const {/*delComment,*/ index} = this.props;
        // 提示信息
        if (window.confirm('remove it?')) {
            // delComment(index);
            /*
            * publish第一个参数是消息key，可以是任意你觉得有意义的字符串
            * publish第二个参数是你要传递的参数，如果是多个参数，则定义对象，然后传递对象过去
            *
            * */
            PubSub.publish('delComment', index);//发布消息后，订阅者会通过消息key（delComment）来找到发布者要传递的值

        }
    }

    render() {
        // 然后，接受参数
        const {comment} = this.props;
        return (
            <li>
                <div>
                    <a href="#!" onClick={this.handleClick}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说：</span></p>
                <p>{comment.content}</p>
            </li>
        )
    }
}

export default CommentItem;