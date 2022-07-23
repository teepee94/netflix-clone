import React from 'react'

function Logos(c) {
    return (
        <div className={`c-logos ${c.class ? c.class : "" }`}>
            <div className="container">
                <div className="row">
                    {c.title ?
                        <h2 className="c-logos__title">#{c.title}</h2> : ""}
                    <div className="c-logos__grid">
                        <img src="/resources/images/test/ebay.svg" alt="" className="c-logos__logo" loading="lazy" />
                        <img src="/resources/images/test/cnn.svg" alt="" className="c-logos__logo" loading="lazy" />
                        <img src="/resources/images/test/google.svg" alt="" className="c-logos__logo" loading="lazy" />
                        <img src="/resources/images/test/cisco.svg" alt="" className="c-logos__logo" loading="lazy" />
                        <img src="/resources/images/test/airbnb.svg" alt="" className="c-logos__logo" loading="lazy" />
                        <img src="/resources/images/test/uber.svg" alt="" className="c-logos__logo" loading="lazy" />
                        <img src="/resources/images/test/ebay.svg" alt="" className="c-logos__logo" loading="lazy" />
                        <img src="/resources/images/test/cnn.svg" alt="" className="c-logos__logo" loading="lazy" />
                        <img src="/resources/images/test/google.svg" alt="" className="c-logos__logo" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logos