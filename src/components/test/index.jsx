import React, { Component } from 'react'
import Test1 from './test1'
import Test2 from './test2'
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import FunTest from './FunTest'
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ToTest1: 1,
            ToTest2: 100,
            selfState: 200,
            toBoth: 300,
            state8: 0
        }

    }
    updateTest1 = () => {
        this.setState(() => ({
            ToTest1: this.state.ToTest1 + 1
        }))
    }
    updateTest2 = () => {
        this.setState(() => ({
            ToTest2: this.state.ToTest2 + 1
        }))
    }
    updateBoth = () => {
        this.setState(() => ({
            toBoth: this.state.toBoth + 1
        }))
    }
    updateState = () => {
        this.setState(() => ({
            selfState: this.state.selfState + 1
        }))
    }
    componentDidMount() {
        console.log("父组件did  Mount!!!")
    }
    componentDidUpdate() {
        console.log("父   did  update！!")
    }
    changeState8 = () => {
        this.setState({ state8: Date.now() })
    }
    render() {
        console.log("父  render !!! ")
        return (
            <div>
                <p onClick={this.updateTest1}> 点击更新Test111的props</p>
                <p onClick={this.updateTest2}>点击更新Test222的props</p>
                <p onClick={this.updateBoth}>点击更新两个的props</p>
                <p onClick={this.updateState}>点击只是更新本组件的state</p>
                <h5>下面两个是Test1和Test2: </h5>
                <Test1 ToTest1={this.state.ToTest1} />
                <Test2 ToTest2={this.state.ToTest2} />
                <p onClick={this.changeState8}>点击更新组件的传递给函数组件的props: | </p> <FunTest p1={this.state.ToTest1} />
            </div>
        )
    }
}
