import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { name: 'Jim', age: 25 },
      { name: 'Kyle', age: 26 },
      { name: 'Kreg', age: 24 },
    ]
  }

  switchNameHandler = (newName) => {
    let people = this.state.people
    people[0].name = newName
    this.setState({ people })
  }

  nameChangeHandler = (e) => {
    let people = this.state.people
    people[1].name = e.target.value
    this.setState({ people })
  }

  render() {
    const { people } = this.state
    return (
      <div className="App">
        <h1>My Head</h1>
        <button onClick={() => this.switchNameHandler('Maximal')}>Switch Name</button>
        { people.map( (person, index) => (
          <Person 
            key={index} 
            name={person.name} 
            age={person.age} 
            click={this.switchNameHandler.bind(this, 'max')}
            change={this.nameChangeHandler}
          />
        ))}
        <Person name={'Tim'} age={19} change={this.nameChangeHandler}>
          <strong>This is my job</strong>
        </Person>
      </div>
    );
  }
}

export default App;
