import React from 'react'
import './Navbar.scss'

// ICONS
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="container">
            <div className="left">
                <h1 className='logo'>urbane</h1>
            </div>
            <div className="center">
                <div className="item">Home</div>
                <div className="item">About</div>
                <div className="item">Hot Offers</div>
                <div className="item">Contact</div>
            </div>
            <div className="right">
                  <PersonOutlineOutlinedIcon className='profile'/>
                  <div className='fav-Icon'>
                  <FavoriteBorderIcon className='fav'/>
                  <span>2</span>
                  </div>
                  <div className='cart-Icon'>
                  <LocalMallOutlinedIcon className='cart'/>
                  <span>1</span>
                  </div>
            </div>
       </div>
    </div>
  )
}

export default Navbar