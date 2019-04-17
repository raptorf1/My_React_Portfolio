import React from "react"

const Contact = () => {
    return (
        <div class="w-full max-w-xs">
            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <p class="hidden"><label>Don’t fill this out if you're human: <input name="bot-field" /></label></p>
                    <p><label class="block text-grey-darker text-sm font-bold mb-2">E-Mail</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="text" name="email" /></p>
                </div>
                <div class="mb-6">
                    <label class="block text-grey-darker text-sm font-bold mb-2">Message</label>
                    <p><textarea class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" name="message" /></p>
                </div>
                <div class="flex items-center justify-between">
                    <p><button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send</button></p>
                    </div>
            </form>        
        </div>
            )
}

export default Contact
