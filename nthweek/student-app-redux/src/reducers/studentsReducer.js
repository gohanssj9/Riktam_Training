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

    default: 
    return state;
  }
}