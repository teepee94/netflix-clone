import React, { useEffect } from 'react'
import ArrowDownIcon from "../../resources/icons/ArrowDownIcon"
import { FENavbar } from "../../resources/js/NavbarFe"
import SearchIcon from "../../resources/icons/SearchIcon"
import BellIcon from "../../resources/icons/BellIcon"

function Navbar() {

	useEffect(() => {
		FENavbar.Init();
	}, [])
	
	return (
		<>
		<a href="#main-content">Skip to content</a>
		<nav className="c-navbar" id="js-navbar">
			<div className="container-fluid">
				<div className="row">
					<div className="c-navbar__container">
						<div className="c-navbar__wrapper">
							<a href="template-homepage" className="c-navbar__brand">
								<svg viewBox="-153.6 -69.186 1331.2 415.113"><path fill="#E7111C" d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"/></svg>
							</a>
							<div className="c-navbar__links" id="js-navbar-links">
								<ul className="c-navbar__list">
									<li className="c-navbar__item"><a href="template-homepage" className="c-navbar__link">Home</a></li>
									<li className="c-navbar__item"><a href="template-homepage" className="c-navbar__link is-current">Series</a></li>
									<li className="c-navbar__item"><a href="template-homepage" className="c-navbar__link">Films</a></li>
									<li className="c-navbar__item"><a href="template-homepage" className="c-navbar__link">New & Popular</a></li>
									<li className="c-navbar__item"><a href="template-homepage" className="c-navbar__link">My List</a></li>
								</ul>
							</div>
						</div>
						<div className="c-navbar__wrapper">
							<ul className="c-navbar__icon-list">
								<li className="c-navbar__icon-list-item">
									<SearchIcon class="c-navbar__icon" />
								</li>
								<li className="c-navbar__icon-list-item">
									<BellIcon class="c-navbar__icon" />
								</li>
								<li className="c-navbar__icon-list-item">
									<div className="c-navbar__account-container">
										<img src="/resources/images/test/navbar-profile-icon.png" alt="" />
									</div>
								</li>
							</ul>
							<button className="c-navbar__menu" id="js-navbar-menu-toggle" aria-controls="js-navbar-links">
								<span>
									<span className="u-visually-hide">Menu</span>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
		</>
	)
}

export default Navbar