import {createStore} from "redux";

import {calReducer} from "./calculator_reducer"

/*const store = createStore(calReducer);

export default store;*/

export default createStore(calReducer);