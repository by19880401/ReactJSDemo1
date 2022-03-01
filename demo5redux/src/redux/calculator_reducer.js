/***
 * reducers可以有很多，这是其中之一，是cal的组件的reducer，专门为cal组件提供服务
 * reducer本质其实就是一个实现具体逻辑的函数
 *
 * export相当于java中的public，用于把被修饰的函数暴露出来供其它组件调用
 *
 * 问题：TODO 这里不能用export default，暂时不知道原因？
 *
 */

import {INSCREASE, DESCREASE} from "./constant";

// 初始化cal组件使用的state
const INIT_CAL_STATE = 0;


/**
 * cal组件的reducer, reducer其实就是一个函数，它有两个参数
 * @param previousState，上一次保存的状态，初始化的时候是undefined
 * @param action 操作，它里面可解构出两个参数：{type: 'xx', data:'数据（可选）'}
 * @return state 处理后的一个新的state
 */
export function calReducer(previousState = INIT_CAL_STATE, action) {
    const {type, data} = action;
    // 根据action的type不同，执行不同操作
    switch (type) {
        case INSCREASE:
            return (previousState + data);//[加]操作
        case DESCREASE:
            return (previousState - data);//[减]操作
        default:
            return INIT_CAL_STATE;//默认previousState是undefined，返回undefined时，会导致程序报错，所以需要给一个默认值0
    }
}