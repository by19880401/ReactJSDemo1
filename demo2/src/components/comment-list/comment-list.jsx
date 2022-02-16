import React, {Component} from "react";
import CommentItem from "../comment-item/comment-item";

import PropTypes from 'prop-types';

class CommentList extends Component {

    // （推荐）优雅的方式，声明子组件类属性参数
    static propTypes = {
        comments: PropTypes.array.isRequired,
        delComment: PropTypes.func.isRequired
    }

    render() {

        // 接受父组件传递过来的参数
        const {comments, delComment} = this.props;
        const commentsSize = comments.length === 0 ? 'block' : 'none';// 当comments长度为0时，显示h2标签里的内容
        return (
            <div>
                <div className="reply">
                    <h3>评论回复</h3>
                    <h2 style={{display: commentsSize}}>暂无评论，请点击左侧添加评论！</h2>
                    <ul className="list-group">
                        {
                            comments.map((comment, index) => <CommentItem comment={comment} key={index} delComment={delComment} index={index}/>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

// 如果父组件给子组件传了参数过来，则子组件需要先声明下参数的属性，然后才能接受参数并使用
// 以下，子组件声明参数
// 但这种方式并不优雅
/*CommentList.propTypes = {
    comments:PropTypes.array.isRequired
}*/

export default CommentList;