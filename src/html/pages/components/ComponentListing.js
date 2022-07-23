import React from 'react'
import { Helmet } from "react-helmet"
import ComponentInfo from '../../includes/ComponentInfo'
import Listing from '../../components/Listing'

function ComponentListing() {
  return (
    <>
    <Helmet>
        <title>Component: Listing</title>
    </Helmet>
    <ComponentInfo title="Listing" summary="A list of blog articles" />
    <Listing header="Continue Watching for Tommy" />

    <ComponentInfo title="Listing" summary="Latest/Featured articles" />
    <Listing header="Featured articles" featured />
    </>
  )
}

export default ComponentListing