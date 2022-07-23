import React from 'react'
import { Helmet } from "react-helmet"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Masthead from '../../components/Masthead'
import Contact from '../../components/Contact'

function TemplateContact() {
    return (
        <>
        <Helmet>
            <title>Template: Contact</title>
        </Helmet>
        <Navbar />
        <main id="main-content">
            <article>
                <Masthead title="Contact" summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit purus ex, eget molestie quam rutrum vitae. In egestas faucibus magna, vel malesuada mi tempor a." />
				<Contact id="1" />
            </article>
        </main>
        <Footer />
		{                     
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					"url": "http://syndication-mvc-flat.syndicut.io",
					"contactPoint": [
						{
							"@type": "ContactPoint",
							"telephone": "+44-1865466060",
							"contactType": "customer service"
						}
					]
					})}
			</script>
		}
        </>
    )
}

export default TemplateContact