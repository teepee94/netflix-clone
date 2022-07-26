import React, { useState, useEffect } from 'react'
import ListingItem from './ListingItem'
import axios from "../../resources/js/TMDB/Axios"

function Listing(c) {

    const [listingItems, setListingItems] = useState([]);

	useEffect(() => {
		async function getListingItems() {
			const request = await axios.get(c.endpoint);

			setListingItems(request.data.results.slice(0, 10));

			return request;
		}

		getListingItems();
	}, [])

    return (
        <div className={`c-listing ${c.class ? c.class : "" }`}>
            <div className="container-fluid">
                {c.header ?
                <div className="row">
                    <div className="c-listing__header">
                        <h2 className="c-listing__header-title">{c.header}</h2>
                    </div>
                </div> : ""
                }
                <div className="row">
                    {listingItems.map((listingItem, index) => {
                        let image;

                        if(c.featured) {
                            if(listingItem.poster_path != null) {
                                image = listingItem.poster_path;
                            } else {
                                image = listingItem.backdrop_path;
                            }
                        } else {
                            if(listingItem.backdrop_path != null) {
                                image = listingItem.backdrop_path;
                            } else {
                                image = listingItem.poster_path;
                            }
                        }

                        return <ListingItem key={listingItem.id} title={listingItem.name} image={image} number={index+1} featured={c.featured} />
                    })}
                </div>
            </div>
        </div>
    )

}

export default Listing