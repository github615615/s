import {
    combineReducers
} from 'redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions'
const {
    SHOW_ALL
} = VisibilityFilters

//TODO子reducer的初始值怎么获取？？如果是要从服务器取得初始值，应该怎么做？
//在createStore的第二个参数是初始化store,里面的state就得到了初始化。
//调用store.dispatch（action），是把这个action里面的东西带入所有的reducers中去？？然后找到了匹配的reducer就去执行？
//！store会把两个参数传入reducer中去：旧的state，dispatch传递过来的action
//根reducer就是，包含了所有的reducer。每一个reducer都管理store中的一个对象（state），
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
//这里默认初始的todos为空，如果有需要，应该是从服务器读取初始todos，然后这里赋值给state
function todos(state = [], action) { //reducer接受旧的state和action，返回新的state,而不是修改，，是直接返回全新的state
    //action里面必须有type，然后应该传递一些其他数据，这些函数就是reducer，reducer就依靠这些，
    //返回一个全新的state；

    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp