import React from 'react';
import "./footer.css";
import logo from "../../../Assets/images/logo.svg"

const Footer = () => {
    return (
        <footer class="footer">
        <div class="section footer-top">
            <div class="container">
                <div class="footer-brand">
                    <a href="#" class="logo">
                        <img src={logo} width="205" height="40" loading="lazy"
                            alt="digital media home"/>
                    </a>
                    <address class="footer-text">
                        Los Angles, California, USA
                    </address>

                    <ul class="social-list">
                        <li>
                            <a href="#" class="social-link">
                            <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="social-link">
                            <i class="fa-brands fa-x-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="social-link">
                            <i class="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                    </ul>

                    <a href="#" class="btn btn-primary">Contact US</a>
                </div>
                    <ul class="footer-list">
                        <li>
                            <a href="#" class="footer-link">Work With Us</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Advertise With Us</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Support Us</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Business Advices</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Private Coaching</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Our Work</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Our Commitment</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Our Team</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">About Us</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">FAQs</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Report a Bug</a>
                        </li>
                    </ul>

                
            </div>
        </div>

        <div class="footer-bottom text-center">
            <div class="container">
                <p class="copyright">
                    &copy; Digital Media, Inc. - Developed by <a href="#" class="link">Obayedullah Khan</a>
                </p>

                <ul class="footer-bottom-list">
                    <li>
                        <a href="#" class="footer-link">Term Of use</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    );
};

export default Footer;