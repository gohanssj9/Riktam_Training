import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {editStudent} from '../actions/studentActions';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import {inlineStyle, buttonStyle} from '../actions/types';

class EditStudent extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      age: 0,
      editStudentModalOpen: [false, false, false, false]
    };

    this.toggleEditStudent = this.toggleEditStudent.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  toggleEditStudent(key){
    const {editStudentModalOpen} = this.state;
    editStudentModalOpen[key] = !editStudentModalOpen[key];
    this.setState({editStudentModalOpen});
  }

  onSubmit(event, student_id){
    event.preventDefault();

    var studentSingle = {
      name: this.state.name,
      age: this.state.age
    };
    // console.log(studentSingle);
    this.props.editStudent(studentSingle, student_id);
    this.toggleEditStudent(student_id);
  }

  render(){
    const {editStudentModalOpen, name, age} = this.state;
    const {student_id, student_name, student_age} = this.props;

    return (
      <div style = {inlineStyle}>
        <button style = {buttonStyle} className = "btn btn-warning" onClick = {() => this.toggleEditStudent(student_id)}> Edit Student </button>
        <Modal show = {editStudentModalOpen[student_id]}>
          <ModalHeader> 
            Edit Student
            <button type="button" className="close" onClick = {() => this.toggleEditStudent(student_id)}>&times;</button>
          </ModalHeader>
          <ModalBody>
            <form>
              <label>Name</label>
              <input type = "text" onChange={this.onChange} className="form-control" value={name} placeholder={student_name} name='name'/>
              <label>Age</label>
              <input type = "number" onChange={this.onChange} className="form-control" value={age} placeholder={student_age} name='age'/>
            </form>    
          </ModalBody>
          <ModalFooter>
            <button style = {{width: "20%"}} className = "btn btn-primary center-block" onClick = {(event) => this.onSubmit(event, student_id)}> Update </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

EditStudent.propTypes = {
  editStudent: PropTypes.func.isRequired
};

export default connect(null, {editStudent})(EditStudent);