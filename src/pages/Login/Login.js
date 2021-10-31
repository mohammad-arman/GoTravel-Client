import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import { useLocation, useHistory } from 'react-router';

const Login = () => {
    const {googleSignIn, setUser} = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const handleGoogleSign = () => {
        googleSignIn()
        .then(result=>{
            history.push(location.state?.from || '/home');
            setUser(result.user)
        })
    }
    return (
        <div className="login-part py-5 text-center">
            <h2>Please Login</h2>
            <button onClick={handleGoogleSign} className="btn btn-success">Google Login</button>
        </div>
    );
};

export default Login;