import React from "react";
import {
    LoginForm
} from "../components";
import {
    primary
} from '../assets/colors';
import logoUrl from '../assets/images/logo.svg';

export const LoginPage = () => {
    return (
        <LoginForm
            logoSrc={logoUrl}
            mainHeader='Login'
            primaryColor={primary}
            loginButtonText='Login'
            usernameInputText='username'
            passwordInputText='password'
            showPasswordButtonText='Show Password'
            forgotPasswordButtonText='Forgot Password ?'
            activateAccountButtonText='Activate Account ?'
        />
    )
}