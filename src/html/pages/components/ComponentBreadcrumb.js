import React from 'react'
import { Helmet } from "react-helmet"
import ComponentInfo from '../../includes/ComponentInfo'
import Breadcrumb from '../../components/Breadcrumb'


function ComponentBreadcrumb() {
  return (
    <>
    <Helmet>
        <title>Component: Breadcrumb</title>
    </Helmet>
    <ComponentInfo title="Breadcrumb" summary="Indicate the current page's location within a navigational hierarchy" />
    <Breadcrumb />
    </>
  )
}

export default ComponentBreadcrumb