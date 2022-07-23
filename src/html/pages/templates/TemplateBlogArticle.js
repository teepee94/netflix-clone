import React from 'react'
import { Helmet } from "react-helmet"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogArticle from '../../components/BlogArticle'
import Listing from '../../components/Listing'

function TemplateBlogArticle() {
    return (
        <>
        <Helmet>
            <title>Template: Blog Article</title>
        </Helmet>
        <Navbar />
        <main id="main-content">
            <article id="js-blog-article-content">
                <BlogArticle />
                <Listing header="Featured articles" featured />
            </article>
        </main>
        <Footer />
        </>
    )
}

export default TemplateBlogArticle