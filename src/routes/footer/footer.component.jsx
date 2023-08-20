import React from "react";
import './footer.styles.scss'
import {ReactComponent as TwitterSvg} from "../../assets/logos/twitter.svg"
import {ReactComponent as InstagramSvg} from "../../assets/logos/instagram.svg"
import {ReactComponent as Facebook} from "../../assets/logos/facebook.svg"

const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-column'>
                    <h2>IronCraft.com</h2>
                    <p>About us</p>
                    <p>FAQ</p>
                    <p>Suppliers</p>
                </div>
                <div className='footer-column'>
                    <h2>Follow us</h2>
                    <a href='https://www.instagram.com/ironcraft.me/' target='_blanck'>
                        <div className="social-media-svg">
                            <InstagramSvg className="instagram"/>
                        </div>
                    </a>
                    <a href='https://twitter.com/ironcraft_me' target='_blanck'>
                        <div className="social-media-svg">
                            <TwitterSvg className="twitter"/>
                        </div>
                    </a>    
                    <a href='https://www.facebook.com/pages/IronCraft.ro/106323347601495' target='_blanck'>
                        <div className="social-media-svg">
                            <Facebook className="facebook"/>
                        </div>
                    </a>                    
                </div>
                    <div className='footer-column'>
                        <h2>Contact</h2>
                        <p>On mobile: +40 770 171 369</p>
                        <p>On email: ironcraft@email.com</p>
                        <p>Via contact page: <a href='contact'>Contact</a></p>
                    </div>
                </div>
        </div>
    )
}

export default Footer