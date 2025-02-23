import React from "react";
import './Project.css';

const Project = (props) => {
    return (
        <div className="Project">
            
            <img src={props.imgpath} alt={props.org} />
            <h3>{props.org}</h3>
            <h4>{props.loc}</h4>

            <a href={props.link} target="_blank" rel="noopener  noreferrer">
                <button class="project_button">View Details</button>
            </a>

        </div>
    )
}

export default Project;