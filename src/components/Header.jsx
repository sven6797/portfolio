import profilePicture from '../assets/profile.jpg'
import { SiRepublicofgamers } from "react-icons/si";
import { SiMyanimelist } from "react-icons/si";
import { FaSteam } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import '../styles/Header.css'

function Header() {
  return (
    <header>
    <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Hilal Anshar Arnafian</h3>
        <p>Pemuda Malas - Gamers</p>
        <div className='socialMedia'>
            <a href=''><SiRepublicofgamers /></a>
            <a href=''><SiMyanimelist /></a>
            <a href=''><FaSteam /></a>
            <a href=''><IoLogoWhatsapp /></a>
        </div>
    </div>
    </header>
  )
}

export default Header