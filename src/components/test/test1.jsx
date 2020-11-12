import React, { Component } from 'react'

export default class test1 extends Component {
    constructor(props) {
        super(props);
        console.log("111  构造！")
        this.state = { s11state: this.props.ToTest1 }

    }
    nothing = () => {
        alert("什么也没有改变，触发了事件，会触发生命周期么？")
    }
    componentWillReceiveProps(nextProps) {

        console.log('1  的willreceiveProps')
        this.setState((oldstate, props) => {
            console.log("111这是setstate中的props：减去nextProps" + (props.ToTest1 - nextProps.ToTest1));
            console.log("这是set  state中的  oldstate： " + oldstate.s11state)
            return { s11state: 888 }
        })
        this.setState((oldstate, props) => {
            console.log("2222这是setstate中的props：减去nextProps" + (props.ToTest1 - nextProps.ToTest1));
            console.log("这是set  state中的  oldstate： " + oldstate.s11state)
            return { s11state: 888 }
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('1  的should  Update中的this.props与nextProps差值：' + (this.props.ToTest1 - nextProps.ToTest1))
        console.log("这是 next State：" + nextState.s11state)
        console.log("这是this. state: " + this.state.s11state)
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("这是will update中的this.props" + this.props.ToTest1)
        console.log("这是nextProps   " + nextProps.ToTest1)
    }
    componentDidMount() {
        console.log("儿子组件的did  Mount！！")
    }
    render() {
        console.log("这是11的render中的this.props.ToTest1  " + this.props.ToTest1)
        console.log("这是11中的state中的ToTest1  " + this.state.s11state)
        return (
            <div>
                <h2 onClick={this.nothing}>这是test1</h2>
            </div>
        )
    }
}
