import React from "react"
import {NavLink, Link} from "react-router-dom"

const Header = () => {
    return (
        <nav className="header">
            <h1 className="header-title">
                <Link className="header-links hover:text-grey" to="/">My Portfolio</Link>
            </h1>

            <ul className="header-ul">
                <li className="mr-6"><a href="https://tinyurl.com/ya6vlvw8" target="_blank" className="header-links hover:text-red">My LinkedIn Profile</a></li>
                <li className="mr-6"><NavLink className="header-links hover:text-grey" activeStyle={{fontWeight: "bold"}} to="/projects">My Projects</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header