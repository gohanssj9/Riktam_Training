import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import * as allStyles from '../constants/constants.js';

export default class AddDepartment extends Component{ 
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      addDepartmentPanelOpen: false,
      msg: ''
    };

    this.addDepartment = this.addDepartment.bind(this);
    this.logChange = this.logChange.bind(this);
    this.toggleAddDepartment = this.toggleAddDepartment.bind(this);
  }

  addDepartment(){
    var data = {
      title: this.state.title,
      body: this.state.body
    };

    fetch(allStyles.all_departments,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => this.setState({msg: "Successfully added record."}))
    .catch(error => {console.log("Add Department: " + error)})

    this.toggleAddDepartment();
  }

  logChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  toggleAddDepartment(){
    this.setState({addDepartmentPanelOpen: !this.state.addDepartmentPanelOpen});
  }

  render(){
    const {title, body, addDepartmentPanelOpen} = this.state;
    return(
      <div>
      <button type = "button" style = {{width: "30%"}} className = "btn btn-success btn-lg center-block" onClick = {() => this.toggleAddDepartment()}> Add Department </button>
        <Panel id="collapsible-panel-addDept" expanded = {addDepartmentPanelOpen}>
          <Panel.Collapse>
            <Panel.Body>
              <form>
                <label>Title</label>
                <input onChange={this.logChange} className="form-control" value={title} placeholder='Enter Title' name='title'/>
                <label>Body</label>
                <input onChange={this.logChange} className="form-control" value={body} placeholder='Enter Body' name='body'/>
                <div className="submit-section">
                    <button className="btn btn-primary center-block" style = {{ width: "30%" }} onClick = {() => this.addDepartment()}> Submit</button>
                </div>
              </form>
              </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}