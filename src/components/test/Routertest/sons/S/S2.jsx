import React, { useState } from 'react';
const S2 = (props) => {
    let [count, setCount] = useState({ g1: 1, g2: 2 })
    function update_count() {
        setCount((a, b) => {
            console.log(a)
            console.log(b)
            console.log(count)
        })
        setCount((a, b) => {
            console.log(a)
            console.log(b)
            console.log(count)
        })
    }
    function console_count() {
        console.log(count)
    }
    return (
        <div>
            这是S2
            <p onClick={update_count}>点击检查usestate更新机制</p>
        </div>
    );
}
S2.defaultProps = {
    color: 'reds'
}
export default S2;
