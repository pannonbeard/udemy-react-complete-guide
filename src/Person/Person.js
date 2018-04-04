import React from 'react'

const person = ({name, age, click, children}) =>
  <div>
    <p onClick={click}>I'm a {name} who is {age} years old</p>
    {children}
  </div>

export default person;