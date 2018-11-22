import React,{ Component } from 'react'
import '../css/head.css'
class Head extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        let style = {
            width:'100%',
            height:'100vh'
        }
        return (
            <div className='head-body' style={style}>
                <img src={require('./image/head/作品集 2.001.jpeg')} alt=""/>
            </div>
        )
    }
}

export default Head