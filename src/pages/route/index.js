import React, {Component} from 'react';
import Routers from './route'
// import {Switch, Redirect} from 'react-router-dom'
import {Route,Switch,Redirect,withRouter} from 'mirrorx'
import store from '../store'

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <Redirect exact to='/home' from='/' />
                {Routers.map((route,index)=><Route key={index} path={route.path} render={(props)=>{
                    console.log(props);
                    return <route.component {...props}/>;
                }} />)}
            </Switch>
        )
    }
}

export default App;
