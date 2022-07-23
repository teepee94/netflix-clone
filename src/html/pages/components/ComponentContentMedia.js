import React from 'react'
import { Helmet } from "react-helmet"
import ContentMedia from '../../components/ContentMedia'
import ComponentInfo from '../../includes/ComponentInfo'

function ComponentContentMedia() {
  return (
    <>
    <Helmet>
        <title>Component: Content & Media</title>
    </Helmet>
    <ComponentInfo title="Content & Media" summary="Content block with media next to it" />
    <ContentMedia title="Title would go here" btntext="View More" image="placeholder.png" />

    <ComponentInfo title="Content & Media" summary="Inverted" />
    <ContentMedia title="Title would go here" btntext="View More" image="placeholder.png" class="c-content-media--invert" />
    </>
  )
}

export default ComponentContentMedia