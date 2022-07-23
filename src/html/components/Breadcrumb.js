import React from 'react'

function Breadcrumb(c) {
    return (
        <nav className={`c-breadcrumb ${c.class ? c.class : "" }`} aria-label="Breadcrumb">
            <div className="container">
                <div className="row">
                    <div className="c-breadcrumb__container">
                        <span className="u-visually-hide" id="label-breadcrumb">You are here:</span>
                        <ol className="c-breadcrumb__items" aria-labelledby="label-breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList">
                            <li className="c-breadcrumb__item" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                <a href="/" itemID="/" className="c-breadcrumb__link" itemScope itemType="http://schema.org/Thing" itemProp="item">
                                    <span itemProp="name">Home</span>
                                </a>
                                <meta itemProp="position" content="1" />
                            </li>
                            <li className="c-breadcrumb__item" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                <a href="/template-blog-index.html" itemID="/template-blog-index" className="c-breadcrumb__link" itemScope itemType="http://schema.org/Thing" itemProp="item">
                                    <span itemProp="name">Blog</span>
                                </a>
                                <meta itemProp="position" content="2" />
                            </li>
                            <li className="c-breadcrumb__item" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                <span itemID="/template-blog-article" className="c-breadcrumb__link is-active" itemScope itemType="http://schema.org/Thing" itemProp="item">
                                    <span itemProp="name">Blog Article</span>
                                </span>
                                <meta itemProp="position" content="3" />
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Breadcrumb