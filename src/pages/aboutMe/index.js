import React, {Component} from 'react';
import {Icon} from 'antd'
import axios from 'axios'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:1
        }
    }

    nextPic = ()=>{
        axios.get('http://120.78.201.156/user').then((res)=>{
            console.log(res);
        })
        let newNum = this.state.num;
        newNum++;
        console.log(newNum);
        this.setState({
            num:newNum++
        })
    };
    render() {
        let {num} = this.state;
        let ImgList = [];
        for (let i = 1; i < 4; i++) {
            ImgList.push(<div key={i} className='fl-row-center'>
                <img src={require(`../../image/head/img2.00${i}.jpeg`)} alt=""/>
            </div>)
        }
        return (
            <div>
                <div className='box-hidden'>
                    {ImgList}
                </div>
                <div className='next-pic' onClick={this.nextPic}>
                    <Icon type="arrow-down" theme="outlined" />
                </div>
            </div>
        )
    }
}

export default index;