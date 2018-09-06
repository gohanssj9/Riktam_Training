import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import * as allStyles from '../constants/constants.js';

export default class DeleteStudent extends Component{
  constructor(props){
    super(props);

    this.state = {
      msg: '',
      deleteStudentModalOpen: [false, false, false, false]
    };

    this.toggleDeleteStudent = this.toggleDeleteStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  toggleDeleteStudent(key){
    const {deleteStudentModalOpen} = this.state;
    deleteStudentModalOpen[key] = !deleteStudentModalOpen[key];
    this.setState({deleteStudentModalOpen});
  }

  deleteStudent(key, student_key){
    const url = allStyles.all_students + '/' + student_key;

    fetch(url, {
      method: 'DELETE'
    }).then(response => response.json())
    .then(data => this.setState({msg: 'Successful Student Delete'}))
    .catch(error => {console.log("Delete Student Error:" + error)});

    this.toggleDeleteStudent(key);
  }

  render(){
    const {deleteStudentModalOpen} = this.state;
    const {department_id, student_id} = this.props;

    return(
      <div style = {allStyles.inlineStyle}>
        <button style = {allStyles.buttonStyle} className = "btn btn-danger" onClick = {() => this.toggleDeleteStudent(department_id)}> Delete Student </button>
        <Modal show = {deleteStudentModalOpen[department_id]}>
          <ModalHeader> 
            Delete Student
            <button type="button" className="close" onClick = {() => this.toggleDeleteStudent(department_id)}>&times;</button>
          </ModalHeader>
          <ModalBody>
            <p> Are you sure you want to delete this record? </p>
          </ModalBody>
          <ModalFooter>
            <button style = {{width: "20%"}} className = "btn btn-danger" onClick = {() => this.deleteStudent(department_id, student_id)}> Delete </button>
            <button style = {allStyles.buttonStyle} className = "btn btn-default" onClick = {() => this.toggleDeleteStudent(department_id)}> Close </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}