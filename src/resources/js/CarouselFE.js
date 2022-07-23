//-------------------------------------------------------
//                     Carousel
//-------------------------------------------------------
//
// Purpose: Slick carousel settings
//
//-------------------------------------------------------
//
// 1. Set the next arrow
// 2. Set the prev arrow
// 3. Export carousel settings to use in component
//
//-------------------------------------------------------

// 1
const NextArrow = (props) => {
    return (
        <button onClick={props.onClick} type="button" className="c-carousel__next">
            <span className="u-visually-hide">Next</span>
            <svg viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.502 21.783l-1.435-1.435L15.415 12 7.067 3.652 8.5 2.217 18.284 12l-9.782 9.784z" />
            </svg>
        </button>
    );
}

// 2
const PrevArrow = (props) => {
    return (
        <button onClick={props.onClick} type="button" className="c-carousel__prev">
            <span className="u-visually-hide">Previous</span>
            <svg viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.498 2.217l1.435 1.435L8.585 12l8.348 8.348-1.434 1.435L5.716 12l9.782-9.784z" />
            </svg>
        </button>
    );
}

// 3
export const settings = {
    accessibility: true,
    dots: true,
    dotsClass: "c-carousel__dots",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};