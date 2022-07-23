import React from 'react'

function Cta(c) {
    return (
        <div className={`c-cta ${c.class ? c.class : "" }`}>
            <div className="container">
                <div className="row">
                    <div className="c-cta__content-container">
                        {c.title ?
                            <h2 className="c-cta__title">{c.title}</h2> : ""}
                        {c.description ?
                            <div className="c-cta__summary-container cms-content">
                                <p>{c.description}</p>
                            </div> : ""}
                        <div className="c-cta__links-container">
                            {c.link1 ?
                                <a href="" className="c-cta__link c-btn">{c.link1}</a> : ""}
                            {c.link2 ?
                                <a href="" className="c-cta__link c-btn c-btn--primary">{c.link2}</a> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta