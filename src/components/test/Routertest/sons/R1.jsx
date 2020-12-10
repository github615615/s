import React, { useState } from 'react';
import S1 from './S/S1'
import { NavLink, Route } from 'react-router-dom'
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testArray: [{ text: '组件1', id: 'a' }, { text: '组件2', id: 'b' }, { text: '组件3', id: 'c' }, { text: '组件4', id: 'd' }]
        }
    }

    //修改state打乱顺序
    sort = () => {
        this.setState({
            testArray: [{ text: '组件1', id: 'a' }, { text: '组件3', id: 'c' }, { text: '组件2', id: 'b' }, { text: '组件4', id: 'd' }]
        })
    }

    render() {
        return <div>
            <div>不指定key属性</div>
            <ul>
                {
                    this.state.testArray.map((item) => {
                        return <li ><span>{item.text}</span><input /></li>
                    })
                }
            </ul>
            <div>指定key属性</div>
            <ul>
                {
                    this.state.testArray.map((item) => {
                        return <li key={item.id}><span>{item.text}</span><input /></li>
                    })
                }
            </ul>
            <button onClick={this.sort}>打乱排序</button>
        </div>
    }
}
const R1 = () => {
    let [borderWidth, setBorderWidth] = useState(1);
    function addBorderWidth() {
        setBorderWidth((nextBorderWidth) => {
            return nextBorderWidth + 1;
        })
        console.log("红线宽度增加！")
        return () => {
            console.log("R1 update！")
        }
    }
    return (
        <div>
            这是r1
            下面是R1里面的东西：
            <br />
            <hr style={{ border: `${borderWidth}px red solid` }} />
            <NavLink to='/bignav/routertest/r1/s1'>点击查看s1 :</NavLink>
            <p onClick={addBorderWidth}>点击触发R1的render</p>
            <span>这是路由的S1： </span> <Route path='/bignav/routertest/r1/s1' component={S1} />
            <Test />
            <p>下面的是作为子组件的S1:</p>
            <S1><p>11</p></S1>
        </div>
    );
}

export default R1;
