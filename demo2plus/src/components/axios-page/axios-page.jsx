import React from "react";
import axios from "axios";

class AxiosPage extends React.Component {

    state = {
        resCode: '',
        resMsg: '',
        resDataKey: [],
        resDataVal: []
    }

    // 发送axios请求
    handleAxios = () => {
        axios.get('http://localhost:9050/hello/generateUUID').then((response) => {
            const result = response.data;
            if (result.errorCode === '200') {
                const resData = result.data;
                this.setState({
                    resMsg: result.errorMsg,
                    resDataKey: Object.keys(resData),
                    resDataVal: Object.values(resData)
                })
            }

        }).catch(() => {
            alert('error')
        })
    }

    render() {
        const {resMsg, resDataKey, resDataVal} = this.state;
        return (
            <div>
                <button onClick={this.handleAxios}>发送axios请求</button>
                <div>
                    <h2>status:{resMsg}, map key: {resDataKey}, map val: {resDataVal}</h2>
                </div>
            </div>
        );
    }
}

export default AxiosPage;