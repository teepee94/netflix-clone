import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Masthead from '../../components/Masthead'
import Listing from '../../components/Listing'
import axios from "../../../resources/js/TMDB/Axios"
import requests from '../../../resources/js/TMDB/Requests'

function TemplateHomepage() {

	const [masthead, setMasthead] = useState([]);

	useEffect(() => {
		async function getMastheadData() {
			const request = await axios.get(requests.netflixOriginals);

			setMasthead(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);

			return request;
		}

		getMastheadData();
	}, [])
	

	console.log(masthead);
	return (
		<>
		<Helmet>
			<title>Template: Homepage</title>
		</Helmet>
		<Navbar />
		<main id="main-content">
			<article>
				<Masthead title={masthead.name} logo="masthead-title-logo.webp" image={masthead.backdrop_path} summary={masthead.overview} />
				<Listing endpoint={requests.topRated} featured header="Top 10 TV Programmes in the UK Today" class="c-listing--featured" />
				<Listing endpoint={requests.netflixOriginals} header="Netflic Originals" />
				<Listing endpoint={requests.trending} header="Currenty Trending" />
				<Listing endpoint={requests.actionMovies} header="Action Movies" />
				<Listing endpoint={requests.comedyMovies} header="Comedies" />
				<Listing endpoint={requests.documentaries} header="Documentaries" />
				<Listing endpoint={requests.romanceMovies} header="Romance" />
			</article>
		</main>
		<Footer />
		</>
	)
}

export default TemplateHomepage