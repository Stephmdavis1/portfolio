import {Link} from 'react-router-dom'
import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaPinterest } from "react-icons/fa";


export default function Footer() {
    return (
        <footer>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/stephmdavis1/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a href="https://github.com/Stephmdavis1" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.pinterest.com/stephaniedavisux/" target="_blank" rel="noreferrer"><FaPinterest /></a>
            </div>
            
            <div className='footer__bottom'>
            <span className='footer__rights'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            
            <div className='footer__built'>
                Built with React <span>&#9825;</span>
            </div>
            
            <a href='https://www.buymeacoffee.com/stephmdavis1' target={'_blank'}>Buy Me a Coffee</a>
            </div>
        </footer>
    )
}

