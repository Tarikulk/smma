import React from 'react';
import "./Process.css"; 
import processIcon1 from "../../../Assets/images/process-icon-1.png";
import processIcon2 from "../../../Assets/images/process-icon-2.png";
import processIcon3 from "../../../Assets/images/process-icon-3.png";
import processIcon4 from "../../../Assets/images/process-icon-4.png";
import advertising from "../../../Assets/animateFile/advertising.json"
import Lottie from 'lottie-react';

const Process = () => {
    return (
        <section class=" process text-center" area-labelledby="process-label">

        <div class="container">
            <h2 class="h2 title section-title" id="process-label">
                How it works
            </h2>

            <p class="section-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum laborum ipsa esse rem debitis
                veritatis itaque deserunt, nisi similique aspernatur ab iure expedita! Nulla, fugiat. Animi
                nobis cupiditate nihil corrupti!
            </p>

            <div class="wrapper">
                <figure class="process-banner">
                     <Lottie animationData={advertising}></Lottie>
                </figure>

                <ul class="grid-list">
                    <li class="process-item">
                        <img src={processIcon1} class="item-icon" width="60" height="60"
                            loading="lazy"/>

                        <h3 class="title item-title">
                            Ideatation
                        </h3>
                        <p class="item-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere doloremque cumque 
                        </p>
                    </li>
                    <li class="process-item">
                        <img src={processIcon2} class="item-icon" width="60" height="60"
                            loading="lazy"/>

                        <h3 class="title item-title">
                            Budget
                        </h3>
                        <p class="item-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere doloremque cumque 
                        </p>
                    </li>
                    <li class="process-item">
                        <img src={processIcon3} class="item-icon" width="60" height="60"
                            loading="lazy"/>

                        <h3 class="title item-title">
                            Performance
                        </h3>
                        <p class="item-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere doloremque cumque 
                        </p>
                    </li>
                    <li class="process-item">
                        <img src={processIcon4} class="item-icon" width="60" height="60"
                            loading="lazy"/>

                        <h3 class="title item-title">
                            Speed
                        </h3>
                        <p class="item-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere doloremque cumque 
                        </p>
                    </li>
                </ul>

            </div>

        </div>

    </section>
    );
};

export default Process;