import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteDepartment} from '../actions/departmentActions';
import {Panel} from 'react-bootstrap';
import {buttonStyle, defaultStyle} from '../actions/types';

class DeleteDepartment extends Component {
  constructor(props){
    super(props);

    this.state = {
      deletePanelOpen: [false, false, false, false]
    }

    this.toggleDeleteDepartment = this.toggleDeleteDepartment.bind(this);
    this.deleteDepartmentM = this.deleteDepartmentM.bind(this);
  }

  toggleDeleteDepartment(key){
    const {deletePanelOpen} = this.state;
    deletePanelOpen[key] = !deletePanelOpen[key];
    this.setState({deletePanelOpen});
  }

  deleteDepartmentM(event, department_id){
    event.preventDefault();
    this.props.deleteDepartment(department_id);
    this.toggleDeleteDepartment(department_id);
  }

  render(){
    const {deletePanelOpen} = this.state;
    const {department_id} = this.props;

    return (
      <div>
        <button type = "button" style = {buttonStyle} className = "btn btn-danger btn-lg" onClick = {() => this.toggleDeleteDepartment(department_id)}> Delete Department</button>
        <Panel id="collapsible-panel-deleteDept" expanded = {deletePanelOpen[department_id]}>
          <Panel.Collapse>
            <Panel.Body>
              Are you sure you want to delete this Department?
            </Panel.Body>
            <Panel.Footer>
              <button style = {defaultStyle} className = "btn btn-danger" onClick = {(event) => this.deleteDepartmentM(event, department_id)}> Delete </button>
              <button style = {defaultStyle} className = "btn btn-default" onClick = {() => this.toggleDeleteDepartment(department_id)}> Close </button>
            </Panel.Footer>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}

DeleteDepartment.propTypes = {
  deleteDepartment: PropTypes.func.isRequired
};

export default connect(null, {deleteDepartment})(DeleteDepartment);