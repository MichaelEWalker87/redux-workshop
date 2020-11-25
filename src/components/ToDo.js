// components/ToDo.js
import {toggleToDo} from '../actions/index.js'
import React from 'react';
import { connect } from 'react-redux';
 
const ToDo = ({ id, todo, completed, toggleToDo}) => {

  return (
    <li 
      className={completed ? "completed" : "not-completed"}
      onClick={() => toggleToDo(id)}
    >
      {todo} 
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleToDo: id => dispatch( toggleToDo(id) )
})

export default connect(null, mapDispatchToProps)(ToDo);