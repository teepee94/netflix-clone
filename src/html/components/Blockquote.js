import React from 'react'

function Blockquote(c) {
    return (
        <blockquote className={`c-blockquote ${c.class ? c.class : "" }`}>
            <div className="container">
                <div className="row">
                    <div className="c-blockquote__content-container">
                        <p className="c-blockquote__quote">{c.quote}</p>
                        {c.authorname ? 
                        <footer className="c-blockquote__author">
                            <p className="c-blockquote__author-name">{c.authorname}</p>
                        </footer> : ""
                        }
                    </div>
                </div>
            </div>
        </blockquote>
    )
}

export default Blockquote