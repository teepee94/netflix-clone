import React from 'react'
import { Helmet } from "react-helmet"
import Logos from '../../components/Logos'
import ComponentInfo from '../../includes/ComponentInfo'

function ComponentLogos() {
  return (
    <>
    <Helmet>
        <title>Component: Logos</title>
    </Helmet>
    <ComponentInfo title="Logos" summary="Grid of logos" />
    <Logos />
    </>
  )
}

export default ComponentLogos