import React from 'react'
import './Person.css'

const person = ({name, age, click, change, children}) =>
  <div className="person">
    <p onClick={click}>I'm a {name} who is {age} years old</p>
    {children}<br />
    <input type="text" onChange={change}/>
  </div>

export default person;