import React, {Component} from "react";

class CommentList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li>
                        <div>
                            <a href="javascript:;">删除</a>
                        </div>
                        <p className="user"><span>xxxx</span><span>说：</span></p>
                        <p>React真不错，挺好用的</p>
                    </li>
                    <li>
                        <div>
                            <a href="javascript:;">删除</a>
                        </div>
                        <p className="user"><span>xxxx</span><span>说：</span></p>
                        <p>React看起来还阔以</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CommentList;