import React,{Component} from 'react';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            username: '123',
            password: '123'
        }
    }
    handleOnSubmit() {
      let usernameInput = document.getElementById("username").value;
      let passwordInput = document.getElementById("password").value;
      var iface = {
        "account" : "user01",
        "password" : "q12dajuemhiij",
        "deviceinfo" : {
           "name" : "eisoo测试iphone",
           "ostype": 1,
           "devicetype" : "IPhone",
           "udid" : "0a-23-fd-dd-aa-dd-xc"
          },
          "vcodeinfo": {
              "uuid" : "5501ebf8-a2e3-11e7-9b66-005056af48ce",
            "vcode": "6PEd",
            "ismodify":false
          }
      }
      
      let url = "https://anyshare.eisoo.com:9999/v1/auth1?method=getconfig&account=user01&password=q12dajuemhiij";

      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4)
          if(xhr.status >= 200)
            console.log(xhr.responseText);  
      }
      xhr.send(null);
    }

     
    render() {
        return (
            <div>
                <div className='input-wrap'>
                    <input placeholder='请输入姓名' id='username'/>
                    <span>姓名</span>
                    <span className='spacier'></span>
                </div>
                <div className='input-wrap'>
                    <input placeholder='请输入密码' id='password'/>
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