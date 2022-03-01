// 使用redux提供的createStore函数来创建store
import {createStore} from "redux";
// 引入reducer，用来帮store处理操作
import {calReducer} from "./calculator_reducer"

/*const store = createStore(calReducer);

export default store;*/
// 暴露store，这样别的组件才能使用store, 可直接用下述方式替换上述两行
export default createStore(calReducer);