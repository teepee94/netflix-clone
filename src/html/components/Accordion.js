import React from 'react'

function Accordion(c) {
    return (
        <div className={`c-accordion js-accordion ${c.class ? c.class : "" }`}>
            <div className="container">
                <div className="row">
                    <div className="c-accordion__container">
                        <div className="c-accordion__item">
                            <h3>
                                <button className="c-accordion__item-heading js-accordion-heading" id={`accordion-header-${c.id}-1`} aria-controls={`accordion-panel-${c.id}-1`} aria-expanded="false">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </button>
                            </h3>
                            <div className="c-accordion__item-panel js-accordion-panel is-hidden" id={`accordion-panel-${c.id}-1`} aria-labelledby={`accordion-header-${c.id}-1`}  aria-hidden="true">
                                <div className="cms-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <ul>
                                        <li>This is a list item in an unordered list</li>
                                        <li>An unordered list is a list in which the sequence of items is not important</li>
                                    </ul>
                                    <ol>
                                        <li>This is a list item in an ordered list</li>
                                        <li>An ordered list is a list in where the sequence of items is important</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="c-accordion__item">
                            <h3>
                                <button className="c-accordion__item-heading js-accordion-heading" id={`accordion-header-${c.id}-2`} aria-controls={`accordion-panel-${c.id}-2`} aria-expanded="false">
                                    Lorem ipsum dolor sit amet
                                </button>
                            </h3>
                            <div className="c-accordion__item-panel js-accordion-panel is-hidden" id={`accordion-panel-${c.id}-2`} aria-labelledby={`accordion-header-${c.id}-2`}  aria-hidden="true">
                                <div className="cms-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="c-accordion__item">
                            <h3>
                                <button className="c-accordion__item-heading js-accordion-heading" id={`accordion-header-${c.id}-3`} aria-controls={`accordion-panel-${c.id}-3`} aria-expanded="false">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </button>
                            </h3>
                            <div className="c-accordion__item-panel js-accordion-panel is-hidden" id={`accordion-panel-${c.id}-3`} aria-labelledby={`accordion-header-${c.id}-3`}  aria-hidden="true">
                                <div className="cms-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion