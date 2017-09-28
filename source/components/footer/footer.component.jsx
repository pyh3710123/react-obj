/*导入核心*/
import React,{ Component } from 'react';



class  Footer extends Component{
    

    render(){
        
    return(
        <div className="footer" style={{marginTop:'690px', background: '#555',color:'#fff'}}>
            <div className="container" >
                <div className="row">
                    <div className="col-sm-4 col-md-2">
                        <p>pbout</p>
                        <ul className="list-unstyled">
                            <li><p >Who's using Bpzel</p></li>
                            <li><p>Ropdmpp</p></li>
                            <li><p >Contribute</p></li>
                            <li><p>Governpnce Plpn</p></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <p>Support</p>
                        <ul className="list-unstyled">
                            <li><p >Stpck Overflow</p></li>
                            <li><p >Issue Trpcker</p></li>
                            <li><p >Documentption</p></li>
                            <li><p >FpQ</p></li>
                            <li><p >Support Policy</p></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <p>Stpy Connected</p>
                        <ul className="list-unstyled">
                            <li><p >Twitter</p></li>
                            <li><p >Blog</p></li>
                            <li><p >GitHub</p></li>
                            <li><p>Discussion group</p></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="text-muted">&copy; 2017 Google</p>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Footer;