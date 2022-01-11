import React from "react";
import emailjs from "emailjs-com";
import AccordionContainer from "./Accordion/AccordionContainer";

const Faq = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_07wt5qb",
        e.target,
        "user_tJ6HStK0qSZSI1BenYqO6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  

  return (
    <div id="faq">
      <section>
        <div className="faq__contact">
          <form onSubmit={handleSubmit}>
            <div className="form__title">
              <h4>Start your free quote</h4>
            </div>
            <div className="form__content">
              <div className="form__group">
                <input type="text" placeholder="Full Name" name="FullName" />
              </div>
              <div className="form__group">
                <input type="email" placeholder="Email address" name="email" />
              </div>
              <div className="form__group">
                <textarea placeholder="Write us" name="description"></textarea>
              </div>
            </div>
            <button className="btn" type="submit">
              Submit now
            </button>
          </form>
        </div>
        <AccordionContainer />
      </section>
    </div>
  );
};
export default Faq;
