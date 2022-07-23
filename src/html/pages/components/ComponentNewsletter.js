import React from 'react'
import { Helmet } from "react-helmet"
import Newsletter from '../../components/Newsletter'
import ComponentInfo from '../../includes/ComponentInfo'

function ComponentNewsletter() {
    return (
        <>
        <Helmet>
            <title>Component: Newsletter</title>
        </Helmet>
        <ComponentInfo title="Newsletter" summary="Mailing list sign up form" />
        <Newsletter subtitle="Subtitle would go here" title="Newsletter sign up title would go here" summary="Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language ocean and many more stuff and more more more" id="1" />

        <ComponentInfo title="Newsletter" summary="Mailing list sign up form" />
        <Newsletter subtitle="Subtitle would go here" title="Newsletter sign up title would go here" summary="Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language ocean and many more stuff and more more more" id="2" errormessage />

        <ComponentInfo title="Newsletter" summary="Mailing list sign up form" />
        <Newsletter subtitle="Subtitle would go here" title="Newsletter sign up title would go here" summary="Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language ocean and many more stuff and more more more" id="3" successmessage />
        </>
    )
}

export default ComponentNewsletter