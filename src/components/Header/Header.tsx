import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header({title, banner, arrow=true}) {
  const navigate = useNavigate();

  return (
    <div className="header w-100" style={{ backgroundImage: `url(/banners/${banner})`}}>
      {arrow && <button className='arrow-back-btn' onClick={() => navigate(-1)}>
          <img className="icon" src="/icons/arrow-back.svg" />
          </button>
      }
        <h1 className="header-title b capitalize">{title}</h1>
    </div>
  )
}
