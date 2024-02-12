import React from 'react';
import "./header.css"; 
import heroIcon1 from "../../../Assets/images/hero-icon-1.png";
import heroIcon2 from "../../../Assets/images/hero-icon-2.png";
import heroIcon3 from "../../../Assets/images/hero-icon-3.png";
import marketing from "../../../Assets/animateFile/marketing.json"
import transparent from "../../../Assets/animateFile/transparent.json" 
import Lottie from 'lottie-react';

const Header = () => {
    return (
        <section class="section hero" aria-label="hero">
            <div class="container">
                <div class="hero-content">
                    <h1 class="h1 title hero-title">
                        We take care of your brand
                    </h1>

                    <p class="hero-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente eos fugiat maiores
                        adipisci sunt vel culpa molestias enim ab deserunt id, magni, labore explicabo. Minima
                        architecto ducimus fugiat veniam.
                    </p>

                    <div class="input-wrapper">
                        <input type="email" name="email-address" class="input-field" placeholder="Enter your email" />
                        <button type="submit" class="btn btn-primary">Let's Talk</button>
                    </div>
                </div>

                <figure class="hero-banner">
                    <span><Lottie animationData={transparent}></Lottie> </span>

                    <img src={heroIcon1} alt="you tube" width="100" height="100"
                        class="shape shape-1" data-parallax data-parallax-speed="15" />
                    <img src={heroIcon2} alt="twitter" width="120" height="120"
                        class="shape shape-2" data-parallax data-parallax-speed="25" />
                    <img src={heroIcon3} alt="instagram" width="150" height="150"
                        class="shape shape-3" data-parallax data-parallax-speed="40" />
                </figure>
            </div>
        </section>
    );
};

export default Header;