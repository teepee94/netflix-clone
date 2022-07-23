import React from 'react'
import lazySizes from "lazysizes";

function ListingItem(c) {
    return (
        <div className={`c-listing__item ${c.class ? c.class : "" }`}>
            <a href="" className="c-listing__item-link">
                <div className="c-listing__item-media-container">
                    {c.featured ?
                    <img className="c-listing__item-number" src={`/resources/images/listing-featured-${c.number}.svg`} alt="" /> : ""
                    } 
                    <picture className="c-listing__item-media-wrapper">
                        <source srcSet={`https://image.tmdb.org/t/p/original/${c.image}?width=50`} data-src-set={`https://image.tmdb.org/t/p/original/${c.image}?width=1000`} media="(min-width: 768px)"/>
                        <source srcSet={`https://image.tmdb.org/t/p/original/${c.image}?width=50`} data-src-set={`https://image.tmdb.org/t/p/original/${c.image}?width=500`} media="(min-width: 300px)"/>
                        <img src={`https://image.tmdb.org/t/p/original/${c.image}?width=50`} className="c-listing__item-media lazyload" alt={c.title} />
                    </picture>
                </div>
                <h2 className="c-listing__item-title">{c.title}</h2>
            </a>
        </div>
    )
}

export default ListingItem