

import React from 'react'
import './Projects.css'
export default function Projects({image,title,description}) {
  return (
    <li>
        <img id='projectImg' src={image} alt={title} />
        <h3 className='font-bold'>{title}</h3>
        <p>{description}</p>
      </li>
  )
}
