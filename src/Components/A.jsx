import React from 'react'

const A = (prop) => {
  return (
    <a href={prop.path} className={prop.className}>{prop.text}</a>
  )
}

export default A;