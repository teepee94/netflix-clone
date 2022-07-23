import React, { useEffect } from 'react'
import { Helmet } from "react-helmet"
import ComponentInfo from '../../includes/ComponentInfo'
import Accordion from '../../components/Accordion'
import { FEAccordion } from "../../../resources/js/AccordionFE"

function ComponentAccordion() {

	useEffect(() => {
		FEAccordion.Init();
	}, [])

	return (
		<>
		<Helmet>
            <title>Component: Accordion</title>
        </Helmet>
		<ComponentInfo title="Accordion" summary="Vertically stacked list of collapsible items" />
		<Accordion id="1" />
		</>
	)
}

export default ComponentAccordion