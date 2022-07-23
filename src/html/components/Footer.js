import React, { useEffect } from 'react'
import { FECookiebar } from '../../resources/js/CookiebarFE'
import FacebookIcon from '../../resources/icons/FacebookIcon'
import InstagramIcon from '../../resources/icons/InstagramIcon'
import TwitterIcon from '../../resources/icons/TwitterIcon'
import YoutubeIcon from '../../resources/icons/YoutubeIcon'
import Cookiebar from "../components/Cookiebar"

function Footer(c) {

    useEffect(() => {
        FECookiebar.Init()
    }, [])
    
    return (
        <>
        <footer className={`c-footer ${c.class ? c.class : "" }`}>
            <div className="container">
                <div className="row">
                    <ul className="c-footer__social-items">
                        <li className="c-footer__social-item">
                            <a href="" className="c-footer__social-item-link" rel="noopener" target="_blank">
                                <span className="u-visually-hide">Visit us on Facebook</span>
                                <FacebookIcon />
                            </a>
                        </li>
                        <li className="c-footer__social-item">
                            <a href="" className="c-footer__social-item-link" rel="noopener" target="_blank">
                                <span className="u-visually-hide">Visit us on Instagram</span>
                                <InstagramIcon />
                            </a>
                        </li>
                        <li className="c-footer__social-item">
                            <a href="" className="c-footer__social-item-link" rel="noopener" target="_blank">
                                <span className="u-visually-hide">Visit us on Twitter</span>
                                <TwitterIcon />
                            </a>
                        </li>
                        <li className="c-footer__social-item">
                            <a href="" className="c-footer__social-item-link" rel="noopener" target="_blank">
                                <span className="u-visually-hide">Visit us on YouTube</span>
                                <YoutubeIcon />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="c-footer__cols">
                        <div className="row">
                            <div className="c-footer__col">
                                <ul className="c-footer__menu-items">
                                    <li className="c-footer__menu-item"><a href="" className="c-footer__menu-item-link">Audio and Subtitles</a></li>
                                    <li className="c-footer__menu-item"><a href="" className="c-footer__menu-item-link">Media Centre</a></li>
                                    <li className="c-footer__menu-item"><a href="" className="c-footer__menu-item-link">Privacy</a></li>
                                    <li className="c-footer__menu-item"><a href="" className="c-footer__menu-item-link">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="c-footer__col">
                                <ul className="c-footer__menu-items">
                                    <li className="c-footer__menu-item"><a href="" className="c-footer__menu-item-link">Audio Description</a></li>
                                    <li className="c-footer__menu-item"><a href="" className="c-footer__menu-item-link">Investor Relations</a></li>
                                    <li className="c-footer__menu-item"><a href="" className="c-footer__menu-item-link">Legal Notices</a></li>
                                </ul>
                            </div>
                            <div className="c-footer__col">
                                <ul className="c-footer__menu-items">
                                    <li className="c-footer__menu-item"><a href="" className="c-footer__menu-item-link">Help Centre</a></li>
                                    <li className="c-footer__menu-item"><a href="" className="c-footer__menu-item-link">Jobs</a></li>
                                    <li className="c-footer__menu-item"><a href="" className="c-footer__menu-item-link">Cookie Preferences</a></li>
                                </ul>
                            </div>
                            <div className="c-footer__col">
                                <ul className="c-footer__menu-items">
                                    <li className="c-footer__menu-item"><a href="" className="c-footer__menu-item-link">Gift Cards</a></li>
                                    <li className="c-footer__menu-item"><a href="" className="c-footer__menu-item-link">Terms of Use</a></li>
                                    <li className="c-footer__menu-item"><a href="" className="c-footer__menu-item-link">Corporate Information</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="c-footer__legal">
                        <p className="c-footer__copyright">© tommyparkinson netflix clone 2022</p>
                    </div>
                </div>
            </div>
        </footer>
        <Cookiebar />
        </>
    )
}

export default Footer