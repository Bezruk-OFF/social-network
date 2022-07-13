import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../redux/utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'login'} validate={[required]} placeholder={'Password'} />
            </div>
            <div>
                <Field component={Input} name={'password'} validate={[required]} placeholder={'Password'} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginFormRedux = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginFormRedux onSubmit={onSubmit} />
    </div>

}

export default Login;