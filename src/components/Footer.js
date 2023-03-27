import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,FaGithub,FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='foot'>
        <div className='icons'>
            <a href=""><FaFacebook /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaTwitter /></a>
            <a href="https://github.com/cuneyt88?tab=repositories"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/cuneytekremari/"><FaLinkedin /></a>
        </div>
        <div className='copyright'>
          <h4> © Copyright by BilgiÖlçer 2023</h4>
        </div>
    </div>
  )
}

export default Footer