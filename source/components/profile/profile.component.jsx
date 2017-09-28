import React,{ Component } from 'react';

import UploadFile from '../uploadfile/uploadfile.jsx'

import 'whatwg-fetch';

class Profile extends Component{
    
    constructor(props){
        //通过props到父组件
        super(props);
        this.state={
            apiUrl:this.props.auth.aipUrl,
            _id:localStorage.getItem('userid'),
            link:this.props.auth.Url,
            phone:localStorage.getItem('phone'),
            
        };
        console.log(this.state,"6666666");
    }
    
    componentDidMount(){
         let _this=this;
        let url=`${this.props.auth.aipUrl}/profile/`+this.state._id;
        console.log(url);
        fetch(url, {method: "GET",
            headers:{'Content-Type':
                'application/x-www-form-urlencoded'}
        }).then(function(response){
            return response.json()
        }).then(function(json) {
            if(parseInt(json.code)==1)
            {
                console.log(json.user);
                _this.setState({
                    phone:json.user.phone,
                    age:json.user.age,
                    email:json.user.email,
                    username:json.user.username,
                    realname:json.user.realname,
                    gender:json.user.gender,
                    picture:_this.state.link+json.user.picture
                });
            }
            if(parseInt(json.code)==0)
            {
                alert(json.msg)
            }
        }),function(error){

        }
}
    
      render(){
          return(
              <div>
              <UploadFile auth={this.props.auth}/>
                  <form className="form-horizontal"
                        action="/users/profile-save"
                        method="POST"
                        id="change-form-post" style={{marginTop:"10px",color: '#e86c4a'}}>
                      <div className="form-group">
                          <label htmlhtmlFor="inputEmail3" className="col-sm-2 control-label" style={{marginLeft: "15px"}}>头像</label>
                          <img className="img-thumbnail" style={{width: "140px",height: "140px"}} src={this.state.picture}/>
                      </div>
                      <div className="form-group">
                          <label htmlhtmlFor="inputEmail3" className="col-sm-2 control-label">电话号码</label>
                          <div className="col-sm-4">
                              <input name="phone" className="form-control" value={this.state.phone}  readOnly />
                          </div>
                      </div>
                      <div className="form-group">
                          <label htmlhtmlFor="inputEmail3" className="col-sm-2 control-label">真实姓名</label>
                          <div className="col-sm-4">
                              <input type="text"
                                     className="form-control"
                                     id="user-real-name"
                                     placeholder="真实姓名"
                                     name="realname" value={this.state.realname}/>
                          </div>
                      </div>
                      <div className="form-group">
                          <label htmlhtmlFor="inputEmail3" className="col-sm-2 control-label">用户名</label>
                          <div className="col-sm-4">
                              <input type="text"
                                     className="form-control"
                                     id="user-name"
                                     placeholder="用户名"
                                     name="username" value={this.state.username}/>
                          </div>
                      </div>
                      <div className="form-group">
                          <label htmlhtmlFor="inputPassword3" className="col-sm-2 control-label">年龄</label>
                          <div className="col-sm-4">
                              <input type="text"    className="form-control" name="age" placeholder="年龄" value={this.state.age}/>
                          </div>
                      </div>
                      <div className="form-group">
                          <label htmlhtmlFor="inputPassword3" className="col-sm-2 control-label">性别</label>
                          <div className="col-sm-4">
                              <lable>男</lable>
                              <input type="radio" name="gender" id="sex-boy" value="1"/>
                              <lable>女</lable>
                              <input type="radio" name="gender" id="sex-girl" value="0"/>
                          </div>
                      </div>
                      <div className="form-group">
                          <label htmlhtmlFor="inputPassword3" className="col-sm-2 control-label">邮箱</label>
                          <div className="col-sm-4">
                              <input type="email"
                                     className="form-control"
                                     id="user-email"
                                     placeholder="邮箱"
                                     name="email" value={this.state.email}/>
                          </div>
                      </div>
                      <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-3">
                              <div>
                                  <button type="button" className="btn btn-primary" style={{background:"#e86c4a",border: "none"}}>提交</button>
                              </div>
                          </div>
                      </div>
                  </form>
                 </div>
          )
      }

}
export  default Profile;