import React,{Component} from 'react'
import {Icon,Divider} from 'antd'
import leftImg from '../../image/head/img2.003.jpeg'
import '../../css/partList.css'

class PartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partData: [
                {title:'Part 01',project:'罗欧罗意项目',list:[{txt:'ROOROY APP'},{txt:'ROOROY 企业站'},{txt:'ROOROY VIS'},{txt:'ROOROY H5'}]},
                {title:'Part 02',project:'善诊项目',list:[{txt:'善诊 APP'},{txt:'善诊 企业站'},{txt:'善诊 H5'}]},
                {title:'Part 03',project:'其他',list:[{txt:'AKZEN APP'},{txt:'AKZEN 企业站'},{txt:'海报'},{txt:'产品包装'},{txt:'图标等'}]},
            ]
        }
    };

    render() {
        const {partData} = this.state;
        return (
            <div className='part-list-box dis-flex w-80p box-hidden mg-center h-100vh'>
                <div>
                    <div>
                        <h1>CONTENT</h1>
                    </div>
                    <div>
                        {partData && partData.length && partData.map((item,index)=><div key={index} className='part-box'>
                            <h3><span>{item.title}</span><Icon type="plus" /></h3>
                            <Divider className='part-small-divider'/>
                            <Divider className='part-divider h-5px' />
                            <h2 className='part-project'>{item.project}</h2>
                            <div>{item.list.map((det,dex)=><div key={dex} className='pd-5-0px'><span>{dex+1}. {det.txt}</span></div>)}</div>
                        </div>)}
                    </div>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default PartList;