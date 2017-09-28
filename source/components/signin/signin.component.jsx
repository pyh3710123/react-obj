/*导入核心*/
import React,{ Component } from 'react';
import 'whatwg-fetch';
import 'validator';


class Signin extends Component{
   
    constructor(props){
        //通过props到父组件
         super(props);
         this.state={
            captchaUrl:this.props.auth.captchaUrl,
             apiUrl:this.props.auth.aipUrl
         };
        console.log(this.state,"+++++++++++");
        this.Signin=this.Signin.bind(this);
        this._handerInputChange=this._handerInputChange.bind(this)
        this.getCaptcha=this.getCaptcha.bind(this);//绑定
    }
    _handerInputChange(e){
        const target=e.target;
        const value=target.type==="checkbox"?target.checked:target.value;
        const name=target.name;
        this.setState({
            [name]:value
        });
    }
    
    Signin(){
        let{phone,password,captcha}=this.state;
        let data=`phone=${phone}&password=${password}&captcha=${captcha}`;
        let url=`${this.props.auth.aipUrl}/sign-in`;
        console.log(data,url);
        fetch(url, {method: "POST",
            headers:{'Content-Type':
                'application/x-www-form-urlencoded'},
            body: data
        }).then(function(response){
            return response.json()
        }).then(function(json) {
            if(parseInt(json.code)==1)
            {
                console.log(json.user)
                let phone = json.user.phone;
                let pwd = json.user.password;
                let uid = json.user._id;
                localStorage.setItem('username',phone);
                localStorage.setItem('userid',uid);
                window.location.href = "/";
            }
            if(parseInt(json.code)==0)
            {
                alert(json.msg)
            }
        }),function(error){

        }
    }

     getCaptcha(){
         this.setState({
             captchaUrl:this.props.auth.captchaUrl+'?t='+Date.now()+Math.random()
         });
     }

    render(){

return(
    <div className="modal fade"  role="dialog" id="sign-in">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">登陆</h4>
                </div>
                <div className="modal-body">
                    <form className="form-horizontal"
                          action=""
                          method="POST"
                          id="sign-in-form"
                          onSubmit={this.Signin}
                    >
                        <div className="form-group">
                            <label  className="col-sm-2 control-label">电话号码</label>
                            <div className="col-sm-10">
                                <input type="phone"
                                       className="form-control"
                                       id="sign-in-phone"
                                       placeholder="phone"
                                       name="phone"
                                       onBlur={this._handerInputChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label  className="col-sm-2 control-label">密码</label>
                            <div className="col-sm-10">
                                <input type="password"
                                       className="form-control"
                                       id="sign-in-pswd"
                                       placeholder="Password"
                                       name="password"
                                       onChange={this._handerInputChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">验证码</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       className="form-control"
                                       id="sign-in-captcha"
                                       name="captcha"
                                       onChange={this._handerInputChange}
                                       />
                                <img src={this.state.captchaUrl} onClick={this.getCaptcha.bind(this)} alt=""/>
                                <p>看不清楚？<a onClick={this.getCaptcha.bind(this)}>点我换一张</a></p>
                                <a data-toggle="modal" data-target="#sign-up" data-dismiss="modal">注册账号</a>
                                <span>||</span>
                                <a data-toggle="modal" data-target="#change-sign" data-dismiss="modal">忘记密码？</a>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="button" className="btn btn-default" onClick={this.Signin} data-dismiss="modal">登录</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
)

    }
}

export  default Signin;