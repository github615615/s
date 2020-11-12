import {
    Add,
    Change
} from './myaction';

function todo(state = {}, action) {
    switch (action.type) {
        case 'add':
            let a = []
            a[0] = action.text
            if (state.todo)
                return state.todo.concat(a)
            else
                return [action.text]
        default:
            return state.todo; //它应该返回旧的store树中的todo的值！！因为每一次dispatch都会将action代入所有的reducer;
    }
}

function changeTodo(state = {}, action) {
    switch (action.type) {
        case 'change':
            return action.value;
        default:
            return state.TF;
    }
}

function todos(state = {}, action) {
    return {
        todo: todo(state, action), //store树中的state之todo，那么这里也应该设置它的值为更新后的todo
        trueOrf: changeTodo(state, action),
    }
}
export default todos;