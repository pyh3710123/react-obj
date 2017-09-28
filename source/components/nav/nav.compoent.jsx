/*导入核心*/
import React,{ Component } from 'react';

import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

class Nav extends Component{

    constructor(props){
        super(props);
        this._logOut = this._logOut.bind(this);
        this.state = {
            phone: localStorage.getItem('username')
        };
    }
    _logOut(){
        this.props.auth.logout();
    }

    render(){
        const {isLoggedIn}= this.props.auth;
        const isLogined = isLoggedIn();
        const signinAngSignUpElement = (
            <ul className="nav navbar-nav navbar-right">
                <li><a  data-toggle="modal" data-target="#sign-in" className="smoothScroll">登陆</a></li>
                <li><a  data-toggle="modal" data-target="#sign-up" className="smoothScroll">注册</a></li>
            </ul>
        );
        const signOutElement = (
            <ul className="nav navbar-nav navbar-right" >
                <li> <a  className="dropdown-toggle glyphicon glyphicon-user"
                         data-toggle="dropdown"> 你好 {localStorage.getItem('username')}
                    <span className="caret"></span></a>
                    <ul className="dropdown-menu" role="menu">
                        <li> <a data-toggle="modal" data-target="#pwdrestModal"
                                className="active">重置密码</a></li>
                        <li> <Link to="/profile" className="active">个人中心</Link></li>
                        <li> <Link to="/my-blog" className="active">我的博客</Link></li>
                        <li id="signout"> <a  onClick={this._logOut} className="active">
                            <span className="glyphicon glyphicon-log-out">&nbsp;</span>退出
                        </a></li>
                    </ul>
                </li>
            </ul>
        );
        return(
         <nav className="navbar navbar-inverse navbar-fixed-top">
             <div className="container">
                 <div className="navbar-header">
                     <a className="navbar-brand">Project name</a>
                 </div>
                 <div id="navbar" className="collapse navbar-collapse">
                     <ul className="nav navbar-nav">
                         <li className="active"><Link to="/">Home</Link></li>
                         <li><Link to="/about">About</Link></li>
                         <li><Link to="/contact">Contact</Link></li>
                     </ul>
                     {!isLogined ? signinAngSignUpElement:signOutElement}
                 </div>
             </div>
         </nav>
        )
    }
}
export  default Nav;