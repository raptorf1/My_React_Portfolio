import React from "react"

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-content">
                <img src="https://www.codewars.com/users/raptorf1/badges/small" alt="Codewars Badge" ></img>
                <a href="https://github.com/raptorf1" target="_blank"><img src="./src/data/github.png" width="100" alt="GitHub Logo"></img></a>
                <a href="https://twitter.com/raptor__f1" target="_blank"><img src="./src/data/twitterLogo.png" height="30" width="30" alt="Twitter Logo"></img></a>
                <a href="https://reactjs.org/" target="_blank"><img src="./src/data/reactLogo.png" height="30" width="30" alt="React Logo"></img></a>
            </div>
        </div>
    )
}

export default Footer
