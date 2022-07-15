import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { required } from '../../redux/utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import classes from '../common/FormsControls/FormsControls.module.css'

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} validate={[required]} placeholder={'Email'} />
            </div>
            <div>
                <Field component={Input} name={'password'} validate={[required]} placeholder={'Password'} type={'password'} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me
            </div>
            {props.error && <div className={classes.formSummaryError} >
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginFormRedux = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to="/profile" />
    }

    return <div>
        <h1>Login</h1>
        <LoginFormRedux onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);