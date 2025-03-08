import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
export default function CheckAvaibility() {
  const langdata = useSelector((state) => state.language.langd);
  const [messageError, setMessageError] = useState("");

  const [iqama, setIqama] = useState("");
  const [iqamaError, setIqamaError] = useState(false);
  const [item, setItem] = useState(null);

  const CheckAvailable = async () => {
    console.log(iqama);
    if (!iqama) {
      setIqamaError(true);
      setMessageError("Please enter the Iqama");
      return;
    }
    setIqamaError(false);
    setMessageError("");

    const obj = {
      key: iqama,
    };
    //console.log(apiList.search);

    let params = { url: apiList.search, body: obj };
    //console.log(params);
    let response = await ApiService.postData(params);

    if (response.result) {
      setItem(response.result);
    } else {
      setItem(null);
      setMessageError(langdata.notexist);
    }
  };

  return (
    <div className="ltn__video-popup-area ltn__video-popup-margin---">
      <div
        className="ltn__video-bg-img ltn__video-popup-height-600--- bg-overlay-black-30 bg-image bg-fixed ltn__animation-pulse1"
        data-bs-bg={"/assets/img/bg/back.webp"}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__section-title-area text-center">
              <p className="ltn__section-sub-heading ltn__secondary-color"></p>
              <h1 className="ltn__section-title text-white">
                {langdata.PerfectInvestment}
              </h1>

              <p className="ltn__section-title font-20 text-white">
                <Link
                  title={langdata.KnowPercentage}
                  data-bs-toggle="modal"
                  data-bs-target="#quick_view_modal"
                >
                  {langdata.KnowPercentage}
                </Link>
              </p>

              <p className="ltn__section-title font-22 text-white">
                {langdata.DreamJewel}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ltn__modal-area ltn__quick-view-modal-area">
        <div className="modal fade" id="quick_view_modal" tabIndex={-1}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                  {/* <i className="fas fa-times"></i> */}
                </button>
              </div>
              <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                  <div className="modal-product-item">
                    <div className="row">
                      <h1>{langdata.Completionpercentage}</h1>
                      <div className="col-lg-12 col-12">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            {langdata.iqama}
                          </label>
                          <input
                            style={{ marginBottom: "0px" }}
                            type="text"
                            value={iqama}
                            onChange={(e) => setIqama(e.target.value)}
                            className={
                              iqamaError
                                ? "form-control border-danger"
                                : "form-control"
                            }
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder={langdata.iqama}
                          />
                          <small
                            id="emailHelp"
                            className="form-text text-danger"
                          >
                            {messageError}
                          </small>
                        </div>
                        <div className="mt-3">
                          <button
                            onClick={() => CheckAvailable()}
                            type="button"
                            className="btn btn-primary"
                          >
                            {langdata.Search}
                          </button>
                        </div>
                      </div>
                      {item != null && (
                        <div className="col-lg-12 col-12 mt-3">
                          <div className="table-responsive">
                            <table className="table table-bordered table-hover table-striped">
                              <thead className="  table-warning">
                                <tr>
                                  <th>{langdata.project_name}</th>
                                  <th>{langdata.BeneficiaryName}</th>
                                  <th className="d-xl-block">{langdata.zip}</th>
                                  <th className="d-xl-block">
                                    {langdata.block}
                                  </th>
                                  <th>{langdata.villaNo}</th>
                                  <th className="d-xl-block">
                                    {langdata.villaModel}
                                  </th>
                                  <th className="d-xl-block">
                                    {langdata.noofbedroom}
                                  </th>
                                  <th>{langdata.completeRate}</th>
                                  <th>{langdata.SiteReport}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{langdata.JawharatAlBuhayrat}</td>
                                  <td>{item.benfichery_name}</td>
                                  <td className="d-xl-block">{item.code}</td>
                                  <td className="d-xl-block">{item.block}</td>
                                  <td>{item.villa_no}</td>
                                  <td className="d-xl-block">{item.type}</td>
                                  <td className="d-xl-block">
                                    {item.bedrooms}
                                  </td>

                                  <td>
                                    {parseFloat(
                                      item.completion_percentage
                                    ).toFixed(2)}
                                    %
                                  </td>
                                  <td>
                                    <a
                                      aria-label="Download Report"
                                      className="text-primary"
                                      href={item.reports_browser}
                                      target="_blank"
                                    >
                                      {langdata.downloadReport}
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
