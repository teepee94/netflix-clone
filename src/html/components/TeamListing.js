import React from 'react'
import TeamListingItem from './TeamListingItem'

function TeamListing(c) {
    return (
        <div className={`c-team-listing ${c.class ? c.class : "" }`}>
            <div className="container">
                <div className="row">
                    <TeamListingItem name="Team Member Name" jobtitle="Job Title" image="placeholder.png" />
                    <TeamListingItem name="Team Member Name" jobtitle="Job Title" image="placeholder.png" />
                    <TeamListingItem name="Team Member Name" jobtitle="Job Title" image="placeholder.png" />
                    <TeamListingItem name="Team Member Name" jobtitle="Job Title" image="placeholder.png" />
                    <TeamListingItem name="Team Member Name" jobtitle="Job Title" image="placeholder.png" />
                    <TeamListingItem name="Team Member Name" jobtitle="Job Title" image="placeholder.png" />
                </div>
            </div>
        </div>
    )
}

export default TeamListing