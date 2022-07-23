import React from 'react'
import { Helmet } from "react-helmet"
import ComponentInfo from '../../includes/ComponentInfo'
import Blockquote from '../../components/Blockquote'

function ComponentBlockquote() {
  return (
    <>
    <Helmet>
        <title>Component: Blockquote</title>
    </Helmet>
    <ComponentInfo title="Blockquote" summary="Quotation with optional author credit" />
    <Blockquote quote="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate natus adipisci aut error optio corrupti officiis numquam ex!" authorname="Author Name" />
    </>
  )
}

export default ComponentBlockquote