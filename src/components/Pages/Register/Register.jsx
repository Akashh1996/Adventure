import React, { Component } from 'react';
import './Register.css';

const emailRegex = RegExp(
	/^[a-zA-Z0-9.!#$%&'*+/=?^`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = (formErrors) => {
	let valid = true;

	Object.values(formErrors).forEach((value) => {
		value.length > 0 && (valid = false);
	});
	return valid;
};

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
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

		if (formValid(this.state.formErrors)) {
			console.log(`
            --SUBMITTING--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}
            `);
		} else {
			console.error('FORM INVALID - DISPLAY ERROR');
		}
	};

	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let formErrors = this.state.formErrors;

		switch (name) {
			case 'firstName':
				formErrors.firstName =
					value.length < 3 && value.length > 0
						? 'minimum 3 character required'
						: '';
				break;
			case 'secondName':
				formErrors.secondName =
					value.length < 3 && value.length > 0
						? 'minimum 3 character required'
						: '';
				break;
			case 'email':
				formErrors.email =
					emailRegex.test(value) && value.length > 0
						? ''
						: 'invalid email address';
				break;
			case 'password':
				formErrors.password =
					value.length < 6 && value.length > 0
						? 'minimum 6 character required'
						: '';
				break;
			default:
				break;
		}

		this.setState({ formErrors, [name]: value }, () => console.log(this.state));
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
								className="first-name"
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
								className="last-name"
								placeholder="Last Name"
								name="lastName"
								onChange={this.handleChange}
								noValidate
							/>
						</div>
						<div className="email">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								className="user-email"
								placeholder="Email"
								name="email"
								onChange={this.handleChange}
								noValidate
							/>
						</div>
						<div className="password">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								className="user-password"
								placeholder="Password"
								name="password"
								onChange={this.handleChange}
								noValidate
							/>
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
