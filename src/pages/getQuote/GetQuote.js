import React, { useState } from "react";
import emailjs from "emailjs-com";

function GetQuote() {
  let { origin__state, destination__state } = JSON.parse(
    localStorage.getItem("state")
  );

  console.log(origin__state,destination__state );

  const [state, setState] = useState({
    origin__state: origin__state,
    origin__city: "",
    origin__zip: "",

    destination__state: destination__state,
    destination__city: "",
    destination__zip: "",

    transportation__type: "open",
    av__date: "",
    vehicle__make: "",
    vehicle__model: "",
    vehicle__year: "",
    vehicle__condition: "run",

    contact__name: "",
    contact__lastName: "",
    contact__phone: "",
    contact__email: "",
    add__info: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = (e) => {
    setState({
      origin__state: "",
      origin__city: "",
      origin__zip: "",

      destination__state: "",
      destination__city: "",
      destination__zip: "",

      transportation__type: "open",
      av__date: "",

      vehicle__make: "",
      vehicle__model: "",
      vehicle__year: "",
      vehicle__condition: "run",

      contact__name: "",
      contact__lastName: "",
      contact__phone: "",
      contact__email: "",
      add__info: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_fv2d9g9",
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
    <div>
      {/* <!-- Get-Quote - Start --> */}

      <div id="get__guote">
        <section>
          <div className="get__quote__content">
            <div className="get__quote__content__title">
              <h3>Free Instant Quote: Car Shipping Rate Calculator</h3>
              <p>
                By submitting the information below you will receive a free{" "}
                <br /> Instant rate quote on how much it will cost to ship your
                vehicle.
              </p>
            </div>
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <div className="get__guote__form__group">
                <h3>Origin Information</h3>
                <div className="get__quote__input__list">
                  <select
                    name="origin__state"
                    className="get__quote__input"
                    value={state.origin__state}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">Dist. of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="GU">Guam</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VI">Virgin Islands</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    <option value="CP">Canada-Province Not Specified</option>
                    <option value="AB">Canada-Alberta</option>
                    <option value="BC">Canada-British Columbia</option>
                    <option value="MB">Canada-Manitoba</option>
                    <option value="NB">Canada-New Brunswick</option>
                    <option value="NL">Canada-Newfoundland</option>
                    <option value="NT">Canada-Northwest Territories</option>
                    <option value="NS">Canada-Nova Scotia</option>
                    <option value="NU">Canada-Nunavut</option>
                    <option value="ON">Canada-Ontario</option>
                    <option value="PE">Canada-Prince Edward Island</option>
                    <option value="QC">Canada-Quebec</option>
                    <option value="SK">Canada-Saskatchewan</option>
                    <option value="YT">Canada-Yukon</option>
                  </select>
                  <input
                    type="text"
                    className="get__quote__input"
                    name="origin__city"
                    placeholder="Origin City"
                    value={state.origin__city}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="number"
                    className="get__quote__input"
                    name="origin__zip"
                    placeholder="Origin Zip"
                    value={state.origin__zip}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="get__guote__form__group">
                <h3>Destination Information</h3>
                <div className="get__quote__input__list">
                  <select
                    name="destination__state"
                    className="get__quote__input"
                    value={state.destination__state}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">Dist. of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="GU">Guam</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VI">Virgin Islands</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    <option value="CP">Canada-Province Not Specified</option>
                    <option value="AB">Canada-Alberta</option>
                    <option value="BC">Canada-British Columbia</option>
                    <option value="MB">Canada-Manitoba</option>
                    <option value="NB">Canada-New Brunswick</option>
                    <option value="NL">Canada-Newfoundland</option>
                    <option value="NT">Canada-Northwest Territories</option>
                    <option value="NS">Canada-Nova Scotia</option>
                    <option value="NU">Canada-Nunavut</option>
                    <option value="ON">Canada-Ontario</option>
                    <option value="PE">Canada-Prince Edward Island</option>
                    <option value="QC">Canada-Quebec</option>
                    <option value="SK">Canada-Saskatchewan</option>
                    <option value="YT">Canada-Yukon</option>
                  </select>
                  <input
                    type="text"
                    className="get__quote__input"
                    name="destination__city"
                    placeholder="Destination City"
                    value={state.destination__city}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="number"
                    className="get__quote__input"
                    name="destination__zip"
                    placeholder="Destination Zip"
                    value={state.destination__zip}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="get__guote__form__group">
                <h3>Shipping Details</h3>
                <div className="get__quote__input__list">
                  <select
                    name="transportation__type"
                    className="get__quote__input"
                    id="transportation__type"
                    value={state.transportation__type}
                    onChange={handleChange}
                    required
                  >
                    <option value="open">Open</option>
                    <option value="enclosed">Enclosed</option>
                    <option value="driveaway">Driveaway</option>
                  </select>
                  <input
                    type="date"
                    className="get__quote__input"
                    name="av__date"
                    value={state.av__date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="get__guote__form__group">
                <h3>Vehicles Information</h3>
                <div className="get__quote__input__list">
                  <input
                    type="text"
                    className="get__quote__input"
                    name="vehicle__make"
                    placeholder="Vehicle Make"
                    value={state.vehicle__make}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    className="get__quote__input"
                    name="vehicle__model"
                    placeholder="Vehicle Model"
                    value={state.vehicle__model}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    className="get__quote__input"
                    name="vehicle__year"
                    placeholder="Vehicle Year"
                    value={state.vehicle__year}
                    onChange={handleChange}
                    required
                  />
                  <select
                    name="vehicle__condition"
                    className="get__quote__input"
                    value={state.vehicle__condition}
                    onChange={handleChange}
                  >
                    <option value="run">Running</option>
                    <option value="norun">Not running</option>
                  </select>
                </div>
              </div>
              <div className="get__guote__form__group">
                <h3>Contact Details</h3>
                <div className="get__quote__input__list">
                  <input
                    type="text"
                    className="get__quote__input"
                    name="contact__name"
                    placeholder="First Name"
                    value={state.contact__name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    className="get__quote__input"
                    name="contact__lastName"
                    placeholder="Last Name"
                    value={state.contact__lastName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    className="get__quote__input"
                    name="contact__phone"
                    placeholder="Phone Number"
                    value={state.contact__phone}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    className="get__quote__input"
                    name="contact__email"
                    placeholder="Email"
                    value={state.contact__email}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="add__info"
                    className="get__quote__input"
                    placeholder="Additional Information"
                    value={state.add__info}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="get__quote__bottom">
                <div className="get__quote__bottom__links">
                  <p>
                    Find Your ZIP Code{" "}
                    <a
                      href="https://tools.usps.com/go/ZipLookupAction!input.action"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click Here
                    </a>
                  </p>
                </div>
                <div className="get__quote__bottom__buttons">
                  <button type="reset" className="btn__reset">
                    Clear Fields
                  </button>
                  <button type="submit" className="btn__submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* <!-- Get-Quote - End --> */}
    </div>
  );
}

export default GetQuote;
