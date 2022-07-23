import React from 'react'
import { Helmet } from "react-helmet"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Masthead from '../../components/Masthead'
import Content from '../../components/Content'

function TemplateError() {
	return (
		<>
		<Helmet>
			<title>Template: Error</title>
		</Helmet>
		<Navbar />
		<main id="main-content">
			<article>
				<Masthead title="Page Error" />
				<Content error />
			</article>
		</main>
		<Footer />
		</>
	)
}

export default TemplateError