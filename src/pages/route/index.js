import React, {Component} from 'react';
import Routers from './route'
import {Switch, Route, Redirect} from 'react-router-dom'

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