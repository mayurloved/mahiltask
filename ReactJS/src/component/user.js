import React, { Component } from 'react';
import axios from 'axios';
const baseUrl = "http://www.example.com/rest/";
class User extends Component {
	userData = null;
	token  = null;
	constructor(props){
		super(props)
		if(props.location.match !== undefined){
			this.userData = props.location.match.userdata;
			this.token = props.location.match.token
		}else{
			props.history.push({pathname: '/'});
		}
	}
	render() {
		return (
			<div className="user-container">
				<div className="container uk-card uk-card-default uk-card-body uk-width-1-3@m">
					<table className="uk-table uk-table-striped">
						<tbody>
							<tr>
								<td>Username:</td>
								<td>{this.userData.name}</td>
							</tr>
							<tr>
								<td>Email:</td>
								<td>{this.userData.mail}</td>
							</tr>
							<tr>
								<td>Timezone:</td>
								<td>{this.userData.timezone}</td>
							</tr>
							<tr>
								<td>Created:</td>
								<td>{this.userData.created}</td>
							</tr>
							<tr>
								<td>Last Access:</td>
								<td>{this.userData.access}</td>
							</tr>
						</tbody>
					</table>
					<div className="uk-margin">
						<input type="button" className="uk-button uk-button-default" onClick={this.doLogout.bind(this)} value="Signout" />
					</div>
				</div>
			</div>
		);
	}

	doLogout = () => {
		let headers = {
            'Content-Type': 'application/json',
            'X-CSRF-Token': this.token
        }
		axios.post(`${baseUrl}user/logout.json`,{}, headers)
		.then((res) => {
			console.log(res);
		})
		.catch((e) => {
			alert(e.response.data);
		});
	}
}

export default User;
