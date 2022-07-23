import React from 'react'
import { Helmet } from "react-helmet"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Masthead from '../../components/Masthead'
import Newsletter from '../../components/Newsletter'
import TeamListing from '../../components/TeamListing'

function TemplateTeam() {
	return (
		<>
		<Helmet>
			<title>Template: Error</title>
		</Helmet>
		<Navbar />
		<main id="main-content">
			<article>
				<Masthead title="Team" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit purus ex, eget molestie quam rutrum vitae. In egestas faucibus magna, vel malesuada mi tempor a." />
				<TeamListing />
				<Newsletter />
			</article>
		</main>
		<Footer />
		</>
	)
}

export default TemplateTeam