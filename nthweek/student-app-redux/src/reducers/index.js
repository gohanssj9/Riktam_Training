import {combineReducers} from 'redux';
import departmentsReducer from './departmentsReducer';
import studentsReducer from './studentsReducer';

export default combineReducers({
  departments: departmentsReducer,
  students: studentsReducer
});