import React from "react";
import pexels from '../assets/images/about/pexels-yan-krukov-8867482.jpg';

const AboutUs = () =>{
    return(
        <div id="about__us">
            <section>
                <h3 className="section__title">ABOUT US</h3>
                <h2 className="section__large__title">Your logistics <br/> <span className="empty__text">solutions</span> provider</h2>
                <div className="about__us__content">
                    <div className="about__us__content__text">
                        <p className="primary__text">
                            Track//Truck, Inc. specializes in providing freight shipping solutions whenever and wherever you need them. As an independent freight agency, we have access to one of the largest logistics networks in the industry, which means your business has access to this vast network too.
                        </p>
                        <p className="primary__text">
                            We are committed to providing our customers with quality service. We will work closely with you to develop the best logistics plan for your supply chain.
                        </p>
                        <p className="primary__text">
                            In addition to our commitment to quality service, we are dedicated to safety. You can trust that Track//Truck, Inc. will keep your supply chain moving and get your freight delivered safely and on-time.
                        </p>
                    </div>
                    <div className="about__us__content__img">
                        <img src={pexels} alt="about us"/>
                        <div className="img__opacity"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs