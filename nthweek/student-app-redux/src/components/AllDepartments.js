import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchDepartments} from '../actions/departmentActions';

import {allStyle} from '../actions/types';

import DeleteDepartment from './DeleteDepartment';
import EditDepartment from './EditDepartment';
import ViewDepartment from './ViewDepartment';

class AllDepartments extends Component {
  componentWillMount(){
    this.props.fetchDepartments();
  }

  componentWillReceiveProps(nextProps){
    console.log("nextProps");
    console.log(nextProps);
    if(typeof nextProps.newDepartmentItem !== 'undefined') this.props.departments.push(nextProps.newDepartmentItem[0]);
  }

  render(){
    console.log(this.props.departments);
    const departments = this.props.departments.map(department => (
      <div key = {department.id} className = "well" style = {allStyle}>
        <h1> {department.title} </h1>
        <h4> {department.body} </h4>
        <ViewDepartment department_id = {department.id} />
        <EditDepartment department_id = {department.id} department_title = {department.title} department_body = {department.body} />
        <DeleteDepartment department_id = {department.id} />
      </div>
      ));

    return (
      <div>
        <h1> Departments </h1>
        {departments}
      </div>
    )
  }
}

AllDepartments.propTypes = {
  fetchDepartments: PropTypes.func.isRequired,
  departments: PropTypes.array.isRequired,
  newDepartmentItem: PropTypes.object
};

const mapStateToProps = state => ({
  departments: state.departments.departmentItems,
  newDepartmentItem: state.departments.departmentSingleItem
});

export default connect(mapStateToProps, {fetchDepartments})(AllDepartments);