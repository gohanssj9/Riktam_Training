import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '5';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage='

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}&$(PARAM_PAGE)`;
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
  _isMounted = false;
  constructor(props){
    super(props);

    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null,
    };

    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  needsToSearchTopStories(searchTerm){
    return !this.state.results[searchTerm];
  }

  setSearchTopStories(result){
    const {hits, page} = result;
    const {searchKey, results} = this.state;
    const oldHits = results && results[searchKey] ? results[searchKey].hits : [];
    const updatedHits = [...oldHits, ...hits];

    this.setState({results: { ...results, [searchKey]: {hits: updatedHits, page}}});
  }

  onDismiss(id){
    const {searchKey, results} = this.state;
    const {hits, page} = results[searchKey];

    const isNotId = item => item.objectID != id;
    const updatedList = hits.filter(isNotId);
    this.setState({results: {...results, [searchKey]:{hits: updatedList, page}}});
  }

  onSearchChange(event){
    this.setState({searchTerm: event.target.value});
  }

  onSearchSubmit(event){
    const {searchTerm} = this.state;
    this.setState({searchKey: searchTerm});
    if(this.needsToSearchTopStories(searchTerm)) this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
    // for real time hackernews api search
  }

  fetchSearchTopStories(searchTerm, page = 0){
    // fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    //   .then(response => response.json())
    //   .then(result => this.setSearchTopStories(result))
    //   .catch(error => this.setState({error}));

    axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(result => this._isMounted && this.setSearchTopStories(result.data))
      .catch(error => this._isMounted && this.setState({error}));
  }

  componentDidMount(){
    this._isMounted = true;
    const { searchTerm } = this.state;
    this.setState({searchKey: searchTerm});
    this.fetchSearchTopStories(searchTerm);
  }

  componentWillUnmount(){
    this._isMounted = false;
  }


  render() {
    const {searchTerm, results, searchKey, error} = this.state;
    const page = (results && results[searchKey] && results[searchKey].page) || 0;
    const list = (results && results[searchKey] && results[searchKey].hits) || [];

    return (
      <div className="App" style = {allStyle}>
        <Search value={searchTerm} onChange={this.onSearchChange} onSubmit={this.onSearchSubmit}> Search </Search>
        {error ? 
          <div className = "well">
            <h1>Something went wrong.</h1>
          </div> : 
          <Table list={list} onDismiss={this.onDismiss} />}
        <Button className="btn-info btn-lg center-block" style={{ width: "30%"}} onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}> More </Button>
      </div>
    );
  }
}

export default App;
export {
  Button,
  Search,
  Table,
};