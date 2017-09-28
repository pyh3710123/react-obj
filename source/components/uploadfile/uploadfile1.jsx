import React,{Component} from 'react';
import 'whatwg-fetch';


class Uploadfile extends Component{
       constructor(props){
           super(props);
           this.state= {
               phone: localStorage.getItem('phone'),
           }
           this.handleGetFile=this.handleGetFile().bind(this);
           this.submitFile=this.submitFile().bind(this);
       }

    handleGetFile(e){

        this.files=e.target.files;

    }
    submitFile(){

    }
    render(){
        
        return(

            <div className="">
                <form className="uploadForm"
                      encType="multipart/form-data">
                    <div className="form-group fileUpload">
                        <label className="btn btn-primary">
                            <input type="file"
                                   id="fileUpload"
                                   name="fileUpload"
                                   onChange={this.handleGetFile}
                            />
                        </label>
                    </div>
                    <button type="button"
                            onClick={this.submitFile}
                            className="btn btn-primary"
                    >上传</button>
                </form>
            </div>
        )
    }
}
export  default Uploadfile;
