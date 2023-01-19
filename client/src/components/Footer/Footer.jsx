import React from 'react'
import './Footer.scss'
import Bg from '../../assets/images/payment.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className='footer-top'>
            <ul className='footer-list'>
                 <li><h2 className='item-title'>Popular</h2></li>
                 <li>
                    <a href="#">Fashion</a>
                 </li>
                 <li>
                    <a href="#">Electronic</a>
                 </li>                 <li>
                    <a href="#">Cosmetic</a>
                 </li>                 <li>
                    <a href="#">Health</a>
                 </li>                 <li>
                    <a href="#">Fashion</a>
                 </li>                 <li>
                    <a href="#">Watches</a>
                 </li>
            </ul>
            <ul className='footer-list'>
                 <li><h2 className='item-title'>Products</h2></li>
                 <li>
                    <a href="#">Price Drop</a>
                 </li>
                 <li>
                    <a href="#">New Products</a>
                 </li>                 <li>
                    <a href="#">Best Sales</a>
                 </li>                 <li>
                    <a href="#">Contact Us</a>
                 </li>                 <li>
                    <a href="#">Fashion</a>
                 </li>                 <li>
                    <a href="#">Watches</a>
                 </li>
            </ul>
            <ul className='footer-list'>
                 <li><h2 className='item-title'>Our Company</h2></li>
                 <li>
                    <a href="#">About Us</a>
                 </li>
                 <li>
                    <a href="#">Delivery</a>
                 </li>                 
                 <li>
                    <a href="#">Terms & Conditions</a>
                 </li>
                 <li>
                    <a href="#">Legal Notice</a>
                 </li>                 
                 <li>
                    <a href="#">Secure Payment</a>
                 </li>             
            </ul>
            <ul className='footer-list'>
                 <li><h2 className='item-title'>Contact</h2></li>
                 <li className='address'>
                    <span className='address-item'>
                        <LocationOnOutlinedIcon/>
                        Rajiv Chowk , New Delhi
                    </span>
                    <span className='address-item'>
                        <MailOutlinedIcon/>
                         codegoggin@gmail
                    </span>
                    <span className='address-item'>
                        <CallOutlinedIcon/>
                        (+91)9834882289
                    </span>
                    <span className='social-icons'>
                        <FacebookIcon className='icon'/>
                        <TwitterIcon className='icon'/>
                        <InstagramIcon className='icon'/>
                        <WhatsAppIcon className='icon'/>
                    </span>
                 </li>            
            </ul>
            </div>
            <div className='footer-bottom'>
                <div className='payment'>
                      <img src={Bg} alt="" />
                </div>
                <div className='copyright'>
                    <p className="copyright">
            Copyright &copy; <a href="#">urbane</a> all rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer