import React from "react";

import {Table, Tag, Space, Button, Popover, Popconfirm} from "antd";


class About extends React.Component {

    state = {
        data: [
            {
                key: 1,
                sex: ['Male'],
                name: 'Willis Bai',
                age: 37,
                address: 'Xi\'an Gao Xin Hua Fu'
            },
            {
                key: 2,
                sex: ['Female'],
                name: 'Ju He',
                age: 35,
                address: 'Xi\'an Shen Shi Chang An #47'
            }
        ],
        count: 2
    }

    // 添加一行操作
    handleAdd = () => {
        // 先取旧数据，才好在旧数据的基础上更新
        const {count, data} = this.state;
        // 组装新数据
        const newRow = {
            key: count,
            sex: count % 2 == 0 ? ['Female'] : ['Male'], /*当count为偶数时，为Female，奇数时，为Male*/
            name: `Child ${count}`, /*注：在JS中想要使用${}获取变量 要在 ` `中使用，注意是``（~的那个键） 不是 单引号*/
            age: count,
            address: 'Shan Xi, Xi\' an, Yan Tan Disc'
        }
        // 更新state
        this.setState({data: [...data, newRow], count: count + 1})
    }

    // 删除一行，UI设计为有且仅删除一行
    handleDelete = (key) => {
        // 获取数据
        const {data} = this.state;
        const modifiedRow = (data.filter((item) => item.key !== key));
        // 更新state
        this.setState({data: modifiedRow});
    }


    render() {
        // 定义表格列名
        const columns = [
            {
                title: 'Person 姓名',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>
            },
            {
                title: 'Sex 性别',
                key: 'sex',
                dataIndex: 'sex',
                render: (sex) => (
                    <>
                        {
                            sex.map(sex => {
                                let color = 'volcano';
                                if (sex == 'Male') {
                                    color = 'geekblue'
                                }
                                return (<Tag color={color} key={sex}>{sex}</Tag>);
                            })
                        }
                    </>
                ),
            },
            {
                title: 'Age 年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address 地址',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Action 操作',
                key: 'action',
                render: (text, record) => (
                    <Space>
                        <Popover
                            content={<div><p>{record.key}</p><p>{record.name}</p><p>{record.sex}</p><p>{record.age}</p>
                                <p>{record.address}</p></div>} title="Person Information 人员信息"
                            trigger="click"><a>Edit {record.name}</a></Popover>
                        {this.state.data.length >= 1 ? (
                            <Popconfirm title={"Sure to delete it?"}
                                        onConfirm={() => this.handleDelete(record.key)}><a>Delete</a></Popconfirm>) : null}
                    </Space>
                )
            }
        ];
        // 获取数据
        const {data} = this.state;
        // 渲染表格组件
        return (
            <div>
                <Button type="primary" style={{marginBottom: 16}} onClick={this.handleAdd}>添加一行</Button>
                <Table columns={columns} dataSource={data}/>
            </div>
        );
    }
}

export default About;