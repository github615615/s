import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import './dist/JN.css'
//import '../../../public/taobaoicon/font_1951322_vs27yrqb0s/iconfont'
//import '../../../public/taobaoicon/font_1951322_vs27yrqb0s/iconfont.css'
// import '../../assets/iconfont.css'
import '../../assets/font_1951322_4wuhq67pva7/iconfont.css'
import Home from './Home';
import My from './My'
class JN extends Component {
    constructor(props) {
        super(props);
        this.state = { hash: window.location.hash };
        //console.log(window.location.hash)
        /*if (this.state.hash == undefined) {
            this.state = { hash: '#/Home0' }
        }
        this.props.history.replace(this.state.hash) */
    }
    componentDidUpdate() {
        console.log("组件更新了,这是更新后的hash")
        console.log(window.location.hash)
        /*  this.setState(() => ({//有四个生命周期里都不能使用setState。因为会陷入无限回调
             hash: this.props.location.hash
         })) */
        //this.hashadd();
        this.state.hash = window.location.hash;
        //this.setState({ hash: this.props.location.hash })
    }
    hashadd = (e) => {
        //console.log(e.currentTarget)
        let hash = e.currentTarget.getAttribute('href')
        this.setState(() => {
            //console.log(e.currentTarget)
            return ({
                hash: hash
            })
        })
    }
    render() {
        return (<HashRouter>
            <div>
                <div className='contents'>
                    <Switch>
                        <Route path='/Home0' component={Home} />
                        <Route path='/My0' component={My} />
                        {/* <Route path='Home' />
                        <Route path='Home' /> */}
                    </Switch>
                </div>
                <div className="bottom">
                    <div><Link to='Home0' className='iconfont' style={{ color: this.state.hash.includes('Home0') ? 'red' : 'black' }} onClick={this.hashadd}><p>&#xe604;</p><p>Home</p> </Link></div>
                    <div><Link to='My0' className='iconfont' style={{ color: this.state.hash.includes('My0') ? 'red' : 'black' }} onClick={this.hashadd}>My</Link></div>
                    <div><Link to='Home1' className='iconfont' style={{ color: this.state.hash.includes('Home1') ? 'red' : 'black' }} onClick={this.hashadd}>Home1</Link></div>
                    <div><Link to='My1' className='iconfont' style={{ color: this.state.hash.includes('My1') ? 'red' : 'black' }} onClick={this.hashadd}>My1</Link></div>
                </div>

            </div> </HashRouter >
        );
    }
}

export default JN;
