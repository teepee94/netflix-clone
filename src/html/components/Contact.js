import React from 'react'
import FormInput from './FormInput'
import FormTextarea from './FormTextarea'
import FormCheckbox from './FormCheckbox'

function Contact(c) {
    return (
        <div className={`c-contact ${c.class ? c.class : "" }`}>
            <div className="container">
                <div className="row">
                    <div className="c-contact__details">
                        Address Line 1<br/>
                        City<br/>
                        County<br/>
                        Post Code<br/>
                        <a href="">01234 567890</a><br/>
                        <a href="">tommy.parkinson@icloud.com</a>
                    </div>
                    <div className="c-contact__form">
                        <h3 className="c-contact__form-title">Get in touch</h3>
                        <form  id={`contact-form${c.id ? c.id : "" }`} className="c-form">
                            <fieldset>
                                <legend className="c-form__legend">Contact us</legend>
                                {c.errormessage ?
                                    <div className="row">
                                        <div className="c-form__form-validation">
                                            <div className="c-form__validation c-form__validation--error">
                                                <p>Error message would go here</p>
                                            </div>
                                        </div>
                                    </div> : ""}
                                {c.successmessage ?
                                    <div className="row">
                                        <div className="c-form__form-validation">
                                            <div className="c-form__validation c-form__validation--success">
                                                <p>Success message would go here</p>
                                            </div>
                                        </div>
                                    </div> : ""}
                                {!c.successmessage ?
                                    <div className="row">
                                        <div className="c-form__form-field">
                                            <FormInput id={`text${c.id ? c.id : "" }`} label="Name" type="text" required="required" />
                                        </div>
                                        <div className="c-form__form-field">
                                            <FormInput id={`email${c.id ? c.id : "" }`} label="Email" type="email" required="required" />
                                        </div>
                                        <div className="c-form__form-field">
                                            <FormTextarea id={`textarea${c.id ? c.id : "" }`} label="Message" rows="10" required="required" />
                                        </div>
                                        <div className="c-form__form-field">
                                            <FormCheckbox id={`gdpr${c.id ? c.id : "" }`} label="Please confirm you agree to be contacted via the email address provided and that you agree to our Privacy Policy" required="required" />
                                        </div>
                                        <div className="c-form__form-field">
                                            <div className="g-recaptcha" data-sitekey="6LdUmbYUAAAAAJjFHKFn3DU5ZWk18rXGtexxd2hM"></div>
                                        </div>
                                        <div className="c-form__form-field">
                                            <button type="submit" className="c-btn c-btn--primary">Submit</button>
                                        </div>
                                    </div> : ""}
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact