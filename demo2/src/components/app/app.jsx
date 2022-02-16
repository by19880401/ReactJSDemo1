import React,{Component} from "react";

import "./app.css"

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <h1>请发表评论</h1>
                    </div>
                </header>
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
                <div className="reply">
                    <h3>评论回复</h3>
                    <h2 style={{display:'none'}}>暂无评论，请点击左侧添加评论！</h2>
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
            </div>);
    }
}

export default App;