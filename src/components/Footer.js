import React from 'react'
import Insta from '../assets/images/instagram.png'
import LinkedIn from '../assets/images/linkedIn.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="imgs">
            <a href="https://www.instagram.com/herumb_nagpal/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'inherit' }}  > <img className='imge' src={Insta} alt="ig" />  </a>  
            <a href="https://www.linkedin.com/in/herumb-nagpal-a37b94192/" target="_blank"  rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'inherit' }}  > <img className='imge' src={LinkedIn} alt="linkedin" /> </a> 
        </div>
        <div className="year">
            <p>© 2023  Herumb Nagpal</p>
        </div>
    </div>
  )
}
