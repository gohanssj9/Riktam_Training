import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteStudent} from '../actions/studentActions';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import {buttonStyle, inlineStyle} from '../actions/types';

class DeleteStudent extends Component {
  constructor(props){
    super(props);

    this.state = {
      deleteStudentModalOpen: [false, false, false, false]
    };

    this.toggleDeleteStudent = this.toggleDeleteStudent.bind(this);
    this.deleteStudentM = this.deleteStudentM.bind(this);
  }

  toggleDeleteStudent(key){
    const {deleteStudentModalOpen} = this.state;
    deleteStudentModalOpen[key] = !deleteStudentModalOpen[key];
    this.setState({deleteStudentModalOpen});
  }

  deleteStudentM(event, student_id){
    event.preventDefault();
    this.props.deleteStudent(student_id);
    this.toggleDeleteStudent(student_id);
  }

  render(){
    const {deleteStudentModalOpen} = this.state;
    const {student_id} = this.props;

    return (
      <div style = {inlineStyle}>
        <button style = {buttonStyle} className = "btn btn-danger" onClick = {() => this.toggleDeleteStudent(student_id)}> Delete Student </button>
        <Modal show = {deleteStudentModalOpen[student_id]}>
          <ModalHeader> 
            Delete Student
            <button type="button" className="close" onClick = {() => this.toggleDeleteStudent(student_id)}>&times;</button>
          </ModalHeader>
          <ModalBody>
            <p> Are you sure you want to delete this record? </p>
          </ModalBody>
          <ModalFooter>
            <button style = {{width: "20%"}} className = "btn btn-danger" onClick = {(event) => this.deleteStudentM(event, student_id)}> Delete </button>
            <button style = {buttonStyle} className = "btn btn-default" onClick = {() => this.toggleDeleteStudent(student_id)}> Close </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

DeleteStudent.propTypes = {
  deleteStudent: PropTypes.func.isRequired
};

export default connect(null, {deleteStudent})(DeleteStudent);