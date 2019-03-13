import React, {Component} from 'react';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: ['04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37']
        }
    }

    render() {
        const {imgList} = this.state;
        return (
            <div>
                <div>
                    {imgList && imgList.map((item,index) => <img style={{width:'300px'}} key={index} src={require(`../../image/rooroy/作品集 2.0${item}.jpeg`)} alt=''/>)}
                </div>
                {/*<img src={require('../../image/rooroy/作品集 2.005.jpeg')} alt=''/>*/}
            </div>
        )
    }
}

export default index;
