import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users });
      });
  }


  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }

  render() {
    const { robots, searchField } =  this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? <h1>Loading...</h1> : (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App;