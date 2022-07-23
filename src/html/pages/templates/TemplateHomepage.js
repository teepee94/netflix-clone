import React from 'react'
import { Helmet } from "react-helmet"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Masthead from '../../components/Masthead'
import ContentMedia from '../../components/ContentMedia'
import Cta from '../../components/Cta'
import Carousel from '../../components/Carousel'
import BlogListing from '../../components/BlogListing'
import Newsletter from '../../components/Newsletter'

function TemplateHomepage() {
	return (
		<>
		<Helmet>
			<title>Template: Error</title>
		</Helmet>
		<Navbar />
		<main id="main-content">
			<article>
				<Masthead title="Page title would go here lorem ipsum" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit purus ex, eget molestie quam rutrum vitae. In egestas faucibus magna, vel malesuada mi tempor a." />
				<ContentMedia title="Title would go here" btntext="View More" image="placeholder.png" />
				<ContentMedia title="Title would go here" btntext="View More" image="placeholder.png" class="c-content-media--invert" />
				<Cta 
					title="Title would go here lorem ipsum"
					description="Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language ocean and many more stuff and more more more"
					link1="Button Text" link2="Button Text" />
				<Carousel />
				<BlogListing header="Featured articles" featured />
				<Newsletter />
			</article>
		</main>
		<Footer />
		</>
	)
}

export default TemplateHomepage