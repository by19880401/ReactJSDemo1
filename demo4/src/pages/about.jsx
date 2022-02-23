import React from "react";

import {Table, Tag, Space} from "antd";


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
        ]
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
                    <Space size='middle'>
                        <a>Add {record.name}</a>
                        <a>Delete</a>
                    </Space>
                )
            }
        ];
        // 获取数据
        const {data} = this.state;
        // 渲染表格组件
        return (<Table columns={columns} dataSource={data}/>);
    }
}

export default About;