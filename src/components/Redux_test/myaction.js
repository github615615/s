const add = 'add';
const change = 'change';

function Add(text) {
    return {
        type: add,
        text: text,
    }
}

function Change(value) {
    return {
        type: change,
        value: value,
    }
}
export {
    Add,
    Change
}