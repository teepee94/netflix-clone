import React, { useEffect } from 'react'
import { FEForms } from '../../resources/js/FormsFE'
import FormInput from './FormInput'

function Newsletter(c) {

    useEffect(() => {
		FEForms.Init();
	}, [])

    return (
        <div className={`c-newsletter ${c.class ? c.class : "" }`}>
            <div className="container">
                <div className="row">
                    <div className="c-newsletter__content-container">
                        {c.subtitle ?
                            <div className="c-newsletter__subtitle">{c.subtitle}</div> : "" }
                        {c.title ?
                            <h2 className="c-newsletter__title">{c.title}</h2> : "" }
                        {c.summary ?
                            <div className="c-newsletter__summary-container cms-content">
                                <p>{c.summary}</p>
                            </div> : "" }
                    </div>
                    <div className="c-newsletter__form c-form">
                        <form id={`newsletter-${c.id ? c.id : "" }`}>
                            <fieldset>
                                <legend className="c-form__legend">Newsletter signup</legend>
                                {c.errormessage ?
                                    <div className="c-newsletter__form-validation">
                                        <div className="c-form__validation c-form__validation--error">
                                            <div className="c-newsletter__form-validation-content">
                                                <p>Error message</p>
                                                <ul>
                                                    <li>Error message list item</li>
                                                    <li>Error message list item</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> : "" }
                                {c.successmessage ?
                                    <div className="c-newsletter__form-validation">
                                        <div className="c-form__validation c-form__validation--success">
                                            <div className="c-newsletter__form-validation-content">
                                                <p>Success message</p>
                                                <ul>
                                                    <li>Success message list item</li>
                                                    <li>Success message list item</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> : "" }
                                {!c.successmessage ?
                                    <>
                                    <div className="c-newsletter__form-fields">
                                        <div className="c-newsletter__form-field">
                                            <FormInput id={`name${c.id ? c.id : "" }`} label="Name" type="text" placeholder="Name" required="required" />
                                        </div>
                                        <div className="c-newsletter__form-field">
                                            <FormInput id={`email${c.id ? c.id : "" }`} label="Email" type="email" placeholder="Email" required="required" />
                                        </div>
                                        <div className="c-newsletter__submit-field">
                                            <button type="submit" className="c-newsletter__submit c-btn">Sign up</button>
                                        </div>
                                    </div>
                                    <p className="c-newsletter__form-consent">By clicking the Button you're confirming that you agree with our following <a href="" className="c-newsletter__form-consent-link">Terms and Conditions</a>.</p> 
                                    </> : "" }
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter