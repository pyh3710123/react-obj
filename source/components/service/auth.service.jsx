
import {config } from '../../config/app.config.jsx';


export default class Auth {
  
  constructor() {
     this.aipUrl = config.API_ENDPOINT;
     this.captchaUrl = config.API_CAPTCHA;//表示属性
      this.Url=config.API_HOST;
     this.getCaptcha = this.getCaptcha.bind(this);
     this.login = this.login.bind(this);
     this.logout = this.logout.bind(this);     //用bind表示方法
     this.getUser = this.getUser.bind(this);
     this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  getCaptcha() {
      this.captchaUrl = config.API_CAPTCHA+'?t='+ Date.now()+ Math.random();
  }

   login(user, password) {
    if (user === this.getUser()) {
           localStorage.setItem('username', user);
        return true;
      }

      return false;
    }

    logout() {
      localStorage.removeItem('username');
      //localStorage.removeItem('access_token');
      //localStorage.removeItem('id_token');
      //localStorage.removeItem('expires_at');
      // navigate to the home route
     // history.replace('/home');
     window.location.href = "/";
    }

    getUser() {
      return localStorage.getItem('username');
    }

    isLoggedIn() {
      return this.getUser() !== null;
    }

 /*
  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/home');
  }

 

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  */
}