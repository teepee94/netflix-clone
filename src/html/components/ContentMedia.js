import React from 'react'
import lazySizes from "lazysizes";

function ContentMedia(c) {
    return (
        <div className={`c-content-media ${c.class ? c.class : "" }`}>
            <div className="container">
                <div className="row">
                    <div className="c-content-media__content-container">
                        {c.title ?
                            <h2 className="c-content-media__title">{c.title}</h2> : ""}
                        <div className="c-content-media__content cms-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi nemo quis dignissimos voluptatem itaque nobis. Cupiditate, eius. Provident animi culpa saepe velit, itaque maxime porro quaerat quam ratione expedita.</p>
                        </div>
                        {c.btntext ?
                            <div className="c-content-media__btn-container">
                                <a href="" className="c-content-media__btn c-btn">{c.btntext}</a>
                            </div> : ""}
                    </div>
                    <div className="c-content-media__media-container">
                        <picture className="c-content-media__media-wrapper">
                            <source srcSet={`/resources/images/test/${c.image}?width=50`} data-srcset={`/resources/images/test/${c.image}?width=1000`} media="(min-width: 768px)" />
                            <source srcSet={`/resources/images/test/${c.image}?width=50`} data-srcset={`/resources/images/test/${c.image}?width=500`} media="(min-width: 300px)" />
                            <img src={`/resources/images/test/${c.image}?width=50`} className="c-content-media__media lazyload" alt="Placeholder image" />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentMedia