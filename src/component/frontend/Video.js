import React from "react";
export default function Video() {
  return (
    <div className="ltn__slider-area ltn__slider-4 position-relative ltn__primary-bg">
      <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
        {/* HTML5 VIDEO */}

        <video autoPlay muted loop id="myVideo">
          <source src="/assets/media/3.mp4" type="video/mp4" />
        </video>
        <div className="ltn__slide-item " data-bs-bg="img/slider/41.jpg"></div>
      </div>
    </div>
  );
}
