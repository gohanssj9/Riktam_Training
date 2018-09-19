import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {newDepartment} from '../actions/departmentActions';
import {Panel} from 'react-bootstrap';

class AddDepartment extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      addDepartmentPanelOpen: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleAddDepartment = this.toggleAddDepartment.bind(this);
  }

  onChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    const departmentSingleItem = {
      title: this.state.title,
      body: this.state.body
    }

    // console.log(departmentSingle);
    this.toggleAddDepartment();
    this.props.newDepartment(departmentSingleItem);
  }

  toggleAddDepartment(){
    this.setState({addDepartmentPanelOpen: !this.state.addDepartmentPanelOpen});
  }

  render() {
    const {title, body, addDepartmentPanelOpen} = this.state;
    return (
      <div>
      <button type = "button" style = {{width: "30%"}} className = "btn btn-success btn-lg center-block" onClick = {() => this.toggleAddDepartment()}> Add Department </button>
        <Panel id="collapsible-panel-addDept" expanded = {addDepartmentPanelOpen}>
          <Panel.Collapse>
            <Panel.Body>
              <form onSubmit = {this.onSubmit}>
                <label>Title</label>
                <input onChange={this.onChange} className="form-control" value={title} placeholder='Enter Title' name='title'/>
                <label>Body</label>
                <input onChange={this.onChange} className="form-control" value={body} placeholder='Enter Body' name='body'/>
                <div className="submit-section">
                    <button className="btn btn-primary center-block" style = {{ width: "30%" }} > Submit</button>
                </div>
              </form>
              </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}

AddDepartment.propTypes = {
  newDepartment: PropTypes.func.isRequired
};

export default connect(null, {newDepartment})(AddDepartment);