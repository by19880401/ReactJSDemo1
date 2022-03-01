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

// 优化为：箭头函数，箭头函数会自动返回值，所以不需要return，要使用其它组件可以调用，需要使用export来把这函数暴露出来
// [加]操作的action
export const createIncreaseAction = (data) => ({type: INSCREASE, data: data * 1})
// [减]操作的action
export const createDecreaseAction = (data) => ({type: DESCREASE, data})

/**
 * 注意到上面的箭头函数体了吗，它是如下格式的：
 * export const createXxAction = (data) => ({...})
 * 为什么不是下面这样的呢：
 * export const createXxAction = (data) => {...}
 *
 * 原因：我们要构造的返回值格式是：{type: INSCREASE, data: data * 1}，它自身有一个{}，再加上箭头函数自身的{}，就会变成下面这样：
 * export const createXxAction = (data) => {{type: INSCREASE, data: data * 1}}
 * 出现两个{}，就报错了
 * 或者你写成下面这样:
 * export const createXxAction = (data) => {type: INSCREASE, data: data * 1}
 * 也是错的，因产箭头函数会把两侧的{}认为是自身的，那么如果解决这个问题呢，如果想让箭头函数把上述那个的返回值格式当成一个整体，就需要用()来代替
 * 这也是箭头函数自身的一个特性，切记
 */