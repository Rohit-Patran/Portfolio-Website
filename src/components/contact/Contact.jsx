import "./Contact.css";

const Contact = ()=>{
    return (
        <div className="contact">
            <div className="contact-container">
                <h2 className="contact-title">Contact</h2>
                <div className="icon-container">
                    <a href="https://www.facebook.com/rohit.patran.1" target="_blank"><img className="c-img" src="https://www.transparentpng.com/thumb/facebook-logo/facebook-icon-transparent-background-20.png"/></a>
                    <a href="https://www.instagram.com/rohitpatra_07/" target="_blank"><img className="c-img" src="https://www.transparentpng.com/thumb/logo-instagram/kuQpOb-logo-instagram-images.png"/></a>
                    <a href="https://www.linkedin.com/in/rohit-patran-2a3829222/" target="_blank"><img className="c-img" src="https://www.transparentpng.com/thumb/linkedin/linkedin-basic-round-social-icon-png-5.png" /></a>
                    <a href="mailto:patranrohit99@gmail.com" target="_blank"><img className="c-img" src="https://www.transparentpng.com/thumb/email-logo/gmail-logo-png-UbCiBR.png" /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;