import "./intro.css";
import Man from "../../images/codeman.png";
const Intro = ()=>{
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Rohit Patran</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web developer</div>
                            <div className="i-title-item">Web design</div>
                            <div className="i-title-item">Software Developer</div>
                            <div className="i-title-item">Tech Enthusiast</div>
                        </div>
                    </div>
                    <div className="i-about-me">"I make websites and web applications.<br /><blockquote>Not a pro but striving for it !"</blockquote></div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img className="i-img" src={Man} alt="man pic"/>
            </div>
        </div>
    )
}

export default Intro;