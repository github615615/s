import React, { useState, Component, useEffect } from 'react';
function Index() {
    /*   const [count, setCount] = useState(0);
      useEffect(() => {
          const id = setTimeout(() => {
              setCount(count + 1); // 这个 effect 依赖于 `count` state
              //TODO  setCount(c => c + 1); // ✅ 在这不依赖于外部的 `count` 变量，有什么区别？？
          }, 1000);
          return () => clearTimeout(id);
      }, [count]); // Bug: `count` 没有被指定为依赖 */
    let [a1, setA1] = useState(0);//解构赋值，
    useEffect(() => {
        console.log("这是effet里面的a1：" + a1)//3*1
        return function () {
            console.log("这是effct返回值!!!!!!!!!!!!!!!!!!!!")
        }
    })
    let up_a1 = () => {
        setTimeout(() => {
            setA1(a1 + 100)
            console.log("这是定时器中刚刚调用完了set的a1：" + a1)//
        }, 2000);
        setA1(a1 + 1)
        console.log("这是刚刚调用完了set的a1：" + a1)//1*0
    }
    console.log("这是函数下面的a1： " + a1)//2*1
    let a2 = 0;
    function a2_add() {
        a2++;
        console.log("这是a2: " + a2)
    }
    // alert("函数组件更新了！")
    return <div>
        <button onClick={up_a1}>+{a1}</button>
        <span>这是非state中的：</span><button onClick={a2_add}>+{a2}</button>
    </div>
}

/* class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state.good = 1;
    }
    componentDidMount() {
        this.updateGood();
    }
    updateGood = () => {
        this.setState(() => {
            return { good: 2 }
        })
    }
    render() {
        return <p>eeee: {this.state.good}</p>
    }
}
 */



export default Index






