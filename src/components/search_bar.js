import React, {Component} from 'react';


//Define a new class called SearchBar and give it access to all the functionality
//of react component

//class based component
class SearchBar extends Component {

  //state
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }


  render() {
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

   onInputChange(term) {
     this.setState({term});
     this.props.onSearchTermChange(term);
   }

}


/*
//functional based component
const SearchBar = () => {
  return <input/>;
}
*/

//export SearchBar component.
export default SearchBar;
