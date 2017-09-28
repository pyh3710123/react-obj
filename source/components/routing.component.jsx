//导入部分
/*导入核心*/
import React,{ Component } from 'react';


/*导入路由配置*/
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

/*导入配置服务文件*/
import {config} from '../config/app.config.jsx';
import Auth from './service/auth.service.jsx';

/*设置路由页面*/
import Home from './home/home.component.jsx';
import About from  './about/about.component.jsx';
import Footer from './footer/footer.component.jsx';
import Nav from './nav/nav.compoent.jsx';
import Profile from './profile/profile.component.jsx';
import Signin from './signin/signin.component.jsx';
import Signup from './signup/signup.component.jsx';
import Passwordrest from './passwordrest/passwordrest.component.jsx';
import Contact from './contact/contact.component.jsx';
import Repos from './repos/repos.component.jsx';
import Users from './users/users.component.jsx';
//定义部分
const auth=new Auth();
class Routing extends Component{              //ES6 规范
     render(){
         const captchaUrl=config.API_CAPTCHA;
        return(
          <HashRouter>
          <div>
                  <Nav auth={auth}/>
                  < main >
                  <Route exact path="/" component={Home} auth={auth}/>
                  <Route  path="/about" component={About} auth={auth}/>
                  <Route  path="/contact" component={Contact} auth={auth}/>
                      <Route  path="/profile" render={(props) =><Profile auth={auth} {...props}/>}/>
                      <Route  path="/repos" component={Repos} auth={auth}/>
                      <Route  path="/users" component={Users} auth={auth}/>
                  </main>
                  <Footer/>
                  <Signin  captchasrc={captchaUrl} auth={auth}/>
                  <Signup captchasrc={captchaUrl} auth={auth}/>
                 <Passwordrest captchasrc={captchaUrl} auth={auth}/>
          </div>
          </HashRouter>
        )

     }

}



//导出部分
export  default Routing;

