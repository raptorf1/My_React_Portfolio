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
                    <h1 className="content-text text-center">About Me</h1>
                    <br></br>
                    <br></br>
                    <h3 className="content-text leading-normal">Welcome to my portfolio page! My name is George and I created this page while styding to become a junior web developer. From the menu, you can visit my LinkedIn profile and connect with me, open my CV or view the projects that I was involved with during my studies. You can send me a message by filling out the <b><i>Contact Me</i></b> form. Below you can find a few information about me.</h3>
                    <br></br>
                    <br></br>
                    <ul>
                        <li className="content-lists">Passionate about customer service and ways to deliver it as quickly and smoothly as possible.</li>
                        <li className="content-lists">Computer literate and adaptable to any new tech challenge that comes in my way.</li>
                        <li className="content-lists">Junior web developer.</li>
                        <li className="content-lists">Efficient team leader and coach.</li>
                        <li className="content-lists">Fascinated by the developments around cryptocurrency.</li>
                        <li className="content-lists">Absolutely in love with traveling, meeting people and exploring places.</li>
                        <li className="content-lists">Formula 1 fan.</li>
                        <li className="content-lists">Supporter of the <a href="https://foldingathome.org/" target="_blank">Folding@Home</a> project.</li>
                    </ul>
                </div>
            </div>
        </div>       
    )
}

export default Hello
