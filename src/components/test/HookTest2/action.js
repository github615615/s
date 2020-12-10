const add = 'add_new_todo'
export function add_hook(value) {
    return {
        type: add,
        value,

    }
}