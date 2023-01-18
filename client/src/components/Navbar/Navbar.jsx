import React from 'react'
import './Navbar.scss'

// ICONS
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
                  <PersonIcon className='profile'/>
                  <div className='fav-Icon'>
                  <FavoriteIcon className='fav'/>
                  <span>2</span>
                  </div>
                  <div className='cart-Icon'>
                  <ShoppingCartIcon className='cart'/>
                  <span>1</span>
                  </div>
            </div>
       </div>
    </div>
  )
}

export default Navbar