export function add_hookX(state, action) {
    switch (action.type) {
        case 'add_new_todo':
            return [...state, action.value];
        default:
            return state;
    }
}