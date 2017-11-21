import React, {
	Component
} from 'react';
import '../App.css';
import axios from 'axios';
const baseUrl = "http://www.example.com/rest/";

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
    		token: null,
			username: "",
			password: ""
		};
	}

	render() {
		return (
			<div className="login-container">
				<div className="container uk-card uk-card-default uk-card-body uk-width-1-4@m">
					<form>
						<fieldset className="uk-fieldset">
							<legend className="uk-legend">Signin</legend>
							<div className="uk-margin">
								<input className="uk-input" type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleValues.bind(this)}/>
							</div>
							<div className="uk-margin">
								<input className="uk-input" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleValues.bind(this)}/>
							</div>
							<div className="uk-margin">
								<input type="button" className="uk-button uk-button-default" onClick={this.doLogin.bind(this)} value="Signin" />
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		);
	}

	componentDidMount(){
		this.getToken();
	}

	getToken = () => {
		axios.post(`${baseUrl}user/token.json`, {})
			.then((res) => {
				this.setState({
					token: res.data.token
				})
			})
			.catch((error) => {
				console.log(error);
		});
	}

	handleValues(event){
		switch (event.target.name) {
			case 'username':
				this.setState({
					username: event.target.value
				})
			break;
			case 'password':
				this.setState({
					password: event.target.value
				})
			break;
			default:
		}
	}

	doLogin = () => {
		let headers = {
            'Content-Type': 'application/json',
            'X-CSRF-Token': this.state.token
        }
		axios.post(`${baseUrl}user/login.json`, {
			"username": this.state.username,
			"password": this.state.password
		}, headers)
		.then((res) => {
			if(res.status === 200){
				this.setState({
					userData: res.data.user
				});
				this.props.history.push(
					{
						pathname: '/user',
						match: {
							"userdata": res.data.user,
							"token": this.state.token
						}
					}
				);
			}
		})
		.catch((e) => {
			alert(e.response.data);
		});
	}
}

export default Login;
