import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class AllStudents extends Component {
  render(){
    const {students, department_id} = this.props;
    console.log(students, department_id);
    const list = students === null ? [] : students;
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
                    <button type = "button" className = "btn btn-warning"> Edit Student </button>
                    <button type = "button" className = "btn btn-danger">Delete Student </button>
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

export default connect(null, null)(AllStudents);