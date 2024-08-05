import React from 'react'
import './Card.css'

const Card = ({long_url, short_url, title}) => {
  return (
    <div className="urls-card">
        <h3>{long_url}</h3>
        <p>{short_url}</p>
        <p>{title}</p>
    </div>
  )
}

export default Card