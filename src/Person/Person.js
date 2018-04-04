import React from 'react'

const person = ({name, age, click, change, children}) =>
  <div>
    <p onClick={click}>I'm a {name} who is {age} years old</p>
    {children}
    <input type="text" onChange={change}/>
  </div>

export default person;