import React from "react"

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-content">
                <img src="https://www.codewars.com/users/raptorf1/badges/small" alt="Codewars Badge" ></img>
                <a href="https://reactjs.org/" target="_blank"><img src="./src/data/reactLogo.png" height="40" width="40" alt="React Logo"></img></a>
                <a href="https://twitter.com/raptor__f1" target="_blank"><img src="./src/data/twitterLogo.png" height="40" width="40" alt="Twitter Logo"></img></a>
            </div>
        </div>
    )
}

export default Footer
