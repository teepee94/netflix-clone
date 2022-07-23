import React from 'react'
import { Helmet } from "react-helmet"
import TeamListing from '../../components/TeamListing'
import ComponentInfo from '../../includes/ComponentInfo'

function ComponentTeamListing() {
    return (
        <>
        <Helmet>
            <title>Component: Team Listing</title>
        </Helmet>
        <ComponentInfo title="Team Listing" summary="A list of team members" />
        <TeamListing />
        </>
    )
}

export default ComponentTeamListing