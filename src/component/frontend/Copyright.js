import React from "react";
import Social from "./Social";
export default function Copyright() {
  return (
    <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
      <div className="container-fluid ltn__border-top-2">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="ltn__copyright-design clearfix">
              <p>Copyright 2025 Artar | All Rights Reserved </p>
            </div>
          </div>
          <div className="col-md-6 col-12 align-self-center">
            <div className="ltn__copyright-menu text-end">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
