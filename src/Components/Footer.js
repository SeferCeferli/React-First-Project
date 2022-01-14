import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" name='email' placeholder='Email adress' className="footer-input" />
                        <Button type='submit' buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/SignUp'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Sponsorship</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Terms of service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/'>Submit Videos</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Infuluncer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className="social-media-wrap">
                    <div className="footer-log">
                        <Link to='/' className='social-logo'>
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
