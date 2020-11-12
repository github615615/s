import React from 'react'
import Store from '../../rootstore'
export default function R1() {
    let console_store = () => {
        console.log(Store.getState())
    }
    let addToStore = (e) => {
        let text = e.target.value
        Store.dispatchShow({
            type: 'add',
            text,
        }, true)
        // console.log("刚刚调用完毕dispatch的store")
        // console.log(Store.getState())
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
