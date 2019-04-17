import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import { UndrawBitcoinP2P } from "react-undraw-illustrations"

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        axios.get("./src/data/projects.json")
            .then(response => {
                this.setState({
                    projects: response.data
                })
            })
    }

    render () {
        const projects = this.state.projects
        let projectsList

        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <ProjectCard project={project} />
                    </div>
                )
            })
        }

        return(
            <div className="content-wrapper">
                <div className="flex mb-4">
                    <div className="w-1/4">
                        <UndrawBitcoinP2P />
                    </div>
                <div className="w-3/4">
                    <h1 className="text-center">My Projects</h1>
                    <br></br>
                    <br></br>
                    <p>These are the projects I have been working on, during my 3 months at <a href="https://craftacademy.se/english/" target="_blank">Craft Academy</a>.</p>
                    <br></br>
                    <p>The code base of all the projects shown below, can be found in my GitHub account with a click on the <i><b>GitHub Details</b></i> button.</p>
                    <br></br>
                    <p>Projects that are deployed online, can be accessed by clicking the <i><b>Deployed Website</b></i> button. For projects not deployed, the button leads to the GitHub repository of the project.</p>
                    <br></br>
                    <p>The repository for this website can be found <a href="https://github.com/raptorf1/My_React_Portfolio" target="_blank">here</a>.</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {projectsList}
            </div>
            </div>
        )
    }
};

export default Projects
