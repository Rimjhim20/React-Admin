import React from 'react'

const Button = (prop) => {
  return (
    <button type={prop.type} className={prop.className}>{prop.text}</button>
  )
}

export default Button;