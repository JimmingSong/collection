import React, {Component} from 'react';
import {Icon, Divider} from 'antd'
import T from '../request'
// import axios from 'axios'
// import {connect} from 'react-redux'
// import {setName} from "../store/actions";
import mirror,{ actions, connect} from 'mirrorx'
import '../../css/aboutMe.css'

mirror.model({
    name: 'info',
    initialState: {name:'罗英'},
    reducers: {
        setInfo(state,data) {
            return Object.assign({},state,{info:data})
        },
        updateName(state,data){
            return Object.assign({},state,{name:data})
        }
    },
    effects: {
         getInfoName() {
            T.getUserInfo().then(data => {
                if (data) {
                    actions.info.setInfo(data[0]);
                }else{
                    console.log(data);
                }
            });
            // actions.app.getName()
        },
        modifyName(data){
            actions.info.updateName(data)
        }
    }
})
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
            infor: {
                name: '罗英',
                gender: '女',
                age: '25',
                province: '安徽'
            },
            contact: {
                tel: '18355176012',
                email: 'rosylying@163.com'
            },
            infoList: [
                {txt: '两年设计行业工作经验,能够独立完成移动端、网站等视觉设计类工作'},
                {txt: '在创业公司工作过经历了产品从无到有的全过程,熟悉各平台设计规范,能够设计出简单易用富有设计感的UI界面,给出有效的交互解决方案'},
                {txt: '关注设计行业发展趋势,注重产品用户体验,有良好的审美基础,能够理解目标用户的产品需求'},
                {txt: '良好的团队意识和沟通能力,能承受一定工作压力,做事认真负责'},
                {txt: '熟练掌握PS,AI,Sketch等设计相关软件,能通过AE,Principle等制作交互动效'},
            ],
            skill: ['PS', 'AI', 'AE', 'SK', 'C4D', 'AX', 'ID']
        }
    }

    componentDidMount(){
        actions.info.getInfoName()
    }

    nextPage = () => {
        this.props.history.push({
            pathname: 'part-list'
        });
    }

    render() {
        // let {infor, contact, infoList, skill} = this.state;
        let {info} = this.props.info;
        return (
            <div className='about-box'>
                <div className='ab-top'>
                    <div className='ab-top-left'>
                        <div>
                            <span>About</span>
                            <span>me</span>
                        </div>
                    </div>
                    <div className='ab-top-right'>
                        <span>2016-2018</span>
                    </div>
                </div>
                {info && <div className='ab-content'>
                    <div className='ab-info'>
                        <div className='info-box'>
                            <div className='info-con'>information</div>
                            <div className='info-con'>{info.name}</div>
                            <Divider type='vertical' className='divider'/>
                            <div>
                                <span>{info.gender} </span>
                                <span> {info.age}岁</span>
                            </div>
                            <div>{info.province}</div>
                        </div>
                        <div className='info-box'>
                            <div className='info-con'>information</div>
                            <div className='info-con'>联系方式</div>
                            <Divider type='vertical' className='divider'/>
                            <div>
                                <span>Tel:</span>
                                <span> {info.tel}</span>
                            </div>
                            <div>
                                <span>Email:</span>
                                <span> {info.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className='info-list'>
                        <ul>
                            {info.infoList.map((item, index) => (
                                <li key={index}>{item}</li>))}
                        </ul>
                    </div>
                    <div className='ab-sill'>
                        {info.skill.map((item, index) => (<span key={index}>{item}</span>))}
                    </div>
                </div>}
                <div className='ab-next-box'>
                    <Icon type="right-circle" onClick={this.nextPage} className='animated infinite bounce'/>
                </div>
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//         getName:state.DealName,
//     }
// }
//
// const mapDispatchToProps = (dispatch,ownProps)=>{
//     return {
//         setName(data){
//             dispatch(setName(data))
//         }
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(index);
export default connect(state =>(state))(index)
