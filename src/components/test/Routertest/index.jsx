import React from 'react';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom'
import R1 from './sons/R1'
import R2 from './sons/R2'
import R3 from './sons/R3'
const Index = (props) => {

    return (

        <div>
            这是路由测试！
            <NavLink to='/bignav/routertest/r1' activeStyle={{ color: 'red' }} exact={false}>r1 | </NavLink>
            <NavLink to='/bignav/routertest/r2' activeStyle={{ color: 'red' }}>r2 | </NavLink>
            <Link to='r3' >r3 | </Link>
            <Route path='/bignav/routertest/r1' component={R1} />
            <Route path='/bignav/routertest/r2' component={R2} />
        </div >

    );
}

export default Index;



