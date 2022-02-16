import React,{Component} from "react";

import "./app.css"
import CommentAdd from "../comment-add/comment-add";
import CommentItem from "../comment-item/comment-item";

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <h1>请发表评论</h1>
                    </div>
                </header>
                <CommentAdd/>
                <CommentItem/>
            </div>);
    }
}

export default App;