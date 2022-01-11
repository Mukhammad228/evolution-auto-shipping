import React from "react";
import Accordion from "./Accordion";

function AccordionContainer() {
  const faqs = [
    {
      title: "How Much Does it Cost to Ship a Car?",
      text: "The right quote is not always completely predictable. The cost ranges from around $495 to $1,300 on average to ship a sedan in running condition on an open carrier. Factors that may affect the cost includes, but are not limited to the distance, vehicle’s condition (operable/non-operable), size and how soon you want it shipped.",
    },
    {
      title: "Do car shipping costs vary from state to state?",
      text: "Vehicle shipments to California (CA), Florida (FL), New York (NY) and Texas (TX) are the most busy routes. Other states like Georgia(GA), Virginia (VA), Washington (WA), Massachusetts (MA), Ohio (OH), South Carolina (SC), North Carolina (NC), and Arizona (AZ) are also popular. The remaining states are less in demand and therefore have less carriers supporting those routes. Use our Rate Calculator to get an estimate on how much it will cost to ship your car.",
    },
    {
      title: "Auto transport Carrier or Broker?",
      text: "To ship a car without a broker is a calculated risk. The AutoTransport industry is regulated by using brokers to ensure that customers are not exploited by questionable Car Shipping Carriers. Auto Transport Brokers have been given the task to help and educate consumers to ensure that their carriers are licensed with the DOT and insured. Without a broker, consumers may run the risk of using an unreliable, uninsured and illegal carrier, which more often than not may leave one with a damaged vehicle and no form of recourse.",
    },
    {
      title: " Why should I ship my car with Evolution Auto Shipping?",
      text: "  The process of shipping your vehicle can be scary, to say theleast. But, in reality, it is not as complicated as you might think. Your vehicle may be your second largest investment. Make sure you can trust your auto transport partner. Make sure your vehicle is clean. Consider gap Protection to ensure you are covered if damage is discovered. Take photographs before and  Lading) at the pickup and delivery locations. Don't pay anything upfront until you have approved the carrier for pickup, Leave a review of your car shipping experience.",
    },
  ];
  return (
    <div className="faq__content">
      <h3>Frequently asked questions</h3>
      <div>
        {faqs.map((faq, index) => {
          return <Accordion title={faq.title} text={faq.text} key={index} />;
        })}
      </div>
    </div>
  );
}

export default AccordionContainer;
