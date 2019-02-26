import React, {Component} from 'react';
import {
    Form, Icon, Input, Button,message
} from 'antd';
 class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((error, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }else{
                this.props.form.resetFields(['password'])
                // console.log(Object.values(err))
                // console.log(Object.values(err).reduce((pre,curr)=>{return pre+curr.errors[0].message+''}))
                // message.error(Object.values(err).reduce((pre,curr)=>{return pre+curr.errors[0].message+''}));
                const errMsg = Object.values(error).reduce((prev, curr) => prev + curr.errors[0].message + ' ', '')
                //提示错误
                message.error(errMsg);
            }
        });
    }
     checkPassword=(rule,value,callback)=>{
         if (!value) {
             callback('必须输入密码');
         } else if (value.length < 4) {
             callback('密码长度必须超过4位');
         } else if (value.length > 11) {
             callback('密码长度必须小于11位');
         } else if (!(/^[a-zA-Z0-9_]+$/.test(value))) {
             //代表校验不通过
             callback('密码只能包含大小写英文、数字或者下划线')
         } else {
             //代表校验通过
             callback();
         }
     }

    render() {

        const { getFieldDecorator } = this.props.form;
        return(

            <Form  onSubmit={this.handleSubmit} className="login-form">

                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [
                            { required: true, message: 'Please input your username!' },
                            {min:4,message:'最少四位!'},
                            {max:4,message:'最多十二位!'},
                            { pattern: /^[a-zA-Z0-9_]+$/, message: '必须是大小写英文、数字或者下划线!' }
                        ],
                    })(
                        <Input prefix={<Icon type="user"  />} placeholder="用户名" />
                    )}

                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [
                            {validator: this.checkPassword},

                        ],
                    })(
                        <Input prefix={<Icon type="safety"  />} type="password" placeholder="密码" />
                    )}

                </Form.Item>
                <Button htmlType="submit" type="primary" block>登录</Button>

            </Form>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm
