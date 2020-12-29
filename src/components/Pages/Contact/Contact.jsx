import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

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

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: null,
			lastName: null,
			email: null,
			message: null,
			formErrors: {
				firstName: '',
				lastName: '',
				email: '',
				message: ''
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
            message: ${this.state.message}
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
			case 'message':
				formErrors.message =
					value.length < 20 ? 'minimum 20 character required' : '';
				break;
			default:
				break;
		}

		this.setState({ formErrors, [name]: value });
	};

	render() {
		const { formErrors } = this.state;
		return (
			<div className="wrapper">
				<div className="form-wrapper">
					<h1>Contact Form</h1>
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
							<label for="description">Message</label>
							<textarea
								name="description"
								id="description"
								onChange={this.handleChange}
								noValidate
								placeholder="Write here your message..."
							></textarea>
						</div>
						<div className="createAccount">
							<Link
								to="/"
								className="createAccount"
								style={{ textDecoration: 'none' }}
							>
								<button type="submit">Send</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default ContactForm;
