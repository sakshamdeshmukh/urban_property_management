import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './common.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from './assets/icons/logo black line.png'
function Login() {
    const [Credentials,setCredentials]=useState({email:"",Password:""});
    
    const onTextChange=(args)=>
    {
        var copyofCredentials={...Credentials};
        copyofCredentials[args.target.name]=args.target.value;
        setCredentials(copyofCredentials);
    }

    const history=useHistory();
    const SignIn=()=>{
        var helper=new XMLHttpRequest();
        helper.onreadystatechange=()=>{

            if(helper.readyState==4 && helper.status==200)
            {
                var responsereceived=JSON.parse(helper.responseText);
                responsereceived.map((checkCredentials)=>{
                    console.log(checkCredentials)
                    if(checkCredentials.email==Credentials.email && checkCredentials.password==Credentials.Password)
                    {
                        window.sessionStorage.setItem("isLoggedIn","true");
                        window.sessionStorage.setItem("user_id",checkCredentials.id);
                        history.push("/Quotes");
                    }
                    else
                    {
                        console.log("Wrong credentials");
                    }
                })
                
            }

        }
        helper.open("GET","http://127.0.0.1:9999/Login");
        helper.setRequestHeader("Content-Type","application/json");
        helper.send();
    }

    return (
        
        <div className='background'>
            
            <center>
        <div className='registerDetails'>
        
        <center>
            <table className='table-responsive'>
                <center>
                    <div>
                    <img src={Logo} alt='' className='logo' />
                    </div>
                <tr>
                    <td>
                        Username :
                    </td>
                    <td>
                        <input className='inputBox' type='text' onChange={onTextChange} value={Credentials.email} name='email'></input>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        Password :
                    </td>
                    <td>
                    <input className='inputBox' type='password' onChange={onTextChange} value={Credentials.Password} name='Password'></input>
                  </td>
                </tr><br/>
                <tr>
                    <td colSpan={2}>
                        <button className='loginButton' onClick={SignIn}>
                            Login
                        </button><br/><br/>
                        Dont Have Account <Link to={"/Register"}>Register Here</Link>
                    </td>
                </tr>
                </center>
            </table>
            </center>
            </div>
            </center>
            </div>
            );
}

export default Login;