import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';
import {defaultStyle} from '../actions/types';
import {fetchStudents} from '../actions/studentActions';

import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';
import EditStudent from './EditStudent';

class ViewDepartment extends Component {
  constructor(props){
    super(props);

    this.state = {
      viewDepartmentPanelOpen: [false, false, false, false]
    };

    this.toggleViewDepartment = this.toggleViewDepartment.bind(this);
    this.viewDepartmentM = this.viewDepartmentM.bind(this);
  }


  componentWillReceiveProps(nextProps){
    console.log("Inside Student NextProps");
    console.log(nextProps);
    if(typeof nextProps.newStudentItem !== 'undefined'){
      if(nextProps.newStudentItem.length > 0)
        if(nextProps.newStudentItem[0].department_id === nextProps.department_id){
          console.log("Inside If Condition of NextProps Student");
          this.props.students.push(nextProps.newStudentItem[0]);
        }
    }
  }

  toggleViewDepartment(key){
    console.log("toggleViewDepartment Key: " + key);
    const {viewDepartmentPanelOpen} = this.state;
    viewDepartmentPanelOpen[key] = !viewDepartmentPanelOpen[key];
    this.setState({viewDepartmentPanelOpen});

    if(viewDepartmentPanelOpen[key]) this.viewDepartmentM(key);
  }

  viewDepartmentM(department_id){
    this.props.fetchStudents(department_id);
  }

  render(){
    const {viewDepartmentPanelOpen} = this.state;
    const {department_id} = this.props;

    const students = this.props.students.map(student => (
      <tr key = {student.id}>
        <td> {student.id} </td>
        <td> {student.name} </td>
        <td> {student.age} </td>
        <td>
          <div>
            <EditStudent student_id = {student.id} student_name = {student.name} student_age = {student.age} />
            <DeleteStudent student_id = {student.id} />
          </div>
        </td>
      </tr>
      ));

    return(
      <div>
        <button style = {defaultStyle} className = "btn btn-info btn-lg" onClick = {() => this.toggleViewDepartment(department_id)}> View Department </button>
        <Panel id="collapsible-panel-viewDept" expanded = {viewDepartmentPanelOpen[department_id]}>
          <Panel.Collapse>
            <Panel.Body>
              <div>
                <table className = "table table-hover">
                  <tbody>
                    <tr>
                      <th> ID </th>
                      <th> Name </th>
                      <th> Age </th>
                      <th> Actions </th>
                    </tr>
                    {students}
                  </tbody>
                </table>
              </div>
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

ViewDepartment.propTypes = {
  students: PropTypes.array.isRequired,
  newStudentItem: PropTypes.object
};

const mapStateToProps = state => ({
  students: state.students.studentItems,
  newStudentItem: state.students.studentSingleItem
});

export default connect(mapStateToProps, {fetchStudents})(ViewDepartment);