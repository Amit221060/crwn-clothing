import React from 'react'
import './header.style.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/original.svg'

const Header = ()=> (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'></Logo>
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/contact'>Contact</Link>
            </div>
        </div>
    ) 

export default Header;
