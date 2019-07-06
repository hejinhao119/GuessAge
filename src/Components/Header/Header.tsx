import * as React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <img src="bulb.jpg" alt="MSA_Logo" className='logo'/>
            <h1 className='headerText'>How Old? 🤔</h1>
        </div>
    )
}