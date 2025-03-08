import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
export default function Register() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const langdata = useSelector((state) => state.language.langd);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [buttonClick, setButtonClick] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState("");
  const [msgError, setMsgError] = useState("");
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const sendMessage = async () => {
    setButtonClick(true);
    if (!name) {
      setNameError(true);
      setButtonClick(false);
      return;
    }
    setNameError(false);

    if (!email) {
      setEmailError(true);
      setButtonClick(false);
      return;
    }
    setEmailError(false);

    if (!validateEmail(email)) {
      setEmailError(true);
      setButtonClick(false);
      return;
    }
    setEmailError(false);

    if (!phone) {
      setPhoneError(true);
      setButtonClick(false);
      return;
    }
    setPhoneError(false);

    if (!message) {
      setMessageError(true);
      setButtonClick(false);
      return;
    }
    setMessageError(false);

    const obj = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      api: "743nshfh8767834nmbsn2347823bsbjkfj283423sjsf",
    };
    //console.log(apiList.search);

    let params = { url: apiList.sendmail, body: obj };
    //console.log(params);
    let response = await ApiService.postData(params);

    if (response.status) {
      setMessageSuccess(langdata.message_sent_success);
      setMsgError("");
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setButtonClick(false);
    } else {
      setMessageSuccess("");
      setButtonClick(false);
      setMsgError(langdata.msg_err);
    }
  };
  return (
    <div id="register" className="ltn__about-us-area pt-60 pb-90 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-30">
                <p className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  {langdata.RegisterWithUs}
                </p>
                <h1 className="section-title">{langdata.SecureSpot}</h1>
                <p>{langdata.register_content}</p>
              </div>
              <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
                <li>{langdata.PrimeLocation}</li>
                <li>{langdata.ModernArchitectural}</li>
                <li>{langdata.FullyIntegratedCommunity}</li>
                <li>{langdata.DiverseResidential}</li>
              </ul>

              <ul className="ltn__list-item-2 ltn__list-item-2-before--- ltn__list-item-2-img mb-50">
                <li>
                  <a
                    aria-label="Image Slider"
                    href={publicUrl + "assets/img/slide/15.jpg"}
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      src={publicUrl + "assets/img/slide/15.webp"}
                      alt="Image"
                      decoding="async"
                    />
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Image Slider"
                    href={publicUrl + "assets/img/slide/16.jpg"}
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      src={publicUrl + "assets/img/slide/16.webp"}
                      alt="Image"
                      decoding="async"
                    />
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Image Slider"
                    href={publicUrl + "assets/img/slide/17.jpg"}
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      src={publicUrl + "assets/img/slide/17.webp"}
                      alt="Image"
                      decoding="async"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__form-box contact-form-box box-shadow white-bg">
                  <p className="title-2">{langdata.RegisterInterest}</p>
                  <form id="contact-form" method="post">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="input-item input-item-name ltn__custom-icon">
                          <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                            className={nameError ? "border-danger" : ""}
                            placeholder={langdata.EnterName}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-item input-item-email ltn__custom-icon">
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            className={emailError ? "border-danger" : ""}
                            placeholder={langdata.EnterEmail}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="input-item input-item-phone ltn__custom-icon">
                          <input
                            value={phone}
                            onChange={(e) => {
                              let value = e.target.value.replace(/\D/g, "");
                              setPhone(value);
                            }}
                            type="text"
                            name="phone"
                            className={phoneError ? "border-danger" : ""}
                            placeholder={langdata.EnterPhone}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-item input-item-textarea ltn__custom-icon">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        className={messageError ? "border-danger" : ""}
                        placeholder={langdata.EnterMessage}
                      />
                    </div>

                    <div className="btn-wrapper mt-0">
                      <button
                        disabled={buttonClick}
                        onClick={() => sendMessage()}
                        className="btn btn-primary text-uppercase"
                        type="button"
                      >
                        {langdata.Send}
                      </button>
                    </div>
                    <p className="form-messege text-success mb-0 mt-20">
                      {messageSuccess}
                    </p>
                    <p className="form-messege text-error mb-0 mt-20">
                      {msgError}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
