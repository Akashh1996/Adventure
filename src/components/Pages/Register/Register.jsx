import React, { Component } from 'react';
import './Register.css';

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

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			formErrors: {
				firstName: '',
				lastName: '',
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
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}
            `);
		} else {
			alert('You must fill all the fields correctly.');
		}
	};

	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let formErrors = this.state.formErrors;

		switch (name) {
			case 'firstName':
				formErrors.firstName =
					value.length < 3 ? 'minimum 3 character required' : '';
				break;
			case 'lastName':
				formErrors.lastName =
					value.length < 3 ? 'minimum 3 character required' : '';
				break;
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
	};

	render() {
		const { formErrors } = this.state;
		return (
			<div className="wrapper">
				<div className="form-wrapper">
					<h1>Create Account</h1>
					<form onSubmit={this.handleSubmit} noValidate>
						<div className="firstName">
							<label htmlFor="firstName">First Name</label>
							<input
								type="text"
								className={formErrors.firstName.length > 0 ? 'error' : null}
								placeholder="First Name"
								name="firstName"
								onChange={this.handleChange}
								noValidate
							/>
							{formErrors.firstName.length > 0 && (
								<span className="errorMessage">{formErrors.firstName}</span>
							)}
						</div>
						<div className="lastName">
							<label htmlFor="lastName">Last Name</label>
							<input
								type="text"
								className={formErrors.lastName.length > 0 ? 'error' : null}
								placeholder="Last Name"
								name="lastName"
								onChange={this.handleChange}
								noValidate
							/>
							{formErrors.lastName.length > 0 && (
								<span className="errorMessage">{formErrors.lastName}</span>
							)}
						</div>
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
							<button type="submit">Create Account</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Form;
