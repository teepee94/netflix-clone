import React from 'react'
import FacebookIcon from '../../resources/icons/FacebookIcon'
import GithubIcon from '../../resources/icons/GithubIcon'
import InstagramIcon from '../../resources/icons/InstagramIcon'
import TwitterIcon from '../../resources/icons/TwitterIcon'
import YoutubeIcon from '../../resources/icons/YoutubeIcon'

function Footer(c) {
    
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
                    <div className="c-footer__copyright-container">
                        <p className="c-footer__copyright">© <a href="https://tommyparkinson.com" className="c-footer__copyright-link">tommyparkinson</a> | Netflix Copy 2022</p>
                        <a href="https://github.com/teepee94/netflix-clone" className="c-footer__copyright-github" target="_blank">
                            <span className="u-visually-hide">View on Github</span>
                            <GithubIcon />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer