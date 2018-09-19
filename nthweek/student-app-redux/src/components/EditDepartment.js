import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {editDepartment} from '../actions/departmentActions';
import {Panel} from 'react-bootstrap';
import {buttonStyle} from '../actions/types';

class EditDepartment extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      editDepartmentPanelOpen: [false, false, false, false]
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleEditDepartment = this.toggleEditDepartment.bind(this);
  }

  onChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(event, department_id){
    event.preventDefault();
    const departmentSingleItem = {
      title: this.state.title,
      body: this.state.body
    }
    console.log("Inside onSubmit");
    console.log(departmentSingleItem);
    this.toggleEditDepartment(department_id);
    this.props.editDepartment(departmentSingleItem, department_id);
  }

  toggleEditDepartment(key){
    const {editDepartmentPanelOpen} = this.state;
    editDepartmentPanelOpen[key] = !editDepartmentPanelOpen[key];
    this.setState({editDepartmentPanelOpen});
  }

  render(){
    const {editDepartmentPanelOpen, title, body} = this.state;
    const {department_id, department_title, department_body} = this.props;
    return (
      <div>
        <button style = {buttonStyle} className = "btn btn-warning btn-lg" onClick = {() => this.toggleEditDepartment(department_id)}> Edit Department </button>
        <Panel id="collapsible-panel-editDept" expanded = {editDepartmentPanelOpen[department_id]}>
          <Panel.Collapse>
            <Panel.Body>
              <form>
                <label>Title</label>
                <input type = "text" onChange={this.onChange} className="form-control" value={title} placeholder = {department_title} name='title'/>
                <label>Body</label>
                <input type = "text" onChange={this.onChange} className="form-control" value={body} placeholder = {department_body} name='body'/>
              </form>
            </Panel.Body>
            <Panel.Footer>
              <button type = "button" style = {{width: "20%"}} className = "btn btn-primary center-block" onClick = {(event) => this.onSubmit(event, department_id)}> Update </button>
            </Panel.Footer>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}

EditDepartment.propTypes = {
  editDepartment: PropTypes.func.isRequired
};

export default connect(null, {editDepartment})(EditDepartment);