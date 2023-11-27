import { useState, useEffect } from "react";
import {Project_Box, Project_Container} from "./project_box.style";


const Project = ({title, id, description}) =>{
    
    return(
        <div >
        
                    <Project_Container>
                        <Project_Box key = {id}>
                            <h2>{title}</h2>
                            {description}


                        </Project_Box>


                    </Project_Container>

           
      
        </div>
    )
}

export default Project;