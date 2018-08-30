import React, { Component } from 'react';
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

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      list: list,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id){
    function isNotId(item){
      return item.objectID !== id;
    }
    const updatedList = this.state.list.filter(isNotId);
    this.setState({list: updatedList});
  }

  render() {
    return (
      <div className="App" style = {allStyle}>
        {this.state.list.map(item =>
          <div className = "well" key={item.objectID}>
              <h1>
                <a href={item.url}>{item.title}</a>
              </h1>

              <h2> {item.author} </h2>
              <div>
                <button className="btn btn-danger"
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </div>
            </div>
        )}
      </div>
    );
  }
}

export default App;
