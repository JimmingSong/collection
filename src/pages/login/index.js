import React, {Component} from 'react';
import '../../css/login.css'
import {Form,Input,Row,Col,Button} from 'antd'
const FormItem = Form.Item;

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {getFieldDecorator } = this.props.form;
        const FormLayout = {
            labelCol:{
                span: 5
            },
            wrapperCol:{
                offset: 1,
                span: 16
            }
        }
        return (
            <div className='login-box'>
                <div>
                    <Form>
                        <Row type='flex' justify='center'>
                            <Col span={10}>
                                <FormItem label='姓名' {...FormLayout}>
                                    {getFieldDecorator('name',{
                                        require:true,
                                    })(
                                        <Input autoComplete='off' />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type='flex' justify='center'>
                            <Col span={10}>
                                <FormItem label='密码' {...FormLayout}>
                                    {getFieldDecorator('pwd',{
                                        require:true,
                                    })(
                                        <Input type='password' autoComplete='off' />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type='flex' justify='center'>
                            <Col>
                                <Button htmlType='submit' type='primary'>登录</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Form.create()(App);
