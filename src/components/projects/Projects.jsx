import "./Projects.css";
import Card from "../../images/card layout.png";
import form from "../../images/form-page.png";
import web from "../../images/digital agency mobile.png";
const Projects = ()=>{
    return <div className="proj">
        <h2 className="proj-main-title">Projects</h2>
        <div className="proj-content">
        <div className="proj-list">
            <a href="https://rohit-patran.github.io/Digital-Agency-Website/" target="_blank"><h3 className="proj-title">Digital Agency Website</h3></a>
            <img src={web} className="proj-pic" />
        </div>
        <div className="proj-list">           
            <a href="https://rohit-patran.github.io/Form-Page/" target="_blank"><h3 className="proj-title">Form Page</h3></a>
            <img src={form} className="proj-pic" />
        </div>
        <div className="proj-list">           
            <a href="https://rohit-patran.github.io/Card-Layout-Fully-Responsive-using-HTML-SASS-/" target="_blank"><h3 className="proj-title">Payment Card</h3></a>
            <img src={Card} className="proj-pic" />
        </div>
        </div>
    </div>
}

export default Projects;