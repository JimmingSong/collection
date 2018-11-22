import React, {Component} from 'react';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    goToAboutMe = () => {
        this.props.history.push({
            pathname:'/aboutMe'
        })
    }

    render() {
        return (
            <div className='dis-flex js-center'>
                <img onClick={this.goToAboutMe} className='w-80p h-80p' src={require('../../image/head/img2.001.jpeg')} alt=""/>
            </div>
        )
    }
}

export default Index;