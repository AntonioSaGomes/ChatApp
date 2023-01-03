import React from 'react'
import './Profile.css';

export default function Profile() {

  
  return (
    <div className='profile'>
        <article>
            <header>
                <h1 className='title'>António Sérgio Pereira Sá Gomes</h1>
                <div className='profile-details'>
                    <div className='row bold'>Software Developer</div>
                    <div className='row bold'>
                        <span>Viseu-Portugal</span>
                        <span>Driver's License: B</span>
                    </div>
                    <div className='row'>
                        <span>Email: <strong>sagomesantonio@gmail.com</strong></span>
                        <span>Phone: +351 937 979 199</span>
                    </div>
                    <div className='row'>
                        <span>
                            <strong>LinkenIn:</strong> 
                            <a href="https://www.linkedin.com/in/antoniosagomes/" target="_blank">
                                https://www.linkedin.com/in/antoniosagomes/
                            </a>
                        </span>
                        </div>
                    <div className='row'>
                    <span>
                            <strong>Github:</strong> 
                            <a href="https://github.com/AntonioSaGomes" target="_blank">
                                https://github.com/AntonioSaGomes
                            </a>
                        </span>
</div>
                </div>
            </header>

        </article>
    </div>
  )
}
