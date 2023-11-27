import React from "react";
import Project from "../project_box/project_box.component";
import { Project_Container } from "../project_box/project_box.style";

const ProjectList = () => {
    const projects = [
        { id: 1, title: 'Web Page', description: 'A small clothing website' },
        { id: 2, title: 'Game', description: 'A clone of a 90s FPS shooter using Python' },
        { id: 3, title: 'School', description: 'Projects made during my years in University' }
    ];

    return (
        <div>
            <h1>Welcome</h1>
            <Project_Container>
                {projects.map((project) => (
                    <Project key={project.id} id={project.id} title={project.title} description={project.description} />
                ))}
            </Project_Container>
        </div>
    );
};

export default ProjectList;