import React  from "react";

function Accordion({ title, text }) {


  const handleAccordion = (e) => {
    e.currentTarget.classNameList.toggle("active");
    let panel = e.currentTarget.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };


  return (
    <div className="faq__button">
      <button className="acc__button" onClick={handleAccordion}>
        {title}
      </button>
      <div className="faq__button__panel">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Accordion;
