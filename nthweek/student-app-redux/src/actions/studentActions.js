import {FETCH_STUDENTS, NEW_STUDENT, EDIT_STUDENT, DELETE_STUDENT} from './types';

export const fetchStudents = (department_id) => dispatch => {
  const url = 'http://localhost:8000/departments/' + department_id + '/students';
  fetch(url)
    .then(res => res.json())
    .then(students => dispatch({
      type: FETCH_STUDENTS,
      payload: JSON.parse(students)
    })
  );
};

export const newStudent = (postData) => dispatch => {
  fetch('http://localhost:8000/students',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(studentSingle => dispatch({
      type: NEW_STUDENT,
      payload: JSON.parse(studentSingle)
    })
  );
};

export const editStudent = (postData, student_id) => dispatch => {
  const url = 'http://localhost:8000/students/' + student_id;
  fetch(url, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(changedStudentValues => dispatch({
      type: EDIT_STUDENT,
      payload: JSON.parse(changedStudentValues),
      index: JSON.parse(student_id)
    })
  );
}

export const deleteStudent = (student_id) => dispatch => {
  const url = 'http://localhost:8000/students/' + student_id;
  fetch(url, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(returnedId => dispatch({
      type: DELETE_STUDENT,
      payload: JSON.parse(returnedId)
    })
  );
};