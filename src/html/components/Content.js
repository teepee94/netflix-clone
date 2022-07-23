import React from 'react'
import CmsContent from '../includes/CmsContent'

function Content(c) {
    return (
        <div className={`c-content ${c.class ? c.class : "" }`}>
            <div class="container">
                <div class="row">
                    <div class="c-content__container cms-content">
                        {!c.error ?
                            <CmsContent /> :
                        <>
                        <h3>Unfortunately the page you tried to access was unavailable</h3>
                        <p><strong>This might be because:</strong></p>
                        <ul>
                            <li>You may have typed the web address incorrectly. Please check the address and spelling ensuring that it does not contain capital letters or spaces.</li>
                            <li>It is possible that the page you were looking for may have been moved, updated or deleted.</li>
                        </ul>
                        </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content