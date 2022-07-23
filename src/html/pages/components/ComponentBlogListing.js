import React from 'react'
import { Helmet } from "react-helmet"
import ComponentInfo from '../../includes/ComponentInfo'
import BlogListing from '../../components/BlogListing'

function ComponentBlogListing() {
  return (
    <>
    <Helmet>
        <title>Component: Blog Listing</title>
    </Helmet>
    <ComponentInfo title="Blog Listing" summary="A list of blog articles" />
    <BlogListing />


    <ComponentInfo title="Blog Listing" summary="Filtered articles" />
    <BlogListing filtered />

    <ComponentInfo title="Blog Listing" summary="Latest/Featured articles" />
    <BlogListing header="Featured articles" featured />
    </>
  )
}

export default ComponentBlogListing