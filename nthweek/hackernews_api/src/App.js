import React, { Component } from 'react';
import './App.css';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;
const allStyle = {
  textAlign: 'left'
};

const buttonStyle = {
  marginLeft: "10px"
}

const defaultStyle = {
  textAlign: 'center'
}

const Search = ({value, onChange, onSubmit, children}) => {
  return (
    <form onSubmit={onSubmit}>
      <input type = "text" value = {value} onChange = {onChange} />
      <button type="submit"> {children} </button>
    </form>
  );
}

const Button = ({style, className, onClick, children}) => {
  return (
      <button style={style} onClick={onClick} className={className} type="button">{children}</button>
  );
}

const Table = ({list, onDismiss}) => {
  return (
    <div>
      {list.map(item =>
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

// const isSearched = searchTerm => item =>
//   item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    };
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  setSearchTopStories(result){
    this.setState({result});
  }

  onDismiss(id){
    const isNotId = item => item.objectID != id;
    const updatedList = this.state.result.hits.filter(isNotId);
    this.setState({result: {...this.state.result, hits: updatedList}});
  }

  onSearchChange(event){
    this.setState({searchTerm: event.target.value});
  }

  onSearchSubmit(event){
    const {searchTerm} = this.state;
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
    // for real time hackernews api search
  }

  fetchSearchTopStories(searchTerm){
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }

  componentDidMount(){
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }


  render() {
    const {searchTerm, result} = this.state;
    return (
      <div className="App" style = {allStyle}>
        <Search value={searchTerm} onChange={this.onSearchChange} onSubmit={this.onSearchSubmit}> Search </Search>
        {result && <Table list={result.hits} onDismiss={this.onDismiss} />}
      </div>
    );
  }
}

export default App;
