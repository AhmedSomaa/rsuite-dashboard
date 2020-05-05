import React from 'react';
import {
    Col,
    Input,
    Button,
    FlexboxGrid
} from 'rsuite';
import PropTypes from 'prop-types';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true,
            username: '',
            password: ''
        }
    }

    inputHandler = (value, e) => {
        this.setState({
            [e.target.id]: value
        })
    }

    loginHandler = () => {
        let { hidden, primaryColor, ...credentials } = this.state;
        console.log('Credentials Entered', credentials)
    }

    toggleHandler = () => {
        this.setState({
            hidden: !this.state.hidden
        })
    }


    render() {
        let {
            logoSrc,
            mainHeader,
            primaryColor,
            loginButtonText,
            usernameInputText,
            passwordInputText,
            showPasswordButtonText,
            forgotPasswordButtonText,
            activateAccountButtonText
        } = this.props;
        let { hidden } = this.state;

        return (
            <FlexboxGrid fluid>
                <Col
                    md={12}
                    style={{ height: '100vh', backgroundColor: primaryColor }}
                    className='d-flex align-items-center justify-content-center'
                >
                    <img src={logoSrc} alt='logo placeholder' height='50%' width='50%' />
                </Col>
                <Col
                    md={12}
                    style={{ height: '100vh' }}
                    className='d-flex align-items-center justify-content-center'
                >
                    <Col style={{ fontFamily: 'Open Sans', width: '60%' }}>
                        <h2 color='#2a2d34' style={{ fontFamily: 'Poppins' }}>{mainHeader}</h2>
                        <div className='mt-5'>
                            <Input
                                id={usernameInputText}
                                style={{ height: '60px'}}
                                onChange={this.inputHandler}
                                placeholder={usernameInputText}
                                className='p-3'
                            />
                            <Input
                                id={passwordInputText}
                                type={hidden ? 'password' : 'text'}
                                style={{ height: '60px'}}
                                onChange={this.inputHandler}
                                placeholder={passwordInputText}
                                className='mt-3 p-3'
                            />
                            <Button
                                appearance='link'
                                style={{ color: primaryColor }}
                                onClick={this.toggleHandler}
                                className='float-right mt-3 mb-3 font-weight-bold'
                            >
                                {showPasswordButtonText}
                            </Button>
                            <Button
                                block
                                style={{ height: '60px', backgroundColor: primaryColor }}
                                onClick={this.loginHandler}
                                className='font-weight-bold text-white'
                            >
                                {loginButtonText}
                            </Button>
                            <div className='text-center d-flex flex-column'>
                                <Button
                                    appearance='link'
                                    style={{ color: primaryColor }}
                                    className='mt-5 font-weight-bold'
                                >
                                    {forgotPasswordButtonText}
                                </Button>
                                <Button
                                    appearance='link'
                                    style={{ color: primaryColor }}
                                    className='mt-2 font-weight-bold'
                                >
                                    {activateAccountButtonText}
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Col>
            </FlexboxGrid>
        );
    }

}

LoginForm.propTypes = {
    logoSrc: PropTypes.string.isRequired,
    mainHeader: PropTypes.string.isRequired,
    primaryColor: PropTypes.string.isRequired,
    loginButtonText: PropTypes.string.isRequired,
    usernameInputText: PropTypes.string.isRequired,
    passwordInputText: PropTypes.string.isRequired,
    showPasswordButtonText: PropTypes.string.isRequired,
    forgotPasswordButtonText: PropTypes.string.isRequired,
    activateAccountButtonText: PropTypes.string.isRequired
}

