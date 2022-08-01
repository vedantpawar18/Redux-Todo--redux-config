import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { useState } from 'react';
import axios from "axios"
import { loginFailure, loginSuccess } from './Redux/AuthReducer/action';
import {useSelector, useDispatch} from "react-redux"

function App() {
  const [userEmail, setUserEmail]= useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch= useDispatch();
  const isAuth = useSelector(store => store.AuthReducer.isAuth);

  const handleLogin=() =>{
    if(userEmail && userPassword){
      const payload ={
        email:userEmail,
        password:userPassword
      }
      axios.post("https://reqres.in/api/login", payload)
      .then(r=> dispatch(loginSuccess(r.data)))
      .catch((e)=> dispatch(loginFailure()))
    }
    
  }
  return (
    <div className="App">
      <div>
        <input placeholder='email' type="email" value={userEmail} onChange={(e) =>{setUserEmail(e.target.value)}} />
        <br></br>
        <input placeholder='password' type="password" value={userPassword} onChange={(e) =>{setUserPassword(e.target.value)}} />
        <button onClick={handleLogin}>Login</button>
      </div>
      { <Todo />}
    </div>
  );
}

export default App;
