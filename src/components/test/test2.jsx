import React, { Component } from 'react'

export default class test1 extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('2  的willreceiveProps')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('2  的should  Update')
        return true;
    }
    render() {
        return (
            <div>
                <h2>这是test2222</h2>
            </div>
        )
    }
}
