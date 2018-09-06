import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import * as allStyles from '../constants/constants.js';

export default class DeleteDepartment extends Component {
  constructor(props){
    super(props);

    this.state =  {
      deletePanelOpen: [false, false, false, false],
      msg: ''
    }

    this.deleteDepartment = this.deleteDepartment.bind(this);
    this.toggleDeleteDepartment = this.toggleDeleteDepartment.bind(this);
  }

  toggleDeleteDepartment(key){
    const {deletePanelOpen} = this.state;
    deletePanelOpen[key] = !deletePanelOpen[key];
    this.setState({deletePanelOpen});
  }

  deleteDepartment(key){
    const url = allStyles.all_departments + '/' + key;
    fetch(url, {
      method:'DELETE'
    }).then(response => response.json())
    .then(data => this.setState({msg: 'Successfully Deleted'}))
    .catch(error => {console.log("Delete Department Error:" + error)});

    this.toggleDeleteDepartment(key);
  }

  render(){
    const {deletePanelOpen} = this.state;
    const {department_id} = this.props;
    return (
      <div>
        <button type = "button" style = {allStyles.buttonStyle} className = "btn btn-danger btn-lg" onClick = {() => this.toggleDeleteDepartment(department_id)}> Delete Department</button>
        <Panel id="collapsible-panel-deleteDept" expanded = {deletePanelOpen[department_id]}>
          <Panel.Collapse>
            <Panel.Body>
              Are you sure you want to delete this Department?
            </Panel.Body>
            <Panel.Footer>
              <button style = {allStyles.defaultStyle} className = "btn btn-danger" onClick = {() => this.deleteDepartment(department_id)}> Delete </button>
              <button style = {allStyles.defaultStyle} className = "btn btn-default" onClick = {() => this.toggleDeleteDepartment(department_id)}> Close </button>
            </Panel.Footer>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}