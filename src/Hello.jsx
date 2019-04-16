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
                    <p className="content-text">Passionate about customer service and ways to deliver it as quickly and smoothly as possible. Computer literate and adaptable to any new tech challenge that comes in my way. Hoping to become a good Web Developer. Efficient team leader and coach. Fascinated by the developments around cryptocurrency. Absolutely in love with traveling, meeting people and exploring places.</p>
                </div>

            </div>
        </div>
    )
}

export default Hello
