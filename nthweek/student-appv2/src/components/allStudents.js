import React, {Component} from 'react';
import EditStudent from './EditStudent.js';
import DeleteStudent from './DeleteStudent.js';
import * as allStyles from '../constants/constants.js';

export default class AllStudents extends Component {
  constructor(props){
    super(props);

    this.state = {
      msg: ''
    };
  }

  render(){
    const {students, department_id} = this.props;
    const list = students == null ? [] : students;  
    return (
      <div>
        <table className = "table table-hover">
          <tbody>
            <tr>
              <th> ID </th>
              <th> Name </th>
              <th> Age </th>
              <th> Actions </th>
            </tr>

            {list.map(item => 
              <tr key = {item.id}>
                <td> {item.id} </td>
                <td> {item.name} </td>
                <td> {item.age} </td>
                <td>
                  <div>
                    <EditStudent department_id = {department_id} student_id = {item.id} existing_name = {item.name} existing_age = {item.age} />
                    <DeleteStudent department_id = {department_id} student_id = {item.id}  />
                  </div>
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>      
    );
  }
}