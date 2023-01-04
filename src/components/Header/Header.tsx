import React from 'react'
import './Header.css';

export default function Header({title}) {
  return (
    <div className="header w-100">
        <h1 className="header-title b capitalize">{title}</h1>
    </div>
  )
}
