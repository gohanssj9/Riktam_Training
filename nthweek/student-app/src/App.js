import React, { Component } from 'react';
import {Panel, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import './App.css';

const DEFAULT_QUERY = 'http://localhost:8000/departments';
// const Background = 'goku_minimalist.jpg'
const allStyle = {
  textAlign: 'left'
};

const buttonStyle = {
  marginLeft: "10px"
}

const defaultStyle = {
  textAlign: 'center'
}

// const backgroundImageStyle = {
//   backgroundImage: 'url(vegeta_minimalist.png)'
// }

const Button = ({style, className, onClick, children}) => {
  return (
      <button style={style} onClick={onClick} className={className} type="button">{children}</button>
  );
}


const StudentTable = ({studentData, deleteStudentPanelOpen, toggleDeleteStudent, deleteStudent, editStudentPanelOpen, toggleEditStudent, editStudent, handleChange, name, age, department_id}) => {
  studentData = studentData == null ? [] : studentData;
    console.log("Inside StudentTable:" , studentData[0], studentData[1], studentData[2]);
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
          {studentData.map(item =>

            <tr key = {item.id}>
              <td> {item.id} </td>
              <td> {item.name} </td>
              <td> {item.age} </td>
              <td>
                <div>
                  <Button style = {buttonStyle} className = "btn btn-warning" onClick = {() => toggleEditStudent(item.id)}> Edit Student </Button>
                    <Modal show = {editStudentPanelOpen[item.id]}>
                      <ModalHeader> 
                        Edit Student
                        <button type="button" className="close" onClick = {() => toggleEditStudent(item.id)}>&times;</button>
                      </ModalHeader>
                      <ModalBody>
                        <form>
                          <label>Name</label>
                          <input type = "text" onChange={handleChange} className="form-control" value={name} placeholder='Enter Name' name='name'/>
                          <label>Age</label>
                          <input type = "number" onChange={handleChange} className="form-control" value={age} placeholder='Enter Age' name='age'/>
                        </form>    
                      </ModalBody>
                      <ModalFooter>
                        <Button style = {{width: "20%"}} className = "btn btn-primary center-block" onClick = {(event) => editStudent(event, editStudentPanelOpen, item.id, department_id)}> Update </Button>
                      </ModalFooter>
                    </Modal>


                  <Button style = {buttonStyle} className = "btn btn-danger" onClick = {() => toggleDeleteStudent(item.id)}> Delete Student </Button>
                    <Modal show = {deleteStudentPanelOpen[item.id]}>
                      <ModalHeader> 
                        Delete Student
                        <button type="button" className="close" onClick = {() => toggleDeleteStudent(item.id)}>&times;</button>
                      </ModalHeader>
                      <ModalBody>
                        Are you sure you want to kick out this student ?   
                      </ModalBody>
                      <ModalFooter>
                        <Button style = {{width: "20%"}} className = "btn btn-danger" onClick = {(event) => deleteStudent(event, deleteStudentPanelOpen, item.id, department_id)}> Delete </Button>
                      </ModalFooter>
                    </Modal>
                </div>
              </td>
            </tr> 
          )}
          </tbody>
        </table>
    </div>
  );
}

const Table = ({list, onDismiss, toggleStateX, panelOpen, value, 
  handleChange, toggleDeleteDepartment, deleteDepartment, deletePanelOpen, 
  toggleEditDepartment, editPanelOpen, editDepartment, handleEditChange, title, body, 
  viewPanelOpen, toggleViewDepartment, studentData, addStudentPanelOpen, 
  toggleAddStudent, name, age, addStudent, 
  deleteStudentPanelOpen, toggleDeleteStudent, deleteStudent, 
  editStudentPanelOpen, toggleEditStudent, editStudent}) => {
  return (
    <div>
      {list.map(item =>
        <div className = "well" key={item.id}>
            <h1> {item.title} </h1>
            <h5> {item.body} </h5>
            <div>
              <Button style={defaultStyle} className="btn btn-info btn-lg" onClick={() => toggleViewDepartment(item.id)}>
                View Department
              </Button>

              <Panel id="collapsible-panel-view-1" expanded = {viewPanelOpen[item.id]}>
                <Panel.Collapse>
                  <Panel.Body>
                    <StudentTable studentData = {studentData} deleteStudentPanelOpen = {deleteStudentPanelOpen} toggleDeleteStudent = {toggleDeleteStudent} deleteStudent = {deleteStudent} 
                    editStudentPanelOpen = {editStudentPanelOpen} toggleEditStudent = {toggleEditStudent} editStudent = {editStudent}
                    handleChange = {handleChange} name = {name} age = {age} department_id = {item.id} />
                  </Panel.Body>
                  <Panel.Footer>
                    <Button style = {defaultStyle} className = "btn btn-success btn-lg center-block" onClick = {() => toggleAddStudent(item.id)}> Add Student </Button>

                    <Modal show = {addStudentPanelOpen[item.id]}>
                      <ModalHeader> 
                        Add Student
                        <button type="button" className="close" onClick = {() => toggleAddStudent(item.id)}>&times;</button>
                      </ModalHeader>
                      <ModalBody>
                        <form method="POST">
                          <label>Name</label>
                          <input type = "text" onChange={handleChange} className="form-control" value={name} placeholder='Enter Name' name='name'/>
                          <label>Age</label>
                          <input type = "number" onChange={handleChange} className="form-control" value={age} placeholder='Enter Age' name='age'/>
                        </form>    
                      </ModalBody>
                      <ModalFooter>
                        <Button style = {{width: "20%"}} className = "btn btn-primary center-block" onClick = {(event) => addStudent(event, addStudentPanelOpen, item.id)}> Submit </Button>
                      </ModalFooter>
                    </Modal>

                  </Panel.Footer>
                </Panel.Collapse>
              </Panel>

              <Button style={buttonStyle} className="btn btn-warning btn-lg" onClick={() => toggleEditDepartment(item.id)}>
                Edit Department
              </Button>

              <Panel id="collapsible-panel-edit-1" expanded = {editPanelOpen[item.id]}>
                <Panel.Collapse>
                  <Panel.Body>
                    <form method="POST">
                      <label>Title</label>
                      <input onChange={handleChange} className="form-control" value={title} placeholder={item.title} name='title'/>
                      <label>Body</label>
                      <input onChange={handleChange} className="form-control" value={body} placeholder={item.body} name='body'/>
                    </form>
                    
                  </Panel.Body>
                  <Panel.Footer>
                    <Button style = {{width: "20%"}} className = "btn btn-primary center-block" onClick = {(event) => editDepartment(event, editPanelOpen, item.id)}> Update </Button>
                  </Panel.Footer>
                </Panel.Collapse>
              </Panel>

              <Button style={buttonStyle} className="btn btn-danger btn-lg" onClick={() => toggleDeleteDepartment(item.id)}>
                Delete Department
              </Button>

              <Panel id="collapsible-panel-delete-1" expanded = {deletePanelOpen[item.id]}>
                <Panel.Collapse>
                  <Panel.Body>
                    Are you sure you want to delete this Department?
                  </Panel.Body>
                  <Panel.Footer>
                    <Button style = {defaultStyle} className = "btn btn-danger" onClick = {(event) => deleteDepartment(event, item.id)}> Delete </Button>
                    <Button style = {defaultStyle} className = "btn btn-default" onClick = {() => toggleDeleteDepartment(item.id)}> Close </Button>
                  </Panel.Footer>
                </Panel.Collapse>
              </Panel>

            </div>
          </div>
          
      )}
      </div>
  );
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: null,
      studentData: null,
      addDepartmentPanel: false,
      panelOpen: [false, false, false, false],
      deletePanelOpen: [false, false, false, false],
      editPanelOpen: [false, false, false, false],
      viewPanelOpen: [false, false, false, false],
      addStudentPanelOpen: [false, false, false, false],
      deleteStudentPanelOpen: [false, false, false, false],
      editStudentPanelOpen: [false, false, false, false],
      value: "",
      title: "",
      body: "",
      name: "",
      age: 0,
      msg: "",
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.showResults = this.showResults.bind(this);
    this.toggleStateX = this.toggleStateX.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleAddDepartment = this.toggleAddDepartment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDeleteDepartment = this.toggleDeleteDepartment.bind(this);
    this.deleteDepartment = this.deleteDepartment.bind(this);
    this.toggleEditDepartment = this.toggleEditDepartment.bind(this);
    this.editDepartment = this.editDepartment.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.toggleViewDepartment = this.toggleViewDepartment.bind(this);
    this.fetchStudentResults = this.fetchStudentResults.bind(this);
    this.toggleAddStudent = this.toggleAddStudent.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.toggleDeleteStudent = this.toggleDeleteStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.toggleEditStudent = this.toggleEditStudent.bind(this);
    this.editStudent = this.editStudent.bind(this);
    this.onDismissStudent = this.onDismissStudent.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleEditChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  toggleAddStudent(key){
    const {addStudentPanelOpen} = this.state;
    addStudentPanelOpen[key] = !addStudentPanelOpen[key];
    this.setState({addStudentPanelOpen});
  }

  toggleDeleteStudent(key){
    const {deleteStudentPanelOpen} = this.state;
    deleteStudentPanelOpen[key] = !deleteStudentPanelOpen[key];
    this.setState({deleteStudentPanelOpen});
  }

  toggleEditDepartment(key){
    const {editPanelOpen} = this.state;
    editPanelOpen[key] = !editPanelOpen[key];
    this.setState({editPanelOpen});
  }

  toggleEditStudent(key){
    const {editStudentPanelOpen} = this.state;
    editStudentPanelOpen[key] = !editStudentPanelOpen[key];
    this.setState({editStudentPanelOpen});
  }

  toggleViewDepartment(key){
    const {viewPanelOpen} = this.state;
    viewPanelOpen[key] = !viewPanelOpen[key];
    this.setState({viewPanelOpen});

    if(viewPanelOpen[key] == true) this.fetchStudentResults(key);
  }

  // viewDepartment(event, key){
  //   event.preventDefault();
  // }

  addStudent(event, addStudentPanelOpen, key){
    event.preventDefault();

    let self = this;
    var data = {
      name: this.state.name,
      age: this.state.age,
      department_id: key
    };

    var def_Data;
    console.log(data);
    fetch('http://localhost:8000/students', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(function(response){
      return response.json();
    }).then(function(result){
      console.log(result);
      def_Data = JSON.parse(result);
      const matchThreeStudent = [...self.state.studentData, ...def_Data];
      self.setState({studentData: matchThreeStudent});
    }).catch(function(error){
      console.log(error);
    });
    self.setState({msg: "Success Add Student"});
    this.toggleAddStudent(key);
  }


  editDepartment(event, editPanelOpen, key){
    event.preventDefault();

    var data = this.state.data;

    let self = this;
    var sendingData = {
      title: this.state.title,
      body: this.state.body
    };

    const url = 'http://localhost:8000/departments/' + key;
    fetch(url, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(sendingData)
    }).then(function(response){
      return response.json();
    }).then(function(result){
      console.log(result);
    }).catch(function(error){
      console.log(error);
    });
    
    var index = data.findIndex(x => x.id == key);

    data[index].title = this.state.title;
    data[index].body = this.state.body;
    this.setState({data});
    this.toggleEditDepartment(key);
  }

  editStudent(event, editStudentPanelOpen, key, department_key){
    event.preventDefault();

    var studentData = this.state.studentData;

    let self = this;
    var data = {
      name: this.state.name,
      age: this.state.age
    };

    const url = 'http://localhost:8000/students/' + key;
    fetch(url, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(function(response){
      return response.json();
    }).then(function(data){
//      self.setState({msg: "Updated Student"});
    }).catch(function(error){
      console.log(error);
    });
    var index = studentData.findIndex(x => x.id == key);

    studentData[index].name = this.state.name;
    studentData[index].age = this.state.age;
    this.setState({studentData});    
    this.toggleEditStudent(key);
  }

  toggleDeleteDepartment(key){
    const {deletePanelOpen} = this.state;
    deletePanelOpen[key] = !deletePanelOpen[key];
    this.setState({deletePanelOpen});
  }


  deleteStudent(event, deleteStudentPanelOpen, key, department_key){
    event.preventDefault();

    let self = this;
    const url = 'http://localhost:8000/students/' + key;
    fetch(url, {
      method: "DELETE",
    }).then(function(response){
      return response.json();
    }).then(function(data){
      self.onDismissStudent(key);
    }).catch(function(error){
      console.log(error);
    });
    this.toggleDeleteStudent(key);
  }


  deleteDepartment(event,key){
    event.preventDefault();

    let self = this;
    const url = 'http://localhost:8000/departments/' + key;
    fetch(url, {
      method: "DELETE",
    }).then(function(response){
      return response.json();
    }).then(function(data){
      console.log(data);
      self.onDismiss(key);
    }).catch(function(error){
      console.log(error);
    });
  }

  toggleStateX(key){
    const {panelOpen} = this.state;
    panelOpen[key] = !panelOpen[key];
    this.setState({panelOpen});
  }

  toggleAddDepartment(val){
    this.setState({addDepartmentPanel: !val});
  }
  onDismiss(id){
    const {data} = this.state;

    const isNotId = item => item.id !== id;
    const updatedList = data.filter(isNotId);
    this.setState({data: updatedList});
  }

  onDismissStudent(id){
    const {studentData} = this.state;

    const isNotId = item => item.id !== id;
    const updatedList = studentData.filter(isNotId);
    this.setState({studentData: updatedList});
  }

  showResults(data){
    this.setState({data: data});
  }

  fetchStudentResults(key){
    const url = 'http://localhost:8000/departments/' + key + '/students';
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({studentData: JSON.parse(result)}))
      .catch(error => error);
  }

  fetchResults(){
    fetch(DEFAULT_QUERY)
      .then(response => response.json())
      .then(result => this.showResults(JSON.parse(result)))
      .catch(error => error);
  }

  handleSubmit(e, addDepartmentPanel){
    const {data} = this.state;
    e.preventDefault();

    let self = this;
    var sendingData = {
      title: this.state.title,
      body: this.state.body
    };

    var def_Data;

    console.log(data);
    fetch('http://localhost:8000/departments', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(sendingData)
    }).then(function(response){
        return response.json();
    }).then(function(result){
        def_Data = JSON.parse(result);
        const matchThree = [...self.state.data, ...def_Data];
        self.setState({data: matchThree});
    }).catch(function(error){
      console.log(error);
    });

    this.toggleAddDepartment(addDepartmentPanel);
  }
  componentDidMount(){
    this.fetchResults();
    // ES5 convention.

    // let self = this;
    // fetch(DEFAULT_QUERY)
    //   .then(function(response){
    //     return response.json();
    //   })
    //   .then(function(data){
    //     self.setState({data: JSON.parse(data)});
    //   })
    //   .catch(error => {
    //     console.log("Error Caught");
    //   })

    //ES6 Convention
    // fetch(DEFAULT_QUERY)
    //   .then(response => response.json())
    //   .then(result => this.showResults(JSON.parse(result)))
    //   .catch(error => error);
  }

  render() {
    const {data, panelOpen, value, addDepartmentPanel, title, body, deletePanelOpen, editPanelOpen, viewPanelOpen, studentData, addStudentPanelOpen, name, age, deleteStudentPanelOpen, editStudentPanelOpen} = this.state;
    const list = (data == null ? [] : data);
    return (
      <div className="App" style = {allStyle}>
        <Table list = {list} onDismiss = {this.onDismiss} toggleStateX = {this.toggleStateX} 
          panelOpen = {panelOpen} value = {value} handleChange = {this.handleChange} 
          toggleDeleteDepartment = {this.toggleDeleteDepartment} deleteDepartment = {this.deleteDepartment} deletePanelOpen = {deletePanelOpen} 
          editDepartment = {this.editDepartment} editPanelOpen = {editPanelOpen} toggleEditDepartment = {this.toggleEditDepartment} 
          handleEditChange = {this.handleEditChange} handleChange = {this.handleChange} title = {title} body = {body}
          viewPanelOpen = {viewPanelOpen} toggleViewDepartment = {this.toggleViewDepartment} studentData = {studentData} 
          addStudentPanelOpen = {addStudentPanelOpen} toggleAddStudent = {this.toggleAddStudent} name = {name} age = {age} addStudent = {this.addStudent} 
          deleteStudentPanelOpen = {deleteStudentPanelOpen} toggleDeleteStudent = {this.toggleDeleteStudent} deleteStudent = {this.deleteStudent}
          editStudentPanelOpen = {editStudentPanelOpen} toggleEditStudent = {this.toggleEditStudent} editStudent = {this.editStudent} />
       
        <Button className="btn btn-success btn-lg center-block" style={{ width: "30%"}} onClick = {() => this.toggleAddDepartment(addDepartmentPanel)}> Add Department </Button>
 
          <Panel id="collapsible-panel-example-1" expanded = {addDepartmentPanel}>
            <Panel.Collapse>
              <Panel.Body>
                <form method="POST">
                      <label>Title</label>
                      <input onChange={this.handleChange} className="form-control" value={title} placeholder='Enter Title' name='title'/>
                      <label>Body</label>
                      <input onChange={this.handleChange} className="form-control" value={body} placeholder='Enter Body' name='body'/>
                      <div className="submit-section">
                          <Button className="btn btn-primary center-block" style = {{ width: "30%" }} onClick = {(event) => this.handleSubmit(event, addDepartmentPanel)}>Submit</Button>
                      </div>
                </form>
                </Panel.Body>
            </Panel.Collapse>
          </Panel>
      </div>
                // <form>
                //   <FormGroup>
                //     <ControlLabel>Title</ControlLabel>
                //     <FormControl
                //       type="text"
                //       value={value}
                //       placeholder="Enter Title"
                //       onChange={this.handleChange}/>
                //     <FormControl.Feedback />
                //   </FormGroup>

                //   <FormGroup>
                //     <ControlLabel>Body</ControlLabel>
                //     <FormControl
                //       type="text"
                //       value={value}
                //       placeholder="Enter Body"
                //       onChange={this.handleChange}/>
                //     <FormControl.Feedback />
                //   </FormGroup>
                // </form>
                // <Button className = "btn btn-primary center-block" style = {{ width: "30%"}}> Submit Details </Button>
              
    );
  }
}

export default App;
