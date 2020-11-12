import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/food.svg'

const Header = () =>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop'>
                ORDER   
            </Link>
            <Link to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header