import React from "react";
import "./styles.css";

function debounce(fn, timer) {
  let timeReference = "";
  return function(...args) {
    clearTimeout(timeReference);

    timeReference = setTimeout(() => {
      fn.apply(null, args);
    }, timer);
  };
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(e) {
    this.setState({ search: e.target.value });
    this.showsearch(this.state.search);
  }
  showsearch = debounce(function(val) {
    console.log("search text is ", val);
  }, 1000);
  render() {
    return (
      <div className="App">
        <h1>Debounce expample</h1>
        <h2>
          This is normal input Start writing in the text box below and see
          console
        </h2>
        <input
          id="search"
          value={this.state.search}
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}
