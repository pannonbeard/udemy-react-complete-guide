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
          />
        ))}
        <Person name={'Tim'} age={19}>
          <strong>This is my job</strong>
        </Person>
      </div>
    );
  }
}

export default App;
