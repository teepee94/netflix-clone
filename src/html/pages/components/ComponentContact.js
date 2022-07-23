import React from 'react'
import { Helmet } from "react-helmet"
import ComponentInfo from '../../includes/ComponentInfo'
import Contact from '../../components/Contact'

function ComponentContact() {
  return (
    <>
    <Helmet>
        <title>Component: Carousel</title>
    </Helmet>
    <ComponentInfo title="Contact" summary="Contact form with contact details" />
    <Contact id="1" />

    <ComponentInfo title="Contact" summary="With error message" />
    <Contact id="2" errormessage />

    <ComponentInfo title="Contact" summary="With success message" />
    <Contact id="3" successmessage />
    </>
  )
}

export default ComponentContact