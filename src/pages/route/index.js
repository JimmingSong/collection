import React, {Component} from 'react';
import Routers from './route'
import {Route} from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {Routers.map((route,index)=><Route key={index} path={route.path} render={(props)=>{
                    console.log(props);
                    return <route.component {...props}/>;
                }}/>)}
            </div>
        )
    }
}

export default App;