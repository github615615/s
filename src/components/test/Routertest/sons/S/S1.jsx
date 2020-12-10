import React from 'react';
import MD5 from 'js-md5';
import S3 from './S3'
import { memoize } from 'lodash-es'
class S1 extends React.Component {
    // let E1 = <div style={{ color: 'red' }} className='god' hh={1 + 1}><p >good!</p><span>888</span> </div>
    constructor(props) {
        super(props);
        this.state = {
            arr1: { a1: 1 },
            arr2: { b1: 1 },
            updateTest: 1,
        }
        this.input1 = React.createRef();
        this.input2 = React.createRef()
        this.div1 = React.createRef()
        this.memoizeAddArr = memoize(this.AddArr, (a, b) => (a.a1 + '' + b.b1))
    }
    componentDidMount() {
        console.log(this.props.children)
        this.setState({ b1: 111 })
    }
    AddArr = (a, b) => {
        console.log("调用了！AddArr ： " + a.a1 + '+' + b.b1)
        //this.input1.current.focus()
        console.log(this.input1.current)//ref是在构造函数里创建的，然后调用这一句的时候，DOM还没有加载出来。。所以获取为null！
        return a.a1 + b.b1
    }
    showRefs = () => {
        console.log(this.input1)
        console.log(this.input1.current.value)
    }
    updateArr = () => {
        this.setState((nextState, nextProps) => {
            console.log(this.input1.current.value)
            return {
                arr1: { a1: Number(this.input1.current.value) },
                arr2: { b1: Number(this.input2.current.value) }
            }
        })
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDreivedStateFromProps了！！！');
        console.log()
        return null
    }
    componentDidUpdate() {
        console.log("S1  did  update")
    }
    S3Update = () => {
        this.setState((nextState) => {
            return {
                updateTest: this.state.updateTest + 1
            }
        })
    }
    render() {
        return <div ref={this.div1}>
            这是S1
             <p onClick={this.updateArr}>点击，即可让arr1与arr2的a1和b1得到更新</p>
           更新a1： <input type="text" ref={this.input1} />
            更新b1: <input type="text" ref={this.input2} />
            <p>a1与b1相加：{this.memoizeAddArr(this.state.arr1, this.state.arr2)}</p>
            <p onClick={this.showRefs}>查看ref：</p>
            <p onClick={this.S3Update}>这是S3：，点击更新本组件</p>
            <S3></S3>
        </div>
    };
}
S1.defaultProps = {
    good: '这是默认props!',
    good2: "这是第二个默认的props"
}
export default S1;
console.log("这是function  s1：")
console.log(React.createElement(S1, { className: 'good' }))

class S2 extends React.Component {
    render() {
        return (
            <div>
                hgj
            </div>
        );
    }
}











