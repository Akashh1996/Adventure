import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Register/Register.css';

const emailRegex = RegExp(
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
	let valid = true;

	Object.values(formErrors).forEach((value) => {
		value.length > 0 && (valid = false);
	});

	Object.values(rest).forEach((value) => {
		value === null && (valid = false);
	});

	return valid;
};

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			password: null,
			formErrors: {
				email: '',
				password: ''
			}
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		if (formValid(this.state)) {
			console.log(`
            --SUBMITTING--
            Email: ${this.state.email}
            Password: ${this.state.password}
            `);
		} else {
			alert('You must fill all the fields correctly.');
		}
	};

	handleChange = (event) => {
		event.preventDefault();
		const { option, value } = event.target;
		let formErrors = this.state.formErrors;

		switch (option) {
			case 'email':
				formErrors.email = emailRegex.test(value)
					? ''
					: 'invalid email address';
				break;
			case 'password':
				formErrors.password =
					value.length < 8 ? 'minimum 8 character required' : '';
				break;
			default:
				break;
		}

		this.setState({ formErrors, [option]: value });
	};

	render() {
		const { formErrors } = this.state;
		return (
			<div className="wrapper">
				<div className="form-wrapper">
					<h1>Welcome Back!</h1>
					<form onSubmit={this.handleSubmit} noValidate>
						<div className="email">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								className={formErrors.email.length > 0 ? 'error' : null}
								placeholder="Email"
								name="email"
								onChange={this.handleChange}
								noValidate
							/>
							{formErrors.email.length > 0 && (
								<span className="errorMessage">{formErrors.email}</span>
							)}
						</div>
						<div className="password">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								className={formErrors.password.length > 0 ? 'error' : null}
								placeholder="Password"
								name="password"
								onChange={this.handleChange}
								noValidate
							/>
							{formErrors.password.length > 0 && (
								<span className="errorMessage">{formErrors.password}</span>
							)}
						</div>
						<div className="createAccount">
							<Link
								to="/Home"
								className="createAccount"
								style={{ textDecoration: 'none' }}
							>
								<button type="submit">Log In</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default LoginForm;
