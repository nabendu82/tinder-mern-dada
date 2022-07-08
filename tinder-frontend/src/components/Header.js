import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon sx={{ fontSize: 80 }} className="header__icon" />
            </IconButton>
            <Link to="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" alt="header" className='header__logo' />
            </Link>
            <Link to="/add">
                <IconButton>
                    <ForumIcon sx={{ fontSize: 80 }} className="header__icon" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header