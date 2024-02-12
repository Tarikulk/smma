import React from 'react';
import "./pricing.css";

const Pricing = () => {
    return (
        <div className='container'>

            <h2 class="h2 title section-title" id="pricing-label">
                Choose the planning
            </h2>

            <p className='pricing-text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum laborum ipsa esse rem debitis
                veritatis itaque deserunt, nisi similique aspernatur ab iure expedita! Nulla, fugiat. Animi
                nobis cupiditate nihil corrupti!
            </p>

            <div className='pricing-wrapper'>

                <div className='table basic'>
                    <div className='head_tab'><h2>Single <br /> web services </h2></div>
                    <div className='tag'><p>Ideal solution for beginner</p></div>
                    <div className='price-section'>
                        <div className='price-area'>
                            <div className='inner-area'>
                                <span className='text'>$</span>
                                <span className='price'>100 <span>/mo</span> </span>
                            </div>
                        </div>
                    </div>

                    <div className='package-name'>

                    </div>

                    <ul className='features'>

                        <div className='pricing-btn'>
                            <button>
                                Add to cart
                            </button>
                        </div>

                        <p className='des'>
                            Lorem Ipsum is simply dummy.
                        </p>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon check'><i className='fas fa-check'></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon cross'><i class="fa-solid fa-xmark"></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon check'><i className='fas fa-check'></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon cross'><i class="fa-solid fa-xmark"></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon check'><i className='fas fa-check'></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon cross'><i class="fa-solid fa-xmark"></i></span>
                        </li>

                    </ul>

                    <div className='see-more'><h2>See All Features <i className='fa fa-angle-down'></i> </h2></div>

                </div>

                <div className='table standard'>
                    <div className='head_tab'><h2>Standard <br /> web services </h2></div>
                    <div className='tag'><p>Perfect package for personal</p></div>
                    <div className='ribbon'><span>Best Value</span></div>
                    <div className='price-section'>
                        <div className='price-area'>
                            <div className='inner-area'>
                                <span className='text'>$</span>
                                <span className='price'>300 <span>/mo</span> </span>
                            </div>
                        </div>
                    </div>

                    <div className='package-name'>

                    </div>

                    <ul className='features'>
                        <div className='pricing-btn'>
                            <button>
                                Add to cart
                            </button>
                        </div>

                        <p className='des'>
                            Lorem Ipsum is simply dummy.
                        </p>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon check'><i className='fas fa-check'></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon cross'><i class="fa-solid fa-xmark"></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon check'><i className='fas fa-check'></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon check'><i className='fas fa-check'></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon cross'><i class="fa-solid fa-xmark"></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon check'><i className='fas fa-check'></i></span>
                        </li>

                    </ul>

                    <div className='see-more'><h2>See All Features <i className='fa fa-angle-down'></i> </h2></div>

                </div>

                <div className='table premium'>
                    <div className='head_tab'><h2>Premium <br /> web services </h2></div>
                    <div className='tag'><p>Perfect package for business</p></div>
                    <div className='price-section'>
                        <div className='price-area'>
                            <div className='inner-area'>
                                <span className='text'>$</span>
                                <span className='price'>500 <span>/mo</span> </span>
                            </div>
                        </div>
                    </div>

                    <div className='package-name'>

                    </div>

                    <ul className='features'>
                        <div className='pricing-btn'>
                            <button>
                                Add to cart
                            </button>
                        </div>

                        <p className='des'>
                            Lorem Ipsum is simply dummy.
                        </p>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon check'><i className='fas fa-check'></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon check'><i className='fas fa-check'></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon check'><i className='fas fa-check'></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon check'><i className='fas fa-check'></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon check'><i className='fas fa-check'></i></span>
                        </li>

                        <li>
                            <span className='list-name'>Lorem Ipsum is simply dummy.</span>
                            <span className='icon check'><i className='fas fa-check'></i></span>
                        </li>

                    </ul>

                    <div className='see-more'><h2>See All Features <i className='fa fa-angle-down'></i> </h2></div>

                </div>


            </div>
        </div>
    );
};

export default Pricing;