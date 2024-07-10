import { useState } from 'react';
import '../styles/Navbar.css'
import { CiMenuKebab } from "react-icons/ci";
function Navbar() {
    const [statusTampil, setStatusTampil] = useState('')
    return (
    <nav>
        <div className="wrapper">
            <div className="logo">
                <a href="" className="navbar-logo">Lord <span>Uchiha</span></a>
            </div>
            <button>
                <CiMenuKebab />
            </button>
            <div className={`menu ${statusTampil}`}>
                <ul>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar