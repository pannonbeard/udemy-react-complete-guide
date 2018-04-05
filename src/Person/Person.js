import React from 'react'
//import Radium from 'radium'
import './Person.css'

const person = ({name, age, click, change, children}) =>{
  return(
    <div className="person">
      <p onClick={click}>I'm a {name} who is {age} years old</p>
      {children}<br />
      <input type="text" onChange={change} value={name}/>
    </div>
  )
}
  

//export default Radium(person);
export default person;