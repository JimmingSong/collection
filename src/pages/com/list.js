import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Icon} from 'antd'

class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [
                {name: 'About Me', path: '/'},
                {name: 'Part.01', path: '/part01'},
                {name: 'Part.02', path: '/part02'},
                {name: 'Part.03', path: '/part03'}
            ],
            listIsShow:false,
            iconType:false,
        }
    }
    iconIsShow = ()=>{
        let {listIsShow} = this.state;
        this.setState({
            listIsShow:!listIsShow
        });
        let time = setInterval(()=>{
            this.setState({
                iconType:!listIsShow
            });
            clearInterval(time);
        },1000)
    };
    render() {
        let {menuList,listIsShow,iconType} = this.state;
        let Menu = menuList.map((item,index)=>
            <li key={index}>
                <Link to={item.path}>{item.name}</Link>
            </li>);
        return (
            <div className='box-style' style={{left:listIsShow?'0':'-200px'}}>
                <ul className='ul-style'>
                    {Menu}
                </ul>
                <Icon className='icon-style' type={iconType?'double-left':"double-right"} theme="outlined" onClick={this.iconIsShow} />
            </div>
        )
    }
}

export default list;