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
                <img src="https://realestatebossmamas.com/wp-content/uploads/2018/02/logo-placeholder-1.png" alt=""/>
                <img src="https://static.wixstatic.com/media/2e1770_a523cbce2cf343f5a7430c56cfd33da0~mv2_d_3600_1800_s_2.png/v1/fill/w_3600,h_1800,al_c/2e1770_a523cbce2cf343f5a7430c56cfd33da0~mv2_d_3600_1800_s_2.png" alt=''/>

            </div>
            <Button type='Submit' onClick={signIn}
            >
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
