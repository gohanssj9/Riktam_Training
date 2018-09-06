import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import * as allStyles from '../constants/constants.js';

export default class EditStudent extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      age: 0,
      msg: '',
      editStudentModalOpen: [false, false, false, false]
    };

    this.toggleEditStudent = this.toggleEditStudent.bind(this);
    this.editStudent = this.editStudent.bind(this);
    this.logChange = this.logChange.bind(this);
  }

  logChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  toggleEditStudent(key){
    const {editStudentModalOpen} = this.state;
    editStudentModalOpen[key] = !editStudentModalOpen[key];
    this.setState({editStudentModalOpen});
  }

  editStudent(key, student_key){
    var data = {
      name: this.state.name,
      age: this.state.age
    };

    const url = allStyles.all_students + '/' + student_key;

    fetch(url, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => this.setState({msg: 'Successful Student Update'}))
    .catch(error => {console.log("Edit Student Error:" + error)});

    this.toggleEditStudent(key);
  }

  render(){
    const {editStudentModalOpen, name, age} = this.state;
    const {department_id, student_id, existing_name, existing_age} = this.props;

    return(
      <div style = {allStyles.inlineStyle}>
        <button style = {allStyles.buttonStyle} className = "btn btn-warning" onClick = {() => this.toggleEditStudent(department_id)}> Edit Student </button>
        <Modal show = {editStudentModalOpen[department_id]}>
          <ModalHeader> 
            Edit Student
            <button type="button" className="close" onClick = {() => this.toggleEditStudent(department_id)}>&times;</button>
          </ModalHeader>
          <ModalBody>
            <form>
              <label>Name</label>
              <input type = "text" onChange={this.logChange} className="form-control" value={name} placeholder={existing_name} name='name'/>
              <label>Age</label>
              <input type = "number" onChange={this.logChange} className="form-control" value={age} placeholder={existing_age} name='age'/>
            </form>    
          </ModalBody>
          <ModalFooter>
            <button style = {{width: "20%"}} className = "btn btn-primary center-block" onClick = {() => this.editStudent(department_id, student_id)}> Update </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}