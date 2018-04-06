import React from 'react'
import styles from './Person.css'

const person = ({name, age, click, change, children}) =>{
  const rnd = Math.random();
  if( rnd > 0.7 ){
    throw new Error( 'Something went wrong' )
  }
  return(
    <div className={styles.person}>
      <p onClick={click}>I'm a {name} who is {age} years old</p>
      {children}<br />
      <input type="text" onChange={change} value={name}/>
    </div>
  )
}

export default person;