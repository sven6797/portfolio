import { FaHtml5 } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import '../styles/About.css'
function About() {
  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aliquam.</p>
            <h4>Programming Language & Tools</h4>
            <div className="skills">
                <FaHtml5 />
                <IoLogoJavascript />
                <FaPhp />
            </div>
        </div>
    </section>
  )
}

export default About