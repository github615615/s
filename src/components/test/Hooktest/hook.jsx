import React, { useState, useEffect, useContext } from 'react';
import { Mycontext } from '../../../Routes1'
// let Mycontext = React.createContext();
let count2 = 0;//让count2跟着count变化，只是count2被提升到了函数外面，因为怀疑每一次执行render，setState中的东西，也会被重新创造，
//没错，useState创造的东西，只是保存了值可以不变，但是它每次渲染，都是不同的变量。

export default function Hook() {
    let value2 = useContext(Mycontext);
    let [count, setCount] = useState(0)//每次渲染，这个count并不是同一个变量，虽然count的值可能是一样的
    useEffect(() => {
        document.getElementById('addEvent').addEventListener("click", (e) => {
            Event_showCount()
        })
        console.log(value2);
    }, [])//给它一个空数组，只在挂载/卸载的时候执行
    function Event_showCount() {
        console.log("这是监听事件里面的count：" + count)
        console.log("监听事件里面的count2：" + count2)
    }
    let count_add2 = () => {
        setCount((prevCount) => (prevCount + 1))
        count2++;
        console.log("这是第一个prevCount+1之后的：" + count)
        setCount((prevCount) => (prevCount + 1))
        count2++;//
        console.log("这是第2个prevCount+1之后的：" + count)
    }
    let changeMycontextC1 = () => {
        value2 = "这是改变后的value2的c1"
        console.log("这是改变后的value2：")
        console.log(value2)
        console.log("这是直接输出useContext:")
        console.log()
    }
    let show_state = (e) => {
        switch (e.target.value) {
            case 'count':
                console.log("这是count：" + count + "  这是conut2： " + count2);
                return;
            default:
                return;
        }

    }
    alert(useContext(Mycontext))
    return (
        <div>
            <p id='addEvent'>点击触发挂载时候绑定的监听事件，挂载时的监听事件，里面的函数形成了闭包么？</p>
            <p onClick={count_add2}>点击连续调用两次setCount</p>
            <p ><input type="text" onBlur={show_state} /><button>查看：</button></p>
            <p onClick={changeMycontextC1}>点击直接改变Mycontext的c1值</p>
            {/* <p>这是provider提供的c1:
             <Mycontext.consumer>
                    {(c1) => (<h2>{c1}</h2>)}
                </Mycontext.consumer>
            </p> */}
        </div>
    )
}




