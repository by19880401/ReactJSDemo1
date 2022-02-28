/***
 * reducers可以有很多，这是其中之一
 * reducer里其实就是一个一个的实现函数
 *
 * export相当于java中的public，用于把被修饰的函数暴露出来供其它组件调用
 *
 * 问题：TODO 这里不能用export default，暂时不知道原因？
 *
 */

import {INSCREASE, DESCREASE} from "./constant";

const INIT_STATE_DATA = 0;


/**
 * reducer其实就是一个函数，它有两个参数
 * @param previousState，上一个状态
 * @param action 动作，它里面可解构出两个参数：type和data
 */
export function calReducer(previousState = INIT_STATE_DATA, action) {
    const {type, data} = action;
    switch (type) {
        case INSCREASE:
            return previousState + data;
        case DESCREASE:
            return previousState - data;
        default:
            return INIT_STATE_DATA;
    }
}