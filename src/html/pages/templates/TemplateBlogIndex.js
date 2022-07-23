import React from 'react'
import { Helmet } from "react-helmet"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogListing from '../../components/BlogListing'
import Masthead from '../../components/Masthead'
import Pagination from '../../components/Pagination'
import Newsletter from '../../components/Newsletter'

function TemplateBlogIndex() {
    return (
        <>
        <Helmet>
            <title>Template: Blog Index</title>
        </Helmet>
        <Navbar />
        <main id="main-content">
            <article>
                <Masthead title="Blog Index" />
                <BlogListing />
				<Pagination />
				<Newsletter />
            </article>
        </main>
        <Footer />
        </>
    )
}

export default TemplateBlogIndex