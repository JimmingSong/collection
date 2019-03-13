import React, {Component} from 'react';
import {Carousel, Modal, Icon} from 'antd'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMask: false,
            firstImg: 0,
            showImgList: [
                ["01","02","03","04"],
                ["05","06","07","08"],
                ["09",10,11,12],
            ],
            imgList: ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44, 45,46,47,48, 49,50,51,52, 53,54,55,56,57,58,59,60,61,62,63,64]
        }
    }
    componentDidMount(){
        let array = [
            [13,14,15,16],
            [17,18,19,20],
            [21,22,23,24],
            [25,26,27,28],
            [29,30,31,32],
            [33,34,35,36],
            [37,38,39,40],
            [41,42,43,44],
            [45,46,47,48],
            [49,50,51,52],
            [53,54,55,56],
            [57,58,59,60],
            [61,62,63,64]
        ];
        setTimeout(() => {
            let result = this.state.showImgList.concat(array);
            this.setState({
                showImgList: result,
            });
        },1000)
    }
    clickShowMask = (num) => {
        console.log(num);
        this.setState({
            showMask: true,
            firstImg: num - 1
        })
    }

    handleCancel = () => {
        this.setState({
            showMask: false
        })
    }

    handlePrev = ()=>{
        console.log(this.refs);
        this.refs.picture.prev(); //ref = img
    }

    handleNext = () => {
        this.refs.picture.next(); //ref = img
    }



    render() {
        let {showMask, showImgList, firstImg, imgList} = this.state;
        return (
            <div className='dis-flex js-around index-box'>
                {
                    showImgList.map((item,index) => <div key={index} className='img-box dis-flex js-around' >
                        {item.map((num,dex) => <img key={dex} className='w-400p img h-225p' onClick={(e) => {this.clickShowMask(num)}} src={require(`../../image/self/作品集 3.0${num}.jpeg`)} alt="图片加载失败"/>)}
                    </div>)
                }
                {showMask && <Modal
                    title="作品展示"
                    visible={showMask}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                    width={200}
                    style={{ top: 30,width:300 }}
                    className='mask-box'>
                    <div className='dis-flex js-ai-center'>
                        <Icon type="left-circle" onClick={this.handlePrev} style={{fontSize: '50px'}} />
                        <Carousel className='carousel' dots={false} easing ref='picture' initialSlide={firstImg}>
                            {imgList.map((item,index) => <div key={index}>
                                <img className='w-100per' src={require(`../../image/self/作品集 3.0${item}.jpeg`)} alt=""/>
                            </div>)}
                        </Carousel>
                        <Icon type="right-circle" onClick={this.handleNext} style={{fontSize: '50px'}} />
                    </div>
                </Modal>}
            </div>
        )
    }
}

export default Index;
