import React from 'react'
import { Helmet } from "react-helmet"
import Cta from '../../components/Cta'
import ComponentInfo from '../../includes/ComponentInfo'

function ComponentCta() {
  return (
    <>
    <Helmet>
        <title>Component: Call to Action</title>
    </Helmet>
    <ComponentInfo title="Call to Action" summary="Promotional message with links" />
    <Cta 
        title="Title would go here lorem ipsum"
        description="Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language ocean and many more stuff and more more more"
        link1="Button Text" link2="Button Text" />
    </>

  )
}

export default ComponentCta