import React from 'react'
import Store from '../../rootstore'
// import isEqual from 'lodash/isEqual'
import { isEqual } from 'lodash-es';//就差测试这个的大小了；
// import _ from 'lodash'
export default function R1() {

    let addToStore = (e) => {
        let text = e.target.value
        Store.dispatchShow({
            type: 'add',
            text,
        }, true)
        // console.log("刚刚调用完毕dispatch的store")
        // console.log(Store.getState())
    }
    let console_store = () => {
        console.log(Store.getState())

        let a = { a1: 20 }
        let b = { a1: 20 }
        if (isEqual(a, b)) {
            addToStore()
        }
    }
    let changeTF = (e) => {
        let value = Number(e.target.value) > 10 ? true : false;
        Store.dispatch({
            type: 'change',
            value,
        })
    }
    return (
        <div>
            redux 测试
            <p onClick={console_store}>点击输出store</p>
            todo：<input type="text" onBlur={addToStore} />
            tf: <input type='text' onBlur={changeTF} />
        </div>
    )
}
