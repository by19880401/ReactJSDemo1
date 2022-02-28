/**
 * action的主要目的：为cal组件生成action对象
 */

import {INSCREASE, DESCREASE} from "./constant";

// 原函数
/*export function createIncrease(data) {
    return {type: 'increase', data: data * 1}
}

export const createDecrease = (data) => {
    return {type: 'decrease', data}
}*/

// 优化为：箭头函数
export const createIncreaseAction = (data) => ({type: INSCREASE, data: data * 1})

export const createDecreaseAction = (data) => ({type: DESCREASE, data})