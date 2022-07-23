import React from 'react'
import { Helmet } from "react-helmet"
import ContentMedia from '../../components/ContentMedia'
import Footer from '../../components/Footer'
import Masthead from '../../components/Masthead'
import Navbar from '../../components/Navbar'
import Newsletter from '../../components/Newsletter'

function TemplateAbout() {
    return (
        <>
        <Helmet>
            <title>Template: About</title>
        </Helmet>
        <Navbar />
        <main id="main-content">
            <article>
                <Masthead title="About Us" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit purus ex, eget molestie quam rutrum vitae. In egestas faucibus magna, vel malesuada mi tempor a." />
                <ContentMedia title="Title would go here lorem ipsum" btntext="View More" image="placeholder.png" />
                <ContentMedia title="Title would go here lorem ipsum" btntext="View More" image="placeholder.png" class="c-content-media--invert" />
                <Newsletter subtitle="Subtitle would go here" title="Newsletter sign up title would go here" summary="Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language ocean and many more stuff and more more more" id="1" />
            </article>
        </main>
        <Footer />
        </>
    )
}

export default TemplateAbout