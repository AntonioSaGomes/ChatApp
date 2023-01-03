import React from 'react';
import GoogleButton from 'react-google-button'
import { useAuth } from '../../hooks/useAuth';
import './Login.css';

export default function Login() {
      
    const { login } = useAuth();

    return (
        <div className='login-page'>
            <div className='login-container'>
                <GoogleButton onClick={login}/>
            </div>
        </div>
    );

}
