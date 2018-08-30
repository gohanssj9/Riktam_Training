import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'NoDux',
    url: 'https://github.com/gohanssj9',
    author: 'Sriteja Ayyagari, Minato Namikaze',
    num_comments: 30,
    points: 100,
    objectID: 2,
  },
];

const allStyle = {
  textAlign: 'left'
};

const buttonStyle = {
  marginLeft: "10px"
}

const defaultStyle = {
  textAlign: 'center'
}

const Search = ({value, onChange, children}) => {
  return (
    <form>
      {children}
      <input type = "text" value = {value} onChange = {onChange} />
    </form>
  );
}

const Button = ({style, className, onClick, children}) => {
  return (
      <button style={style} onClick={onClick} className={className} type="button">{children}</button>
  );
}

const Table = ({list, pattern, onDismiss}) => {
  return (
    <div>
      {list.filter(isSearched(pattern)).map(item =>
        <div className = "well" key={item.objectID}>
            <h1>
              <a href={item.url}>{item.title}</a>
            </h1>

            <h2> {item.author} </h2>
            <div>
              <Button style={defaultStyle} className="btn btn-danger" onClick={() => onDismiss(item.objectID)}>
                Dismiss
              </Button>
              <Button style={buttonStyle} className="btn btn-success" onClick={() => onDismiss(item.objectID)}>
                Accept
              </Button>
            </div>
          </div>
      )}
      </div>
  );
}
// function isSearched(searchTerm){
//   return function(item){
//     // return true or false.
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

// Above uses Functional Programming Concepts.

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };
  
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    // this.onAddItem = this.onAddItem.bind(this);
  }

  onDismiss(id){
    function isNotId(item){
      return item.objectID !== id;
    }
    const updatedList = this.state.list.filter(isNotId);
    this.setState({list: updatedList});
  }

  onSearchChange(event){
    this.setState({searchTerm: event.target.value});
  }

  // onAddItem(event){
  //   const updatedList = this.state.list.concat(this.state.list[0]);
  //   this.setState({list: updatedList});
  // }

  render() {
    const {searchTerm, list} = this.state;
    return (
      <div className="App" style = {allStyle}>
        <Search value={searchTerm} onChange={this.onSearchChange}> Search </Search>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

//Search, Table, Button are stateless components, so can be refactored to functions.

// class Search extendcd s Component{
//   render(){
//     const {value, onChange, children} = this.props;
//     return (
//       <form>
//         {children}
//         <input type = "text" value = {value} onChange={onChange} />
//       </form>
//     );
//   }
// }

// class Table extends Component{
//   render(){
//     const {list, pattern, onDismiss} = this.props;
//     return (
//       <div>
//         {list.filter(isSearched(pattern)).map(item =>
//           <div className = "well" key={item.objectID}>
//               <h1>
//                 <a href={item.url}>{item.title}</a>
//               </h1>

//               <h2> {item.author} </h2>
//               <div>
//                 <Button style={defaultStyle} className="btn btn-danger" onClick={() => onDismiss(item.objectID)}>
//                   Dismiss
//                 </Button>
//                 <Button style={buttonStyle} className="btn btn-success" onClick={() => onDismiss(item.objectID)}>
//                   Accept
//                 </Button>
//               </div>
//             </div>
//         )}
//         </div>
//     );
//   }
// }

// class Button extends Component{
//   render(){
//     const {style = '', onClick, className = '', children} = this.props;

//     return (
//       <button style={style} onClick={onClick} className={className} type="button">{children}</button>
//     );
//   }
// }

export default App;