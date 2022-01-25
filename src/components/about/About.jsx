import "./About.css";
import illus from "../../images/coder.png"
const About = ()=>{
    return(
        <div className="about">
            <div className="a-left">
                <div className="a-card-bg"></div>
                <div className="a-card">
                    <img className="a-img" src={illus} alt="coder-pic"/>
                </div>
            </div>
            <div className="a-right">
                <div className="a-right-container"></div>
                <div className="a-right-wrapper">
                    <h2 className="about-me">About Me</h2>
                    <div className="a-desc">
                            I am web developer from India (🇮🇳). I work on web projects including websites and web Applications.I Code and and love Music.
                            <h4>Details</h4> 
                            <p><em>School: <ul>
                                <li><u>St. Xaviers's School,Bokaro steel city,Jharkhand</u></li>                  
                                <li><u>Chinmaya Vidyalaya,Bokaro steel city,Jharkhand</u></li>
                                </ul></em></p>
                            <p><em>College: <u>Silicon Institute of Technology,Bhubaneshwar,Odisha</u></em></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;