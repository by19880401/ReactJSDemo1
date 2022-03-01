import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './components/Calculator';

import store from "./redux/store";

/**
 * 当redux管理的state状态发生任何变化的时候，便会回调该方法，我们用该方法重新渲染下组件
 * 监听redux，当state发生改变，重新渲染组件
 * Tips: 由于react强大的diff算法，它仅会重新渲染state变化了的组件，所以不用担心这样写带来的性能问题
 */

// 当第二次，第三次...第N次运行，有状态的改变时，重新渲染组件
store.subscribe(() => {
    ReactDOM.render(<Calculator/>, document.getElementById('root'));
})

// 第一次运行，只初始化组件，并不会有状态的改变，所以这里需要首先渲染一下组件
ReactDOM.render(<Calculator/>, document.getElementById('root'));