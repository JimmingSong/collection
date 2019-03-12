import React, {Component} from 'react';
import {Carousel, Modal, Icon} from 'antd'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMask: false,
            firstImg: 0,
            showImgList: [],
            imgList: []
        }
    }

    componentDidMount(){
        let row = [];
        let imgList = [];
        for (let i = 1; i <= 64; i+=4) {
            let col = [];
            for (let j = i; j <= i + 3; j++) {
                if (j < 10) j = '0' + j;
                col.push(j);
                imgList.push(j);
            }
            row.push(col);
        }
        this.setState({
            showImgList: row,
            imgList
        })
    }
    imgType = {
        self: {
            start: 1,
            end: 3
        },
        rooroy: {
            start: 4,
            end: 37
        },
        head: {
            start: 47,
            end: 49
        },
        goods: {
            start: 38,
            end: 46
        },
        akzen: {
            start: 50,
            end: 64
        }
    }
    clickShowMask = (num) => {
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
                    showImgList.map((item,index) => <div className='img-box dis-flex js-around' >
                        {item.map((num,dex) => <img className='w-400p img h-225p' onClick={(e) => {this.clickShowMask(num)}} src={require(`../../image/self/作品集 2.0${num}.jpeg`)} alt="图片加载失败"/>)}
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
                                <img className='w-100per' src={require(`../../image/self/作品集 2.0${item}.jpeg`)} alt=""/>
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