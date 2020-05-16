import React, { Component } from 'react';



class Register extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			name: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({ 
			email: event.target.value 
		})
	};

	onPasswordChange = (event) => {
		this.setState({ 
			password: event.target.value 
		})
	};

	onNameChange = (event) => {
		this.setState({
			name: event.target.value
		})
	};

	onSubmitRegister = () => {
		fetch('https://protected-brook-13741.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			} else {
				alert('Something is wrong')
			}
		})
	};

	render() {
		return(
			<article className="center shadow-5 mw5 mw6-ns br3 hidden ba b--black-10 mv6">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="text" 
				        	name="name"  
				        	id="name"
				        	onChange={this.onNameChange} 
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address" 
				        	onChange={this.onEmailChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password" 
				        	onChange={this.onPasswordChange}
				        />
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      		onClick={this.onSubmitRegister}
				      		className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      		type="submit" 
				      		value="Sign up" />
				    </div>
				  </div>
				</main>
			</article>
		)
	}
}



export default Register;