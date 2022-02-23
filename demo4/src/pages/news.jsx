// {Component}相当于是把Component组件从react里解构出来，也可以不解构，而写成React.Component
import React, {Component} from "react";

class News extends Component {
    state = {
        newsArr: ['news001', 'news002', 'news003']
    }

    render() {
        return (
            <ul>
                {
                    //this.state.newsArr.map((news, index) =>{<li key={index}>{news}</li>}),箭头函数后面加了{}包裹之后，就无法显示了，目前不知原因
                    this.state.newsArr.map((news, index) =><li key={index}>{news}</li>)
                }
            </ul>
        );
    }
}

export default News;