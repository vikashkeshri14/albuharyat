import React from "react";
import { useSelector } from "react-redux";
export default function About() {
  const langdata = useSelector((state) => state.language.langd);

  return (
    <div id="about" className="ltn__about-us-area pt-60 pb-90 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="ltn__shop-details-img-gallery">
              <div dir="ltr" className="ltn__shop-details-large-img">
                <div className="single-large-img">
                  <a
                    aria-label="Image Slider"
                    href="assets/img/slide/1.jpg"
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      src="assets/img/slide/1_1.webp"
                      alt="Image"
                      decoding="async"
                    />
                  </a>
                </div>
                <div className="single-large-img">
                  <a
                    aria-label="Image Slider"
                    href="assets/img/slide/2.jpg"
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      src="assets/img/slide/2_1.webp"
                      alt="Image"
                      decoding="async"
                    />
                  </a>
                </div>
                <div className="single-large-img">
                  <a
                    aria-label="Image Slider"
                    href="assets/img/slide/3.jpg"
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      src="assets/img/slide/3_1.webp"
                      alt="Image"
                      decoding="async"
                    />
                  </a>
                </div>
                <div className="single-large-img">
                  <a
                    aria-label="Image Slider"
                    href="assets/img/slide/4.jpg"
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      src="assets/img/slide/4_1.webp"
                      alt="Image"
                      decoding="async"
                    />
                  </a>
                </div>
                <div className="single-large-img">
                  <a
                    aria-label="Image Slider"
                    href="assets/img/slide/5.jpg"
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      src="assets/img/slide/5_1.webp"
                      alt="Image"
                      decoding="async"
                    />
                  </a>
                </div>
                <div className="single-large-img">
                  <a
                    aria-label="Image Slider"
                    href="assets/img/slide/6.jpg"
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      src="assets/img/slide/6_1.webp"
                      alt="Image"
                      decoding="async"
                    />
                  </a>
                </div>
              </div>
              <div
                dir="ltr"
                className="ltn__shop-details-small-img slick-arrow-2"
              >
                <div className="single-small-img">
                  <img
                    src="assets/img/slide/1.webp"
                    alt="Image"
                    decoding="async"
                  />
                </div>
                <div className="single-small-img">
                  <img
                    src="assets/img/slide/2.webp"
                    alt="Image"
                    decoding="async"
                  />
                </div>
                <div className="single-small-img">
                  <img
                    src="assets/img/slide/3.webp"
                    alt="Image"
                    decoding="async"
                  />
                </div>
                <div className="single-small-img">
                  <img
                    src="assets/img/slide/4.webp"
                    alt="Image"
                    decoding="async"
                  />
                </div>
                <div className="single-small-img">
                  <img
                    src="assets/img/slide/5.webp"
                    alt="Image"
                    decoding="async"
                  />
                </div>
                <div className="single-small-img">
                  <img
                    src="assets/img/slide/6.webp"
                    alt="Image"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-20">
                <p className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  {langdata.about}
                </p>
                <h1 className="section-title">
                  {langdata.luxury_meets}
                  <span>.</span>
                </h1>
                <p>{langdata.about_content}</p>
              </div>
              <ul className="ltn__list-item-half clearfix">
                <li>
                  <i className="flaticon-home-2" />
                  {langdata.SmartHomeDesign}
                </li>
                <li>
                  <i className="flaticon-mountain" />
                  {langdata.BeautifulSceneAround}
                </li>
                <li>
                  <i className="flaticon-heart" />
                  {langdata.ExceptionalLifestyle}
                </li>
                <li>
                  <i className="flaticon-secure" />
                  {langdata.CompleteSecurity}
                </li>
              </ul>
              <div className="ltn__callout bg-overlay-theme-05  mt-30">
                <p>{langdata.register_content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
