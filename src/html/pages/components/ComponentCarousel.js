import React from 'react'
import { Helmet } from "react-helmet"
import ComponentInfo from '../../includes/ComponentInfo'
import Carousel from '../../components/Carousel'

function ComponentCarousel() {
  return (
    <>
    <Helmet>
        <title>Component: Carousel</title>
    </Helmet>
    <ComponentInfo title="Carousel" summary="Used to display multiple items in the same place" />
    <Carousel />
    </>
  )
}

export default ComponentCarousel