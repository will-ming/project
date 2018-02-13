import * as React from "react";
class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            Username: '',
            Password: ''
        }
    }

     getJSON(operations:any) {
      return new Promise((resolve, reject)=>{
        let xhr:any;
            
        xhr = new XMLHttpRequest();
        xhr.open('GET',operations);
    
        xhr.onreadystatechange = () => {
          if ( xhr.readyState === 4)
            if ( xhr.status === 200 )
              resolve(xhr.responseText)
            else
              reject(xhr.status)
        }
    
        xhr.send(null);
      })
    }

    async ajaxWithAsync(url:string) {
      try{
        let a = await this.getJSON(url);
        console.log(a);
      }catch( e ) {
        console.log(e);
        return e;
      }
    }

    handleOnSubmit(): void {
      console.log(this.state.Username);
      let url = "https://anyshare.eisoo.com:9999/v1/auth1?method=getconfig&account=121&password=1321";
      this.ajaxWithAsync(url);
    }

    handleUsernameChange(event:any):void {
      this.setState({
        Username: event.target.value
      })
    }

    handlePasswordChange(event:any):void {
      this.setState({
        Password: event.target.value
      })
    }

    render(): any {
        return (
            <div>
                <div className='input-wrap'>
                    <input 
                          placeholder='请输入姓名' id='username' 
                          value={ this.state.Username }
                          onChange = {this.handleUsernameChange.bind(this)}
                          />
                    <span>姓名</span>
                    <span className='spacier'></span>
                </div>
                <div className='input-wrap'>
                    <input 
                          placeholder='请输入密码' id='password'
                          value = { this.state.Password }
                          onChange = {this.handlePasswordChange.bind(this)}
                    />
                    <span>密码</span>
                    <span className='spacier'></span>
                </div>
                <div className='input-wrap'>
                    <button onClick={this.handleOnSubmit.bind(this)}>登录</button>
                </div>
                <div className='input-wrap warn-tips'>
                    输入有误
                </div>
            </div>
        )
    }
}

export default Input;