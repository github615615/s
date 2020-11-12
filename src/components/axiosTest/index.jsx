import React, { Component } from 'react';
import axios from 'axios';
import { default as instance, cancel_instance } from './axiosapi';
let instance_state = 1;//发送请求之前和发送完请求都是真
export default class index extends Component {
    constructor(props) {
        super(props)

    }
    putaxios = () => {
        instance_state = 0;//开始发送请求就重置为0,
        let ax1 = instance.post('/getJoke', {
            good: 'image'
        })
        console.log(ax1)
        ax1.then((res) => {
            instance_state = res.status;//请求完毕之后就不是0了，
            console.log(res)
        }).catch((res) => {
            instance_state = res.status//这里也要，不用finally。因为finally的函数形参没有res，拿不到status；
            console.log(res)
        })
    }
    cancel2 = () => {
        if (instance_state == 0) cancel_instance("这次真的取消请求");
    }
    render() {
        return (
            <div>
                <h2>这是axios测试</h2>
                <h4 onClick={this.putaxios}>点击输出axios</h4>
                <h4 onClick={this.cancel2}>点击取消请求</h4>
            </div>
        )
    }
}









