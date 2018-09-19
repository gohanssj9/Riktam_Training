import {FETCH_DEPARTMENTS, NEW_DEPARTMENT, EDIT_DEPARTMENT, DELETE_DEPARTMENT} from '../actions/types';

const initialState = {
  departmentItems: [],
  departmentSingleItem: {}
}

export default function (state = initialState, action){
  switch(action.type){
    case FETCH_DEPARTMENTS:
      return {
        ...state,
        departmentItems: action.payload
      };
      
    case NEW_DEPARTMENT:
      return {
        ...state,
        departmentSingleItem: action.payload
      };

    case EDIT_DEPARTMENT:
      console.log("Inside EDIT_DEPARTMENT");
      const updatedDepartmentItems = state.departmentItems.map(function(item){
        if(item.id === parseInt(action.index, 10)){
          item.title = action.payload.title;
          item.body = action.payload.body;
          return item;
        }
        return item;
      });
      return {
        ...state,
        departmentItems: updatedDepartmentItems
      };

    case DELETE_DEPARTMENT:
      const {departmentItems} = state;
      const isNotId = item => item.id !== parseInt(action.payload, 10);
      const updatedList = departmentItems.filter(isNotId);
      return {
        ...state, 
        departmentItems: updatedList
      };

    default: 
      return state;
  }
}