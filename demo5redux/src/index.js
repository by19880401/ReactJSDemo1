import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './components/Calculator';

import store from "./redux/store";

// 当redux管理的state状态发生任何变化的时候，便会回调该方法，我们用该方法重新渲染下组件
store.subscribe(() => {
    ReactDOM.render(<Calculator/>, document.getElementById('root'));
})

ReactDOM.render(<Calculator/>, document.getElementById('root'));
