import React from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.css';

export default function MenuItem({menuItem, isVisible}) {

  return (
        <Link to={menuItem.path}>
            <div className='menu-item clickable'>
                <img className="menu-img" src={menuItem.imgSrc} alt="" />
                {isVisible && <span className='bold'>{menuItem.name}</span> }
            </div>
        </Link>
  )
}
