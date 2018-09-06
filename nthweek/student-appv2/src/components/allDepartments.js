import React, {Component} from 'react';
import DeleteDepartment from './DeleteDepartment.js';
import EditDepartment from './EditDepartment.js';
import ViewDepartment from './ViewDepartment.js';
import * as allStyles from '../constants/constants.js';

export default class AllDepartments extends Component {
	constructor(props){
		super(props);
		this.state = {
			departments: [],
			msg: ''
		}

		this.fetchDepartments = this.fetchDepartments.bind(this);
	}

	fetchDepartments() {
    fetch(allStyles.all_departments)
		  .then(response => response.json())
		  .then(data => this.setState({departments: JSON.parse(data)}))
		  .catch(error => {console.log("Error Caught" + error)});
	}

	componentDidMount(){
		this.fetchDepartments();
	}

	render(){
		return (
			<div style = {allStyles.allStyle}>
			{this.state.departments.map(item =>
        <div className = "well" key = {item.id}>
          <h1> {item.title} </h1>
          <h5> {item.body} </h5>
          <ViewDepartment department_id = {item.id} />
          <EditDepartment department_id = {item.id} existing_title = {item.title} existing_body = {item.body} />
          <DeleteDepartment department_id = {item.id} />
        </div>
      )}
      </div>
		);
	}
}