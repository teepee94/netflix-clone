import React from 'react'
import lazySizes from "lazysizes";

function BlogListingItem(c) {
    return (
        <div className={`c-blog-listing__item ${c.class ? c.class : "" }`}>
            <a href="" className="c-blog-listing__item-link">
                <div className="c-blog-listing__item-media-container">
                    <picture className="c-blog-listing__item-media-wrapper">
                        <source srcSet={`/resources/images/test/${c.image}?width=50`} data-src-set={`/resources/images/test/${c.image}?width=1000`} media="(min-width: 768px)"/>
                        <source srcSet={`/resources/images/test/${c.image}?width=50`} data-src-set={`/resources/images/test/${c.image}?width=500`} media="(min-width: 300px)"/>
                        <img src={`/resources/images/test/${c.image}?width=50`} className="c-blog-listing__item-media lazyload" alt="Placeholder image" />
                    </picture>
                </div>
                <h2 className="c-blog-listing__item-title">{c.title}</h2>
                <time className="c-blog-listing__item-date" dateTime="2021-01-01">1st Jan 2021</time>
                <p className="c-blog-listing__item-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum scelerisque ex. Pellentesque feugiat id felis at ornare. Ut porta orci quis rutrum eleifend.</p>
            </a>
        </div>
    )
}

export default BlogListingItem