import React from 'react'
import lazySizes from "lazysizes";

function Media(c) {
    return (
        <div className={`c-media ${c.class ? c.class : "" }`}>
            <div className="container">
                <div className="row">
                    <figure className="c-media__container">
                        {c.image ?
                            <picture class="c-media__wrapper">
                                <source srcSet={`/resources/images/test/${c.image}?width=50`} data-src-set={`/resources/images/test/${c.image}?width=1000`} media="(min-width: 768px)" />
                                <source srcSet={`/resources/images/test/${c.image}?width=50`} data-src-set={`/resources/images/test/${c.image}?width=500`} media="(min-width: 300px)" />
                                <img src={`/resources/images/test/${c.image}?width=50`} className="c-media__image lazyload" alt="Placeholder image" />
                            </picture> : ""}
                        {c.video ?
                            <div className="c-media__wrapper">
                                <iframe width="560" height="315" src={c.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div> : ""}
                        {c.caption ?
                            <figcaption className="c-media__caption">{c.caption}</figcaption> : ""}
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Media