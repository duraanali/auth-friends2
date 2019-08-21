import React from 'react'
import './LoginForm.css';
import { Link } from 'react-router-dom'
import axios from 'axios';

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({

            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });

    };

    login = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                console.log("login Payload", res.data.payload)
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/friendslist');
            })
            .catch(err => console.log(err.response));
    };

    render() {
        console.log(this.state.credentials)
        return (
            <div className="form-module">
                <h2>Sign In</h2>
                <form className="loginForm" onSubmit={this.login}>

                    <input className="zr_un_email valid" type="username" name="username" placeholder="username" value={this.state.credentials.username}
                        onChange={this.handleChange} />


                    <input type="password" name="password" placeholder="Password" value={this.state.credentials.password}
                        onChange={this.handleChange} />

                    <button type="submit">Sign In</button>
                    <p>Would Like To Add New Friends? <Link to="/RegisterForm">Click Here</Link></p>
                </form>

                <div>

                </div>
            </div>

        );
    }
}


export default LoginForm;
