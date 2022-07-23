//-------------------------------------------------------
//                    Accordion
//-------------------------------------------------------
//
// Purpose: Open and close accordion items
//
//-------------------------------------------------------
//

export var FEAccordion = {
    "Init": function() {
        FEAccordion.SetAccordion();
    },
    "SetAccordion": function() {
        const accordions = Array.from(document.querySelectorAll("div.js-accordion"));

        // creates a new instance for each accordion component on the page
        accordions.forEach(accordion => {
            var headings = Array.from(accordion.querySelectorAll("button.js-accordion-heading")),
                panels = Array.from(accordion.querySelectorAll("div.js-accordion-panel"));

            console.log(accordion)

            // Looping over the headings array and adding a click event.
            headings.forEach((heading) => {                
                heading.addEventListener("click", () => {
                    console.log(heading);
                    // Calling setPanelState function and passing - headings array, panels array and current heading
                    FEAccordion.SetPanelState(headings, panels, heading);
                });
            })
        }, accordions);
    },
    "SetPanelState": (headings, panels, activeHeading) => {
        var activePanel = document.querySelector('#' + activeHeading.getAttribute("aria-controls"));

        // Helper function to set multiple attributes
        const setAttributes = (el, attrs) => {
            for (var key in attrs) {
                el.setAttribute(key, attrs[key]);
            }
        }

        if (activeHeading.classList.contains("is-active")) {
            // Remove active state from heading
            activeHeading.classList.remove("is-active");
            // Calling the setAttributes function
            setAttributes(activeHeading, { "aria-selected": "false", "aria-expanded": "false", });
            // Add hidden state from panel
            activePanel.classList.add("is-hidden");
            activePanel.setAttribute("aria-hidden", "true");
        } else {
            // Add active state to heading
            activeHeading.classList.add("is-active")
            // Calling the setAttributes function
            setAttributes(activeHeading, { "aria-selected": "true", "aria-expanded": "true", });
            // Remove hidden state to panel
            activePanel.classList.remove("is-hidden")
            activePanel.setAttribute("aria-hidden", "false");
        }
    }
}