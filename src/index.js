import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Hello from "./Hello"
import Footer from "./Footer"
import "./css/tailwind.css"
import {BrowserRouter} from "react-router-dom"
import Projects from "./Projects"
import {Switch, Route} from "react-router-dom"
import Contact from "./Contact"

const App = () => {
    return <div className="page-wrapper">
                <div className="page-content">
                        <Header />
                    <div id="main-content" className="content-wrapper">
                        <Switch>
                            <Route exact path="/" component={Hello}></Route>
                            <Route exact path="/projects" component={Projects}></Route>
                            <Route exact path="/contact" component={Contact}></Route>
                        </Switch>
                    </div>
                <Footer />
                </div>
            </div>
}

ReactDOM.render(
    (<BrowserRouter>
    <App />
    </BrowserRouter>), document.getElementById("app"))
