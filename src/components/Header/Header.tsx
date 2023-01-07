import React from 'react'
import './Header.css';

export default function Header({title, banner}) {
  return (
    <div className="header w-100" style={{ backgroundImage: `url(/banners/${banner})`}}>
        <h1 className="header-title b capitalize">{title}</h1>
    </div>
  )
}
