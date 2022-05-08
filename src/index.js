import React from "react";
import ReactDOM from "react-dom";

class Login extends React.Component{  //繼承
    render(){ //返回內容
        return <p>Login Component</p>
    }
}

ReactDOM.render(<Login/>, document.getElementById("root")) // 引用上方定義的Login組建