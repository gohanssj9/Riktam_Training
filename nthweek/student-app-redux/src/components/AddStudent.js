import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {newStudent} from '../actions/studentActions';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import {defaultStyle} from '../actions/types';

class AddStudent extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      age: 0,
      addStudentModalOpen: [false, false, false, false]
    };

    this.toggleAddStudent = this.toggleAddStudent.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  toggleAddStudent(key){
    const {addStudentModalOpen} = this.state;
    addStudentModalOpen[key] = !addStudentModalOpen[key];
    this.setState({addStudentModalOpen});
  }

  onSubmit(event, department_id){
    event.preventDefault();

    var studentSingle = {
      name: this.state.name,
      age: this.state.age,
      department_id: department_id
    };
    // console.log(studentSingle);
    this.props.newStudent(studentSingle);
    this.toggleAddStudent(department_id);
  }

  render(){
    const {addStudentModalOpen, name, age} = this.state;
    const {department_id} = this.props;

    return (
      <div>
        <button style = {defaultStyle} className = "btn btn-success center-block" onClick = {() => this.toggleAddStudent(department_id)}> Add Student </button>
        <Modal show = {addStudentModalOpen[department_id]}>
          <ModalHeader> 
            Add Student
            <button type="button" className="close" onClick = {() => this.toggleAddStudent(department_id)}>&times;</button>
          </ModalHeader>
          <ModalBody>
            <form>
              <label>Name</label>
              <input type = "text" onChange={this.onChange} className="form-control" value={name} placeholder='Enter Name' name='name'/>
              <label>Age</label>
              <input type = "number" onChange={this.onChange} className="form-control" value={age} placeholder='Enter Age' name='age'/>
            </form>    
          </ModalBody>
          <ModalFooter>
            <button style = {{width: "20%"}} className = "btn btn-primary center-block" onClick = {(event) => this.onSubmit(event, department_id)}> Submit </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

AddStudent.propTypes = {
  newStudent: PropTypes.func.isRequired
};

export default connect(null, {newStudent})(AddStudent);