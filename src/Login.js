import React from 'react'
import "./Login.css";
import { auth, provider } from "./firebase";
import { Button } from "@material-ui/core"
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer"

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        // sign in...
        auth.signInWithPopup(provider)
        .then((result) => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className='login__logo'>                
                <img src="https://i.ibb.co/LNkMt9m/Golf-Hub-02.png" alt=''/>

            </div>
            <Button type='Submit' onClick={signIn}
            >
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
