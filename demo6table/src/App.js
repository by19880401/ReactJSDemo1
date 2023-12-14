
import {Table} from 'antd';

import {useState} from "react";


function App() {

    const columns = [{
        title: 'RowHead', dataIndex: 'key',
    }, {
        title: '供应商', dataIndex: 'supplier', render: (text) => <a>{text}</a>,
    }, {
        title: '船司', dataIndex: 'ShippingDept',
    }, {
        title: '成本价',
        children: [
            {
                title: '20GP',
                dataIndex: 'cost20gp',
            },
            {
                title: '40GP',
                dataIndex: 'cost40gp',
            },
        ],
    }, {
        title: '标准价',
        children: [
            {
                title: '20GP',
                dataIndex: 'std20gp',
            },
            {
                title: '40GP',
                dataIndex: 'std40gp',
            },
        ],
    }, {
        title: 'Address', dataIndex: 'address',
    },];

    // const data = [];

    const data = [{
        key: '1',
        supplier: 'John Brown sr',
        ShippingDept: 32,
        cost20gp: 400,
        cost40gp: 800,
        std20gp: 600,
        std40gp: 700,
        address: 'New York No. 1 Lake Park',
        children: [
            {
                key: 11,
                supplier: 'John Brown11',
                ShippingDept: 42,
                cost20gp: 400,
                cost40gp: 800,
                std20gp: 600,
                std40gp: 700,
                address: 'New York No. 2 Lake Park',
            },
            {
                key: 12,
                supplier: 'John Brown 12',
                ShippingDept: 30,
                cost20gp: 400,
                cost40gp: 800,
                std20gp: 600,
                std40gp: 700,
                address: 'New York No. 3 Lake Park',
            }
        ],
    }, {
        key: '2',
        supplier: 'Jim Green',
        ShippingDept: 42,
        cost20gp: 400,
        cost40gp: 800,
        std20gp: 600,
        std40gp: 700,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        supplier: 'Joe Black',
        ShippingDept: 32,
        cost20gp: 400,
        cost40gp: 800,
        std20gp: 600,
        std40gp: 700,
        address: 'Sydney No. 1 Lake Park',
    }, {
        key: '4',
        supplier: 'Jim Red',
        ShippingDept: 18,
        cost20gp: 400,
        cost40gp: 800,
        std20gp: 600,
        std40gp: 700,
        address: 'London No. 2 Lake Park',
    }, {
        key: '5',
        supplier: 'Jake White',
        ShippingDept: 18,
        cost20gp: 400,
        cost40gp: 800,
        std20gp: 600,
        std40gp: 700,
        address: 'Dublin No. 2 Lake Park',
    },];

    const rowSelection: TableRowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };

    const [checkStrictly] = useState(false);


    return (<Table columns={columns} dataSource={data} rowSelection={{...rowSelection, checkStrictly}} bordered/>);
}

export default App;
