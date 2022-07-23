//-------------------------------------------------------
//                     Listing
//-------------------------------------------------------
//
// Purpose: 
//
//-------------------------------------------------------
//

export const FEListing = {
    "Init": () => {
        FEListing.Scroll();
    },
    "Scroll": () => {
        var listings = document.querySelectorAll(".js-listing");

        window.onscroll = () => {
            listings.forEach(listing => {
                // if(FEListing.IsInViewport(listing)) {
                //     listing.classList.add("in-view");
                // } else {
                //     listing.classList.remove("in-view");
                // }
                if(listing.classList.contains(":in-viewport")) {
                    console.log("yep");
                } else {
                    console.log("no");
                }
            })
        }
    },
    "IsInViewport": (element) => {
        const rect = element.getBoundingClientRect();
        console.log(rect);
        console.log(document.documentElement.scrollTop)
        console.log(document.documentElement.clientHeight)
        console.log(document.documentElement.clientHeight - 100)

        return (
            rect.top >= (window.innerHeight - 100  || document.documentElement.clientHeight - 100)
        );
    }
}