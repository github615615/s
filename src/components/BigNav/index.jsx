import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
export default class index extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        alert("bignav挂载了几次？")//挂载两次是因为strictMode，但是对生产环境没有影响
    }

    render() {
        return (
            <div>
                <h2><Link to='/bigNav/JN#/Home0'>京南商城</Link> </h2>
                <h2> <Link to='/bignav/test'>生命周期测试</Link> </h2>
                <h2><Link to='bignav/axiostest'>axios测试</Link> </h2>
                <h2><Link to='/bignav/reduxtest'>Redux test</Link> </h2>
            </div>
        )
    }
}
