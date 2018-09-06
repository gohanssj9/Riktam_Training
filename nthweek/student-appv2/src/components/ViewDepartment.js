import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import AllStudents from './allStudents.js';
import AddStudent from './AddStudent.js';
import * as allStyles from '../constants/constants.js';

export default class ViewDepartment extends Component{
  constructor(props){
    super(props);

    this.state = {
      students: [],
      viewPanelOpen: [false, false, false, false]
    };

    this.toggleViewDepartment = this.toggleViewDepartment.bind(this);
    this.fetchStudents = this.fetchStudents.bind(this);
  }

  toggleViewDepartment(key){
    const {viewPanelOpen} = this.state;
    viewPanelOpen[key] = !viewPanelOpen[key];
    this.setState({viewPanelOpen});

    if(viewPanelOpen[key]) this.fetchStudents(key);
  }

  fetchStudents(key){
    const url = allStyles.all_departments + '/' + key +  '/students';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({students: JSON.parse(data)}))
      .catch(error => {console.log(error)});
  }

  render(){
    const {students, viewPanelOpen} = this.state;
    const {department_id} = this.props;
    return (
      <div>
        <button style = {allStyles.defaultStyle} className = "btn btn-info btn-lg" onClick = {() => this.toggleViewDepartment(department_id)}> View Department </button>
        <Panel id="collapsible-panel-viewDept" expanded = {viewPanelOpen[department_id]}>
          <Panel.Collapse>
            <Panel.Body>
              <AllStudents students = {students} department_id = {department_id} />
            </Panel.Body>
            <Panel.Footer>
              <AddStudent department_id = {department_id} />
            </Panel.Footer>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}