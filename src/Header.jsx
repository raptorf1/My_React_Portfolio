import React from "react"
import {NavLink, Link} from "react-router-dom"

const scrollToTop = () => {
    let mainSection = document.getElementById('main-content');
    mainSection.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const Header = () => {
    return (
        <nav className="header">
            <h1 className="header-title">
                <Link className="header-links hover:text-grey" to="/">My Portfolio</Link>
            </h1>

            <ul className="header-ul">
                <li className="mr-6"><a href="https://tinyurl.com/ya6vlvw8" target="_blank" className="header-links hover:text-red">LinkedIn Profile</a></li>
                <li className="mr-6"><a href="https://1drv.ms/b/s!AhEE9IqHxlSFjjEgtcko9ql6zLV_?e=r7pOa0" target="_blank" className="header-links hover:text-red">CV</a></li>
                <li className="mr-6"><NavLink className="header-links hover:text-grey" activeStyle={{fontWeight: "bold"}} to="/projects">Projects (11)</NavLink></li>
                <li className="mr-6"><NavLink className="header-links hover:text-grey" activeStyle={{fontWeight: "bold"}} to="/contact">Contact Me</NavLink></li>
                <li className="mr-6"><button className="text-red-dark font-semibold" onClick={scrollToTop}>Top Of Page</button></li>
            </ul>
        </nav>
    )
}

export default Header
