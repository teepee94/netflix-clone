import React from 'react'

function Masthead(c) {
  return (
    <div className={`c-masthead ${c.class ? c.class : "" }`}>
        <div className="container-fluid">
            <div className="row">
                <div className="c-masthead__container">
                    <h1 className="c-masthead__title">{c.title}</h1>
                    {c.summary ?
                        <p className="c-masthead__summary">{c.summary}</p> : ""}
					<div className="c-masthead__btn-container">
						<a href="" className="c-masthead__btn c-btn">Play</a>
						<a href="" className="c-masthead__btn c-btn c-btn--grey">More Info</a>
					</div>
                </div>
            </div>
        </div>
		<div className="c-masthead__media-container">
			<picture className="c-masthead__media-wrapper">
				<source srcSet={`https://image.tmdb.org/t/p/original/${c.image}?width=50`} data-src-set={`https://image.tmdb.org/t/p/original/${c.image}?width=2000`} media="(min-width: 768px)"/>
				<source srcSet={`https://image.tmdb.org/t/p/original/${c.image}?width=50`} data-src-set={`https://image.tmdb.org/t/p/original/${c.image}?width=700`} media="(min-width: 300px)"/>
				<img src={`https://image.tmdb.org/t/p/original/${c.image}?width=50`} className="c-masthead__media lazyload" alt="Placeholder image" />
			</picture>
		</div>
    </div>
  )
}

export default Masthead