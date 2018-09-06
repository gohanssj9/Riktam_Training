import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import * as allStyles from '../constants/constants.js';

export default class EditDepartment extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      msg: '',
      editPanelOpen: [false, false, false, false] 
    };

    this.toggleEditDepartment = this.toggleEditDepartment.bind(this);
    this.editDepartment = this.editDepartment.bind(this);
    this.logChange = this.logChange.bind(this);
  }

  logChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  toggleEditDepartment(key){
    const {editPanelOpen} = this.state;
    editPanelOpen[key] = !editPanelOpen[key];
    this.setState({editPanelOpen});
  }

  editDepartment(key){
    var data = {
      title: this.state.title,
      body: this.state.body
    };

    const url = allStyles.all_departments + '/' + key;
    fetch(url, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => this.setState({msg: "Successfully Updated"}))
    .catch(error => {console.log("EditDepartment:" + error)});

    this.toggleEditDepartment(key);
  }

  render(){
    const {editPanelOpen} = this.state;
    const {department_id, existing_title, existing_body} = this.props;
    return (
      <div>
        <button style = {allStyles.buttonStyle} className = "btn btn-warning btn-lg" onClick = {() => this.toggleEditDepartment(department_id)}> Edit Department </button>
        <Panel id="collapsible-panel-editDept" expanded = {editPanelOpen[department_id]}>
          <Panel.Collapse>
            <Panel.Body>
              <form>
                <label>Title</label>
                <input type = "text" onChange={this.logChange} className="form-control" value={this.title} placeholder={existing_title} name='title'/>
                <label>Body</label>
                <input type = "text" onChange={this.logChange} className="form-control" value={this.body} placeholder={existing_body} name='body'/>
              </form>
            </Panel.Body>
            <Panel.Footer>
              <button type = "button" style = {{width: "20%"}} className = "btn btn-primary center-block" onClick = {() => this.editDepartment(department_id)}> Update </button>
            </Panel.Footer>
          </Panel.Collapse>
        </Panel>
      </div>        
    );
  }
}