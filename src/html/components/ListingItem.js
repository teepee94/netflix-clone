import React, { useState, useEffect } from 'react'
import lazySizes from "lazysizes";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function ListingItem(c) {

    useEffect(() => {
		gsap.utils.toArray(".js-media-visibility").forEach((section) => {
			ScrollTrigger.create({
				toggleClass: "is-visible",
				trigger: section,
			})
		})
	}, [])
    return (
        <div className={`c-listing__item ${c.class ? c.class : "" }`}>
            <a href="" className="c-listing__item-link">
                <div className="c-listing__item-media-container">
                    {c.featured ?
                    <img className="c-listing__item-number" src={`/resources/images/listing-featured-${c.number}.svg`} alt="" /> : ""
                    }
                    <div className="c-listing__item-media-container js-media-visibility">
                        <picture className="c-listing__item-media-wrapper">
                            <img src={`https://image.tmdb.org/t/p/original/${c.image}`} className="c-listing__item-media lazyload" alt={c.title} />
                        </picture>
                    </div>
                </div>
                <h2 className="c-listing__item-title">{c.title}</h2>
            </a>
        </div>
    )
}

export default ListingItem