import React from 'react'
import lazySizes from "lazysizes";

function TeamListingItem(c) {
    return (
        <div className={`c-team-listing__item ${c.class ? c.class : "" }`}>
            <a href="" className="c-team-listing__item-link">
                <div className="c-team-listing__item-media-container">
                    <picture className="c-team-listing__item-media-wrapper">
                        <source srcsSet={`/resources/images/test/${c.image}?width=50`} data-srcset={`/resources/images/test/${c.image}?width=1000`} media="(min-width: 768px)" />
                        <source srcet={`/resources/images/test/${c.image}?width=50`} data-srcset={`/resources/images/test/${c.image}?width=500`} media="(min-width: 300px)" />
                        <img src={`/resources/images/test/${c.image}?width=50`} className="c-team-listing__item-media lazyload" alt="Placeholder image" />
                    </picture>
                </div>
                <h2 className="c-team-listing__item-name">{c.name}</h2>
                <h3 className="c-team-listing__item-job-title">{c.jobtitle}</h3>
            </a>
        </div>
    )
}

export default TeamListingItem