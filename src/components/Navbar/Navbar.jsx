import React, { useContext } from 'react'
import './Navbar.css'
import { MdOutlineArrowOutward } from "react-icons/md";
import logo from '../../assets/images/logo2.webp'
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
function Navbar() {
    const {setCurrency} = useContext(CoinContext)

    const currencyHandler = (event) => {
         switch(event.target.value){
            case "usd":{
                setCurrency({name:"usd",Symbol:"$"})
                break;
            }
            case "inr":{
                setCurrency({name:"inr",Symbol:"₹"})
                break;
            }
            case "eur":{
                setCurrency({name:"eur",Symbol:"€"})
                break;
            }
            default:{
                setCurrency({name:"usd",Symbol:"$"})
                break;
            }
         }
         
    }
  return (
    <div className='navbar'>
        <Link to={'/'} className='img-text'>
        <img src={logo} alt=""/>
        <p>Crypto<span>Tracker</span></p>
        </Link>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign up <MdOutlineArrowOutward className='arrow-logo'/></button>
        </div>
    </div>
  )
}

export default Navbar
