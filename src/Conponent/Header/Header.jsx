import React from 'react'
import ReactDOM from 'react-dom'
import './Header.css'

function Header() {
    return(
        <div className='header'>
            <div className='name'>
                Habtamu Alemayehu
            </div>
            <ol className='right-menu'>
                <li><a className='list-none'>Home</a></li>
                <li><a  className='list-none'>Projects</a></li>
                <li><a  className='list-none'>Skill</a></li>
                <li><a  className='list-none'>Education</a></li>
                <li><a  className='list-none'>Experience</a></li>
                <li><a  className='list-none'>Contact</a></li>
            </ol>
        </div>
    )
}

export default Header