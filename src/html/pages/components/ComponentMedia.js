import React from 'react'
import { Helmet } from "react-helmet"
import Media from '../../components/Media'
import ComponentInfo from '../../includes/ComponentInfo'

function ComponentMedia() {
  return (
    <>
    <Helmet>
        <title>Component: Media</title>
    </Helmet>
    <ComponentInfo title="Media" summary="Image with optional caption" />
    <Media image="placeholder.png" caption="Caption would go here" />
    
    <ComponentInfo title="Media" summary="With video" />
    <Media video="https://www.youtube.com/embed/yvX1WkFFtQI" caption="Caption would go here" />
    </>
  )
}

export default ComponentMedia