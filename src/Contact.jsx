import React from "react"

const Contact = () => {
    return (
        <div className="content-wrapper">

            <div className="flex items-center flex-wrap mb-4">

                <div className="w-full lg:w-1/4 md:w-1/2">
                    <img src="./src/data/contactme.png" alt="Contact Me Logo"></img>
                </div>
                
                <div className="w-full lg:w-3/4 md:w-1/2">
                    <form name="contact" method="POST" className="bg-yellow-light shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <input type="hidden" name="form-name" value="contact" />
                    <div className="mb-4">
                        <p className="hidden"><label>Don’t fill this out if you're human: <input name="bot-field" /></label></p>
                        <p><label className="block text-grey-darker text-sm font-bold mb-2">E-Mail</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="text" name="email" /></p>
                    </div>
                    <div className="mb-6">
                        <label className="block text-grey-darker text-sm font-bold mb-2">Message</label>
                        <p><textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" name="message" /></p>
                    </div>
                    <div className="flex items-center justify-center">
                        <p><button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send</button></p>
                    </div>
                </form>        
                </div>
            </div>
        </div>
            )
}

export default Contact
