import React from 'react';
import "./ourWorks.css";
import Work1 from "../../../Assets/images/work-1.jpg"
import Work2 from "../../../Assets/images/work-2.jpg"
import Work3 from "../../../Assets/images/work-3.jpg"

const OurWorks = () => {
    return (
        <section class="section works text-center" area-labelledby="works-label">
        <div class="container">
            <h2 class="h2 title section-title">
                Our Work
            </h2>

            <p class="section-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore deleniti nisi sint quaerat
                optio recusandae. Ea est molestias, quis tempore natus ad veritatis enim laborum, magni
                doloribus unde quaerat similique. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Totam, voluptates?
            </p>
            <ul class="grid-list">
                <li>
                    <div class="work-card">
                        <figure class="card-banner img-holder">
                            <img src={Work1} width="580" height="620" alt="Product design"
                                class="img-cover" loading="lazy"/>
                        </figure>
                        <h3 class="h3 title">
                            <a href="#" class="card-title">Product design</a>
                        </h3>
                        <p class="card-text">Use this section to describe your work</p>
                    </div>
                </li>
                <li>
                    <div class="work-card">
                        <figure class="card-banner img-holder">
                            <img src={Work2} width="580" height="620" alt="Virtual Reality"
                                class="img-cover" loading="lazy"/>
                        </figure>
                        <h3 class="h3 title">
                            <a href="#" class="card-title">Virtual Reality</a>
                        </h3>
                        <p class="card-text">Use this section to describe your work</p>
                    </div>
                </li>
                <li>
                    <div class="work-card">
                        <figure class="card-banner img-holder">
                            <img src={Work3} width="580" height="620" alt="App Development"
                                class="img-cover" loading="lazy"/>
                        </figure>
                        <h3 class="h3 title">
                            <a href="#" class="card-title">App Development</a>
                        </h3>
                        <p class="card-text">Use this section to describe your work</p>
                    </div>
                </li>
            </ul>
            <a href="#" class="btn btn-primary">See more</a>
        </div>
    </section>
    );
};

export default OurWorks;