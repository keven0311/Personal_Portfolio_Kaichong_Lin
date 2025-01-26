import React from 'react'
import { Link } from 'react-router-dom';
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "react-bootstrap/Button";

function SingleProject({projectData}) {
    const { title, thumbnail, gitHubUrl, projectUrl, description } = projectData;

  return (
    <div className="projectCard flex-1">
          <div className="project-image">
            <img alt="massproshop" src={thumbnail} />
          </div>
          <div className="project-right flex-1 flex flex-col gap-2">
            <h1 className="font-bold">
              <Link
                to={gitHubUrl}
                className="project-title text-zinc-500 "
              >
                {title}
              </Link>
            </h1>
            <h5 className="  lg:text-xl text-base">
              {description}
            </h5>
            <div className="flex gap-3">
              <a href= {gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
              >      
                <GitHubIcon className="githubicon icons text-zinc-500" />
              </a>
              <Button
                variant="outline-secondary"
                onClick={() =>{
                    if(projectUrl){
                        window.open(projectUrl,"_blank");
                    }else{
                        window.open(gitHubUrl,"_blank");
                    }
                }
                }
              >
                Visit
              </Button>
            </div>
          </div>
        </div>
  )
}

export default SingleProject