import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.click} className={props.className} style={props.style}><span>{props.title}</span><FontAwesomeIcon icon={props.icon} /></button>
  )
}

export default Button