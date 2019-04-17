import React from "react"
import { UndrawAirport } from "react-undraw-illustrations"

const Hello = () => {
    return (
        <div className="content-wrapper">
            <div className="flex flex-wrap mb-4">
                <div className="w-full lg:w-1/4 md:w-1/2">
                    <UndrawAirport />
                </div>
                <div className="w-full lg:w-3/4 md:w-1/2">
                    <h1 className="content-text">About Me</h1>
                    <br></br>
                    <br></br>
                    <h3 className="content-text">Welcome to my portfolio page. My name is George and I created this page while styding to become a junior web developer. From the menu, you can visit my LinkedIn profile and connect with me, open my CV or view the projects that I was involved with during my studies. Below you can read a few words about me.</h3>
                    <br></br>
                    <h4 className="content-text">Passionate about customer service and ways to deliver it as quickly and smoothly as possible. Computer literate and adaptable to any new tech challenge that comes in my way. Hoping to become a good Junior Web Developer. Efficient team leader and coach. Fascinated by the developments around cryptocurrency. Absolutely in love with traveling, meeting people and exploring places. Formula 1 fan. Proud supporter of the <a href="https://foldingathome.org/" target="_blank">Folding@Home</a> project.</h4>
                </div>
            </div>
        </div>       
    )
}

export default Hello
