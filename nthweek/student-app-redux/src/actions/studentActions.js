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