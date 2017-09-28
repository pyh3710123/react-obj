/*导入核心*/
import React,{ Component } from 'react';



class Signup extends Component{
    constructor(props){
        //通过props到父组件
        super(props);
        this.state={
            captchaUrl:this.props.captchasrc
        };
        this.getCaptcha=this.getCaptcha.bind(this);//绑定
    }
    getCaptcha(){
        this.setState({
            captchaUrl:this.props.captchasrc+'?t='+Date.now()+Math.random()
        });
    }
    render(){

        return(
            <div className="modal fade"  role="dialog" id="sign-up">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">注册</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal"
                                  action="/users/sign-up"
                                  method="POST"
                                  id="sign-up-form">
                                <div className="form-group">
                                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">电话号码</label>
                                    <div className="col-sm-10">
                                        <input type="phone" className="form-control" id="inputEmail3" placeholder="phone" name="phone"/>
                                    </div>
                                </div>
                                <p className="bg-danger" id="Error"></p>
                                <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">密码</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">确认密码</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" name="password1"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">验证码</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputPassword5" placeholder="Password" name="captcha"/>
                                            <img src={this.state.captchaUrl} alt="" id="changeImg" />
                                                <p>看不清楚？<a onClick={this.getCaptcha.bind(this)}>点我换一张</a></p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="button" className="btn btn-default">注册</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export  default Signup;