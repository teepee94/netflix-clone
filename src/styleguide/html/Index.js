import React from "react"
import "../resources/sass/styleguide.scss"

function Index(c) {
    return (
        <div className="container" style={{color: c.styleguideTextColor}}>
            <div className="row">
                <div className="style-logo">
                    <img src="/resources/images/test/netflix-logo.avif" alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="style-section">
                    <h2 className="heading-h1">Styleguide</h2>
                    <ul style={{marginTop: "20px"}}>
                        <li><a href="styleguide">Styleguide</a></li>
                        <li><a href="grid">Grid Layout</a></li>
                    </ul>
                </div>
                <div className="style-section">
                    <h2 className="heading-h1">Templates</h2>
                    <ul style={{marginTop: "20px"}}>
                        <li><a href="/template-about">About</a></li>
                        <li><a href="/template-blog-article">Blog Article</a></li>
                        <li><a href="/template-blog-index">Blog Index</a></li>
                        <li><a href="/template-contact">Contact</a></li>
                        <li><a href="/template-error">Error</a></li>
                        <li><a href="/template-homepage">Homepage</a></li>
                        <li><a href="/template-team">Team</a></li>
                    </ul>
                </div>
                <div className="style-section">
                    <h2 className="heading-h1">Components</h2>
                    <ul style={{marginTop: "20px"}}>
                        <li><a href="/component-blog-article">Blog Article</a></li>
                        <li><a href="/component-listing">Listing</a></li>
                        <li><a href="/component-cookiebar">Cookie Bar</a></li>
                        <li><a href="/component-footer">Footer</a></li>
                        <li><a href="/component-masthead">Masthead</a></li>
                        <li><a href="/component-navbar">Navbar</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="style-footer">
                    <a href="https://tommyparkinson.com"><img src="/resources/images/test/client-logo.svg" alt="Syndicut"/></a>
                </div>
            </div>
        </div>
    )
}

export default Index