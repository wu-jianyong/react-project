import React, {Component} from 'react';
import './index.less'
import logo from './images/logo.png'
import LogoinForm from '../../components/login-form/index'

export default class Login extends Component {
    render() {
        // const { getFieldDecorator } = this.props.form;
        return (

                <div className="login">
                    <header className="loginHeader">
                        <img src={logo} alt=""/>
                        <h2>React项目: 后台管理系统</h2>
                    </header>
                    <section className="loginSection">
                        <h2>用户登录</h2>
                        <LogoinForm/>
                    </section>
                </div>

        )
    }
}
