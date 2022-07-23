import React from "react"
import { Helmet } from "react-helmet"

function Grid(c) {
	return (
		<>
		<Helmet>
			<title>Grid</title>
		</Helmet>
		<div className="container">
			<div className="row">
				<div className="style-col">
					<h1 className="heading-h0" style={{color: c.styleguideTextColor, marginTop: "40px"}}>Grid </h1>
				</div>
			</div>
			<br /><br /><br /><br />
			<div className="row">
				<div className="style-grid style-grid--12"></div>
			</div>
			<div className="row">
				<div className="style-grid style-grid--6"></div>
				<div className="style-grid style-grid--6"></div>
			</div>
			<div className="row">
				<div className="style-grid style-grid--4"></div>
				<div className="style-grid style-grid--4"></div>
				<div className="style-grid style-grid--4"></div>
			</div>
			<div className="row">
				<div className="style-grid style-grid--3"></div>
				<div className="style-grid style-grid--3"></div>
				<div className="style-grid style-grid--3"></div>
				<div className="style-grid style-grid--3"></div>
			</div>
			<div className="row">
				<div className="style-grid style-grid--2"></div>
				<div className="style-grid style-grid--2"></div>
				<div className="style-grid style-grid--2"></div>
				<div className="style-grid style-grid--2"></div>
				<div className="style-grid style-grid--2"></div>
				<div className="style-grid style-grid--2"></div>
			</div>
			<div className="row">
				<div className="style-grid style-grid--1"></div>
				<div className="style-grid style-grid--1"></div>
				<div className="style-grid style-grid--1"></div>
				<div className="style-grid style-grid--1"></div>
				<div className="style-grid style-grid--1"></div>
				<div className="style-grid style-grid--1"></div>
				<div className="style-grid style-grid--1"></div>
				<div className="style-grid style-grid--1"></div>
				<div className="style-grid style-grid--1"></div>
				<div className="style-grid style-grid--1"></div>
				<div className="style-grid style-grid--1"></div>
				<div className="style-grid style-grid--1"></div>
			</div>
		</div>
		</>
	)
}

export default Grid