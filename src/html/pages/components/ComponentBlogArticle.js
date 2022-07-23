import React, { useEffect } from 'react'
import { Helmet } from "react-helmet"
import ComponentInfo from '../../includes/ComponentInfo'
import BlogArticle from '../../components/BlogArticle'
import { FEBlogArticle } from "../../../resources/js/BlogArticleFE"

function ComponentBlogArticle() {

    useEffect(() => {
        FEBlogArticle.Init();
    }, [])

    return (
        <>
        <Helmet>
            <title>Component: Blog Article</title>
        </Helmet>
        <main id="main-content">
            <article id="js-blog-article-content">
                <ComponentInfo title="Accordion" summary="Blog article header & content" />
                <BlogArticle />
            </article>
        </main>
        </>
    )
}

export default ComponentBlogArticle