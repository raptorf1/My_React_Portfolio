import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Hello from "./Hello"
import Footer from "./Footer"
import "./css/tailwind.css"

const App = () => {
    return <div className="page-wrapper">
                <div className="page-content">
                        <Header />
                    <div className="content-wrapper">
                        <Hello />
                    </div>
                <Footer />
                </div>
            </div>
}

ReactDOM.render(<App />, document.getElementById("app"))
