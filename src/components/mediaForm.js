import React from "react";

const MediaForm = () =>{
    return(
        <section class="media__form">
        <div class="header__content__right">
            <form class="header__form">
                <div class="form__title">
                    <h4>Start your free quote</h4>
                </div>
                <div class="form__content">
                    <div class="form__group">
                        <select name="origin" id="origin__state" placeholder="* origin__state" required>
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
                    </div>
                    <div class="form__group">
                        <select name="destination" id="destination__sate" placeholder="Destination State" required>
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
                    </div>
                    <button type="submit" class="btn">
                        Sumbit now
                    </button>
                </div>
            </form>
        </div>
    </section>
    )
}

export default MediaForm