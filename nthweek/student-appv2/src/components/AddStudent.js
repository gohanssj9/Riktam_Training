import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import * as allStyles from '../constants/constants.js';

export default class AddStudent extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      age: 0,
      msg: '',
      addStudentModalOpen: [false, false, false, false]
    };

    this.toggleAddStudent = this.toggleAddStudent.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.logChange = this.logChange.bind(this);
  }

  logChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  toggleAddStudent(key){
    const {addStudentModalOpen} = this.state;
    addStudentModalOpen[key] = !addStudentModalOpen[key];
    this.setState({addStudentModalOpen});
  }

  addStudent(key){
    var data = {
      name: this.state.name,
      age: this.state.age,
      department_id: key
    };

    fetch(allStyles.all_students, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => this.setState({msg: 'Successful Student Add'}))
    .catch(error => {console.log("Add Student Error:" + error)});

    this.toggleAddStudent(key);
  }

  render(){
    const {addStudentModalOpen, name, age} = this.state;
    const {department_id} = this.props;

    return(
      <div>
        <button style = {allStyles.defaultStyle} className = "btn btn-success center-block" onClick = {() => this.toggleAddStudent(department_id)}> Add Student </button>
        <Modal show = {addStudentModalOpen[department_id]}>
          <ModalHeader> 
            Add Student
            <button type="button" className="close" onClick = {() => this.toggleAddStudent(department_id)}>&times;</button>
          </ModalHeader>
          <ModalBody>
            <form method="POST">
              <label>Name</label>
              <input type = "text" onChange={this.logChange} className="form-control" value={name} placeholder='Enter Name' name='name'/>
              <label>Age</label>
              <input type = "number" onChange={this.logChange} className="form-control" value={age} placeholder='Enter Age' name='age'/>
            </form>    
          </ModalBody>
          <ModalFooter>
            <button style = {{width: "20%"}} className = "btn btn-primary center-block" onClick = {() => this.addStudent(department_id)}> Submit </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}