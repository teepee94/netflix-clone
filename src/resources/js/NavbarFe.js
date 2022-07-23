//-------------------------------------------------------
//                     Navbar
//-------------------------------------------------------
//
// Purpose: Update navbar states
//
//-------------------------------------------------------
//

export const FENavbar = {
    "Init": function() {
        FENavbar.BurgerNav()
        FENavbar.NavDropdown()
        FENavbar.NavScroll();
    },
    "BurgerNav": () => {
        let burger = document.querySelector("#js-navbar-menu-toggle")
        let body = document.querySelector("body");

        // Toggle the menu on click
        burger.addEventListener("click", (e) => {
            e.preventDefault();
            body.classList.toggle("is-nav-open");
        });
    },
    "NavScroll": () => {
        const nav = document.getElementById("js-navbar");

        window.onscroll = () => {
            if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
                nav.classList.add("is-scrolled");
            } else {
                nav.classList.remove("is-scrolled");
            }
        }
    },
    "NavDropdown": () => {
        // Make the dropdown nav work when tabbing
        let navLinks = document.querySelector("html.no-touchevents #js-navbar-links .c-navbar__link");
        let navDropdowns = Array.from(document.querySelectorAll("html.no-touchevents #js-navbar-links .c-navbar__dropdown"));

        let allLinks = Array.from(document.querySelectorAll('html.no-touchevents #js-navbar-links >ul >li >a'));
        // checking if nav has dropdown
        if (allLinks) {
            allLinks.forEach(link => {
                link.addEventListener('focus', el => {
                    let dropdown = link.nextElementSibling;
                    if (dropdown != null) {
                        let show = !dropdown.classList.contains('is-active');
                        closeOpenItems()
                        // On focus show the dropdown nav if required
                        if (show != null) {
                            link.classList.add("is-active")
                            dropdown.classList.add("is-active")
                        }
                    } else {
                        // Remove active state to link and dropdown if this is tabbed away
                        closeOpenItems()
                    }
                });

                // Closes up all the nav dropdowns
                function closeOpenItems() {
                    let openMenus = Array.from(document.querySelectorAll('.is-active'));
                    console.log(openMenus)
                    openMenus.forEach(menus => {
                        menus.classList.remove('is-active');
                    });
                }
            });
        }
    }
};