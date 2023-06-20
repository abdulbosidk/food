import { message } from "antd";
import { useState } from "react";
import Navbar from "../components/navbar";
import Zackaz from "./zackaz";

const Login=()=>{
    const [login,setLogin] = useState();
    const [password,setPassword] = useState();
    const Signin = ()=>{
        if(login == 'root' && password == '1234'){
            message.success('Вы вошли');
            localStorage.setItem('token',login);
            window.location.href = '/';
        }else{
            message.error('Логин или пароль неправильный!');
        }
    }
    return(
        <div>
            <Navbar/>
            <div className="container-fluid">
                <div className="row mt-5">
                     <div className="col-12 mt-5">
                        <div className="col-12 p-5 bg-white">
                        <input className="form-control" placeholder="Логин" type="text" onChange={(e)=>setLogin(e.target.value)} />
                        <br/>
                        <input className="form-control" placeholder="Пароль" type="text" onChange={(e)=>setPassword(e.target.value)} />
                        <button className="btn btn-secondary form-control mt-4" onClick={Signin}>Вход</button> 
                        </div>
                     </div>
                </div>
            </div> 
        <Zackaz/>
        </div>
    );
}
export default Login;