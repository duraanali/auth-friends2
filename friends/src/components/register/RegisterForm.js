import React from 'react'
import './RegisterForm.css';
import { Link } from 'react-router-dom'
import { axiosWithAuth } from "../../utils/axiosWithAuth";

class RegisterForm extends React.Component {
    state = {
        friends: {
            name: '',
            age: '',
            email: '',
        }
    };

    handleChange = e => {
        this.setState({

            friends: {
                ...this.state.friends,
                [e.target.name]: e.target.value
            }


        });

    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends/', this.state.friends)
            .then(res => {
                console.log('logindata', res.data)
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

                    <input className="zr_un_email valid" type="name" name="name" placeholder="name" value={this.state.friends.name}
                        onChange={this.handleChange} />
                    <input className="zr_un_email valid" type="age" name="age" placeholder="age" value={this.state.friends.age}
                        onChange={this.handleChange} />

                    <input type="email" name="email" placeholder="email" value={this.state.friends.email}
                        onChange={this.handleChange} />

                    <button type="submit">Sign In</button>
                    <p>Would Like To Login? <Link to="/">Click Here</Link></p>
                </form>

                <div>

                </div>
            </div>

        );
    }
}


export default RegisterForm;
