import {FETCH_STUDENTS, NEW_STUDENT, EDIT_STUDENT, DELETE_STUDENT} from '../actions/types';

const initialState = {
  studentItems: [],
  studentSingleItem: {}
}

export default function (state = initialState, action){
  switch(action.type){
    case FETCH_STUDENTS:
      return {
        ...state,
        studentItems: action.payload
      };

    case NEW_STUDENT:
      return {
        ...state,
        studentSingleItem: action.payload
      };

    case EDIT_STUDENT:
      // console.log("Inside EDIT_DEPARTMENT");
      const updatedStudentItems = state.studentItems.map(function(item){
        if(item.id === parseInt(action.index, 10)){
          item.name = action.payload.name;
          item.age = action.payload.age;
          return item;
        }
        return item;
      });
      return {
        ...state,
        studentItems: updatedStudentItems
      };

    case DELETE_STUDENT:
      const {studentItems} = state;
      const isNotId = item => item.id !== parseInt(action.payload, 10);
      const updatedList = studentItems.filter(isNotId);
      return {
        ...state, 
        studentItems: updatedList
      };

    default: 
     return state;
  }
}