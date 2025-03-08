import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function WhyChooseUs() {
  const langdata = useSelector((state) => state.language.langd);
  return (
    <div
      id="chooseus"
      className="ltn__service-area section-bg-1 pt-35 pb-70 go-top"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <p className="section-subtitle section-subtitle-2 ltn__secondary-color">
                {langdata.chooseusquestion}
              </p>
              <h1 className="section-title">{langdata.JawharatAlBuhayrat}</h1>
            </div>
          </div>
        </div>
        <div className="row  justify-content-center">
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              style={{ minHeight: "320px" }}
              className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1"
            >
              <div className="ltn__feature-icon">
                <span>
                  <i className="flaticon-house" />
                </span>
              </div>
              <div className="ltn__feature-info">
                <p className="animated fadeIn">
                  <Link className="font-18 text-title" to="#">
                    {langdata.PrimeLocation}
                  </Link>
                </p>
                <p>{langdata.PrimeLocationContent}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              style={{ minHeight: "320px" }}
              className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1"
            >
              <div className="ltn__feature-icon">
                <span>
                  <i className="flaticon-mortgage" />
                </span>
              </div>
              <div className="ltn__feature-info">
                <p className="animated fadeIn">
                  <Link className="font-18 text-title" to="#">
                    {langdata.ModernArchitectural}
                  </Link>
                </p>
                <p>{langdata.ModernArchitecturalContent}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              style={{ minHeight: "320px" }}
              className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1"
            >
              <div className="ltn__feature-icon">
                <span>
                  <i className="flaticon-operator" />
                </span>
              </div>
              <div className="ltn__feature-info">
                <p className="animated fadeIn">
                  <Link className="font-18 text-title" to="#">
                    {langdata.FullyIntegratedCommunity}
                  </Link>
                </p>
                <p>{langdata.FullyIntegratedCommunityContent}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              style={{ minHeight: "320px" }}
              className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1"
            >
              <div className="ltn__feature-icon">
                <span>
                  <i className="flaticon-house-1" />
                </span>
              </div>
              <div className="ltn__feature-info">
                <p className="animated fadeIn">
                  <Link className="font-18 text-title" to="#">
                    {langdata.DiverseResidential}
                  </Link>
                </p>
                <p>{langdata.DiverseResidentialContent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
