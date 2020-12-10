import {
    BrowserRouter,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import App from './App'
import Gpp2 from './Gpp2';
import React from 'react';
import BigNav from './components/BigNav'
import Com404 from './components/Com404'
import JN from './components/JN'
import Test from './components/test'
import AxiosTest from './components/axiosTest'
import ReduxTest from './components/Redux_test/R1'
import Hook from './components/test/Hooktest/hook'
import HOOK2 from './components/test/HookTest2'
import Routertest from './components/test/Routertest'
const Mycontext = React.createContext({
    c1: "这是Mycontext的c1", c2: "this is Mycontext ..c2"
})
let MycontextValue = {
    c1: 'c1...',
    c2: 'c2...'
}
export default function Routes1() {
    return (<Mycontext.Provider value={MycontextValue}><BrowserRouter>
        <React.StrictMode >
            {/* //TODOstrictMode会使得组件挂载两次！但是对生产环境没有影响，还是打开吧，也会导致有些定时器之类的，，会触发两次。 */}
            <Switch>
                <Route path='/bignav/routertest' component={Routertest} />
                <Route path='/bignav/hooktest2' component={HOOK2} />
                <Route path='/bignav/hooktest' component={Hook} />
                <Route path='/bignav/reduxtest' component={ReduxTest} />
                <Route path='/bignav/axiostest' component={AxiosTest} />
                <Route path='/bignav/test' component={Test} />
                <Route path='/bignav/jn' component={JN} />
                <Route path='/bignav' exact component={BigNav}></Route>
                <Route ptah='/' exact><App /></Route>{/*//TODO这个exact无效,移动到第一行去就知道了*/}
                <Route path='/404' component={Com404}></Route>
                <Route path='*' exact><Redirect to='/bignav'><Com404 /></Redirect></Route>

            </Switch>
        </React.StrictMode>
    </BrowserRouter >
    </Mycontext.Provider >)
}
export { Mycontext }
//









