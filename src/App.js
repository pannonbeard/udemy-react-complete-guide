import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { id: '1', name: 'Jim', age: 25 },
      { id: '2', name: 'Kyle', age: 26 },
      { id: '3', name: 'Kreg', age: 24 },
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    let people = this.state.people
    people[0].name = newName
    this.setState({ people })
  }

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.people.findIndex( p => p.id === id)
    const person = {...this.state.people[personIndex]}
    person.name = e.target.value
    const people = [...this.state.people]
    people[personIndex] = person
    this.setState({ people })
  }

  togglePersonsHandler = () => {
    const showPersons = !this.state.showPersons
    this.setState({ showPersons })
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people]; // Makes a copy of the array here instead of setting a pointer
    people.splice(personIndex, 1);
    this.setState({ people })
  }

  render() {
    const { people, showPersons } = this.state
    let persons = null
    let btnClass = '';

    if (showPersons){
      persons = people.map(
        (person, index) => (
          <Person
            key={person.id}
            click={this.deletePersonHandler.bind(this, index)} // one of two methods to passing methods down
            name={person.name}
            age={person.age}
            //click={this.switchNameHandler.bind(this, 'max')} adding a change
            change={(e) => this.nameChangeHandler(e, person.id)} // the other methods to passing methods down
          />
        )
      )
      btnClass = classes.Red
    }

    const classNames = []
    if(this.state.people.length <= 2){
      classNames.push(classes.red)
    }

    if(this.state.people.length <= 1){
      classNames.push(classes.bold)
    }
    
    return (
      <div className={classes.App}>
        <h1>My Head</h1>
        <p className={classNames.join(' ')}>this works</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Show People</button>
        {persons}
      </div>
    );
  }
}
export default App
