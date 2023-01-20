              import React, { useState } from 'react'
              import './Navbar.scss'

              // ICONS
              import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
              import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
              import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
              import MenuIcon from '@mui/icons-material/Menu';
              import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
              import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
              import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
              import LoginIcon from '@mui/icons-material/Login';
              import LogoutIcon from '@mui/icons-material/Logout';
              import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
              import Login from '@mui/icons-material/Login';
              import Logout from '@mui/icons-material/Logout';
              import WhatshotIcon from '@mui/icons-material/Whatshot';
              import MailOutlined from '@mui/icons-material/MailOutlined';
              import CategoryOutlined from '@mui/icons-material/CategoryOutlined';

              const Navbar = () => {


                // NAVBAR TOOGLE MENU
                const[open,setOpen] = useState(true);

                const handleOpen = ()=>{
                  console.log("hello")
                  setOpen(!open);
                }

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
                    <div className='bottom-menu'>
                              <div className='bottom-icon' onClick={handleOpen}>
                              <HomeOutlinedIcon fontSize='large'/>
                              </div>
                              <div className='bottom-icon'>
                              <FavoriteBorderIcon fontSize='large'/>
                              </div>
                              <div className='bottom-icon'>
                              <LocalMallOutlinedIcon fontSize='large'/>
                              </div>
                              <div className='bottom-icon'>
                              <MoreHorizOutlinedIcon fontSize='large'/>
                              </div>
                    </div>
                    <div className={open ? `side-menu open-side-menu`:`side-menu`}>
                          <div className="side-menu-top">
                              <h1 className='logo'>urbane</h1>
                              <div className='close' onClick={handleOpen}>
                              <CloseOutlinedIcon fontSize='large'/>
                              </div>
                          </div>
                          <div className="side-menu-items">
                              <div className="side-menu-item">
                              <WhatshotIcon/>
                              Hot Offers
                              </div>
                              <div className="side-menu-item">
                              <CategoryOutlined/>
                              Products
                              </div>
                              <div className="side-menu-item">
                              <MailOutlined/>
                              Contact
                              </div>
                              <div className='side-menu-item'>
                                  <LoginIcon/>
                                  <p>Login</p>
                              </div>
                              <div className='side-menu-item'>
                                  <AssignmentIndIcon/>
                                  <p>Sign Up</p>
                              </div>
                              <div className='side-menu-item'>
                                <LogoutIcon/>
                                <p>Logout</p>
                              </div>
                          </div>
                    </div>
                  </div>
                )
              }

              export default Navbar