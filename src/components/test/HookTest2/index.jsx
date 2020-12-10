import React, { useContext } from 'react'
import { add_hook } from './action'
import { add_hookX } from './reducer'
import Store from '../../../rootstore'
import { Mycontext } from '../../../Routes1'
import { startsWith } from 'lodash'

class Baba extends React.Component {
    console_3 = () => {
        console.log(this)
    }
    render() {
        return (
            <div>
                <p onClick={this.console_3} className='p1'>点击查看Baba的this</p>
            </div>
        );
    }
}


class Son1 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
        this.console_2 = this.console_2.bind(this)
        this.myref = React.createRef()
    }
    contextType = Mycontext;
    componentDidMount() {
        this.setState(() => ({
            p: document.getElementsByClassName('p1')[0]
        }))
    }
    console_2() {
        //console.log(this.contextType);
        console.log(this)

    };
    render() {
        return <div><p onClick={this.console_2}> 点击，查看类组件的contexttype</p>
            <Baba ref={this.myref} />
        </div>
    }
}
export default function Index(props) {
    console.log(props);
    let context1 = useContext(Mycontext);
    function console_1() {
        console.log(context1)
    }
    function update_hook(e) {
        let target = e.target
        let val = target.nextElementSibling.value;
        Store.dispatchShow(add_hook(val), 'show')

    }
    Store.subscribe((a, b) => {
        console.log("这是监听器里面的store：" + a + b)
        console.log(Store.getState())
    })
    return (
        <div>
            HOOKTEST2
            <p onClick={console_1}>测试hook2</p>
            <div> <p onClick={update_hook}> 添加hook：</p><input type="text" /></div>
            <Son1></Son1>
        </div>
    )
}
