import createReducer from './rootreducer';
import {
    createStore
} from 'redux';

const Store = createStore(createReducer, {
    todo: ['1asd'],
    TF: false
})

Store.dispatchShow = function(action, show, payload) {
    if (show) {
        console.log(Store.getState())
        console.log(action);
        Store.dispatch(action, payload)
        console.log(Store.getState())
    } else {
        Store.dispatch(action, payload)
    }

}
export default Store