import React from 'react'
import './ContactSection.css'
function ContactSection() {
    
    return (
        <>
            <div className='contact-container'>
                <h1 className='hdr'>Contact</h1>
                <div className='contact-info'>
                    <p className='contact-text'>Have a question or want to work together?</p>
                    
                    <a className='contact-link' href='mailto:neg4r.u@gmail.com'><i className="fa fa-envelope" aria-hidden="true"> Mail</i></a>
                    <a className='contact-link' href='https://www.linkedin.com/in/negar-yousefian-608399aa/'><i class="fa fa-linkedin-square" aria-hidden="true"> Linkedin</i></a>
                    <a className='contact-link' href='https://twitter.com/theneg4r'><i className="fa fa-twitter-square" aria-hidden="true"> Twitter</i></a>
                    <a className='contact-link' href='https://www.instagram.com/theneg4r/'><i className="fa fa-instagram" aria-hidden="true"> Instagram</i></a>
                    <a className='contact-link' href='https://gitlab.com/nyousefian'><i class="fa fa-gitlab" aria-hidden="true"> Gitlab</i></a>
                    
                </div>

            </div>
        </>
    )
}

export default ContactSection
