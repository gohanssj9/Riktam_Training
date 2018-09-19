import {FETCH_DEPARTMENTS, NEW_DEPARTMENT, EDIT_DEPARTMENT, DELETE_DEPARTMENT} from './types';

export const fetchDepartments = () => dispatch => {
  fetch('http://localhost:8000/departments')
    .then(res => res.json())
    .then(departments => dispatch({
      type: FETCH_DEPARTMENTS,
      payload: JSON.parse(departments)
    })
  );
};

export const newDepartment = (postData) => dispatch => {
  fetch('http://localhost:8000/departments', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(departmentSingle => dispatch({
      type: NEW_DEPARTMENT,
      payload: JSON.parse(departmentSingle)
    })
  );
};

export const editDepartment = (postData, index) => dispatch => {
  const url = 'http://localhost:8000/departments/' + index;
  fetch(url, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(changedValues => dispatch({
      type: EDIT_DEPARTMENT,
      payload: JSON.parse(changedValues),
      index: JSON.parse(index)
    })
  );
}

export const deleteDepartment = (index) => dispatch => {
  const url = 'http://localhost:8000/departments/' + index;
  fetch(url, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(returnedId => dispatch({
      type: DELETE_DEPARTMENT,
      payload: JSON.parse(returnedId)
    })
  );
}

// export const viewDepartment = (departmentIndex) => dispatch => {
//   console.log("Inside viewDepartment action");
//   const url = 'http://localhost:8000/departments/' + departmentIndex + '/students';
//   fetch(url)
//     .then(res => res.json())
//     .then(students => dispatch({
//       type: VIEW_DEPARTMENT,
//       payload: JSON.parse(students)
//     })
//   );
// }