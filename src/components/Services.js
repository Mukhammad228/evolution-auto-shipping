import React, { useState } from "react";



const Services = () =>{

    const [isActive, setIsActive] = useState(1)

    const tabHandle = (id)=>{
        setIsActive(id)
    }


    return(
        <div id="services">
            <div className="how__it__works">
                <div className="works__tab">
                  
                    <button id="defaultOpen" className={`works__tab__button ${isActive === 1 ? 'active' : ''}`} onClick={() => tabHandle(1)}  >
                        <i className="fas fa-desktop"></i>
                        <h4>STEP 1</h4>
                        <p>Quote and book your order</p>
                    </button>
                    <button  className={`works__tab__button ${isActive === 2 ? 'active' : ''}`} onClick={() => tabHandle( 2)}>
                        <i className="fas fa-car"></i>
                        <h4>STEP 2</h4>
                        <p>We pick up your vehicle</p>
                    </button>
                    <button className={`works__tab__button ${isActive === 3 ? 'active' : ''}`} onClick={() => tabHandle( 3)}>
                        <i className="fas fa-check"></i>
                        <h4>STEP 3</h4>
                        <p>Receive your vehicle</p>
                    </button>
                </div>
                <div className="works__content">
                    <div className={`works__content__info  ${isActive === 1 ? 'db' : ''}`} id="1">
                        <p>Click—or tap—here for an instant online quote in seconds (we’re talking finger-snapping fast!), or call or start a chat with one of our advisors. Then go ahead and compare our prices and services (we know you want to!)—we’re sure you’ll find our prices are very competitive.</p>
                    </div>
                    <div  className={`works__content__info  ${isActive === 2 ? 'db' : ''}`} id="2">
                        <p>Schedule your pickup date, time and an easy-to-access pickup location with your trucker. You can even release your car while you’re at work.</p>
                    </div>
                    <div  className={`works__content__info  ${isActive === 3 ? 'db' : ''}`} id="3">
                        <p>Reuniting you and your vehicle is an exciting moment—and one we look forward to at Montway! <br/> Your trucker will call you when your vehicle is almost home so you can greet them both right at your own driveway (or a nearby agreed-upon location).</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;