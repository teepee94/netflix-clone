import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Masthead from '../../components/Masthead'
import Listing from '../../components/Listing'
import axios from "../../../resources/js/TMDB/Axios"
import requests from '../../../resources/js/TMDB/Requests'
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function TemplateHomepage() {

	const [masthead, setMasthead] = useState([]);

	useEffect(() => {
		async function getMastheadData() {
			const request = await axios.get(requests.netflixOriginals);

			const index = Math.floor(Math.random() * request.data.results.length - 1)

			setMasthead(
				request.data.results[index]
			);

			return request;
		}

		getMastheadData();
	}, [])

	useEffect(() => {
		const tl = gsap.timeline({
		  scrollTrigger: {
			trigger: "#js-masthead",
			start: "top top",
			end: "bottom top",
			scrub: true
		  }
		});
		
		gsap.utils.toArray(".parallax").forEach(layer => {
		  const depth = layer.dataset.depth;
		  const movement = (layer.offsetHeight * depth)
		  tl.to(layer, {y: movement, ease: "none"}, 0)
		});
		}, [])
	

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