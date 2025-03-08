import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../features/language/language";
import Social from "./Social";

export default function Header(props) {
  const [pathname, setPathname] = useState("");
  const lang = useSelector((state) => state.language.value);
  const langdata = useSelector((state) => state.language.langd);

  const [stylePath, setStylePath] = useState("assets/css/en.css");
  let publicUrl = process.env.PUBLIC_URL + "/";
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("lang", lang);
    if (lang == "en") {
      setStylePath("assets/css/en.css");
    } else {
      setStylePath("assets/css/rtl.css");
    }
    document
      .querySelector("html")
      .setAttribute("dir", lang == "en" ? "ltr" : "rtl");
    document
      .querySelector("html")
      .setAttribute("lang", lang == "en" ? "en" : "ar");
  }, [lang]);
  return (
    <div>
      <link rel="stylesheet" type="text/css" href={stylePath} />
      <header
        className={
          props.otherPage
            ? "ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---"
            : "ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-2"
        }
      >
        {/* ltn__header-top-area start */}
        <div
          className={
            props.otherPage
              ? "ltn__header-top-area section-bg-6 top-area-color-white---"
              : "ltn__header-top-area top-area-color-white"
          }
        >
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <a aria-label="email" href="mailto:info@webmail.com">
                        <i className="icon-mail" /> info@artar.com.sa
                      </a>
                    </li>
                    <li>
                      <a aria-label="Phone number" href="#">
                        <i className="icon-call" /> 920027239
                      </a>
                    </li>
                    <li>
                      <a
                        aria-label="Whatsapp Number"
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=966552555184"
                      >
                        <i className="icon-whatsapp" /> +966 55 255 5184
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="top-bar-right text-end">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        {/* ltn__language-menu */}
                        <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                          <ul>
                            <li>
                              <a
                                aria-label="Change Language"
                                href="#"
                                onClick={() =>
                                  dispatch(
                                    changeLanguage(lang == "en" ? "ar" : "en")
                                  )
                                }
                              >
                                <span className="active-currency arfont">
                                  <i className="fa fa-globe" />
                                  {langdata.language}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        {/* ltn__social-media */}
                        <div className="ltn__social-media">
                          <Social />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__header-top-area end */}
        {/* ltn__header-middle-area start */}
        <div
          className={
            props.otherPage
              ? "ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white"
              : "ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black"
          }
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-logo-wrap">
                  <div className="site-logo go-top">
                    <Link to="/">
                      <img
                        src={publicUrl + "assets/img/logo-2.png"}
                        alt="Logo"
                        decoding="async"
                      />
                    </Link>
                  </div>
                  <div className="get-support clearfix d-none">
                    <div className="get-support-icon">
                      <i className="icon-call" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  props.otherPage
                    ? "col header-menu-column "
                    : "col header-menu-column menu-color-white"
                }
              >
                <div className="header-menu d-none d-xl-block go-top top-bar-right text-end">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        <li className={pathname == "" ? "special-link" : ""}>
                          <Link to="/">{langdata.home}</Link>
                        </li>
                        <li
                          className={pathname == "about" ? "special-link" : ""}
                        >
                          <a
                            aria-label="About Us"
                            onClick={() => setPathname((pathname) => "about")}
                            href="#about"
                          >
                            {langdata.about}
                          </a>
                        </li>
                        <li
                          className={
                            pathname == "chooseus" ? "special-link" : ""
                          }
                        >
                          <a
                            aria-label="Why Choose Us"
                            onClick={() =>
                              setPathname((pathname) => "chooseus")
                            }
                            href="#chooseus"
                          >
                            {langdata.chooseus}
                          </a>
                        </li>
                        <li
                          className={
                            pathname == "register" ? "special-link" : ""
                          }
                        >
                          <a
                            aria-label="Register"
                            onClick={() =>
                              setPathname((pathname) => "register")
                            }
                            href="#register"
                          >
                            {langdata.register}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="col--- ltn__header-options ltn__header-options-2 ">
                {/* Mobile Menu Button */}
                <div className="mobile-menu-toggle d-xl-none">
                  <a
                    aria-label="Menu button"
                    href="#ltn__utilize-mobile-menu"
                    className="ltn__utilize-toggle"
                  >
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                      />
                      <path d="M300,320 L540,320" id="middle" />
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__header-middle-area end */}
      </header>

      <div
        id="ltn__utilize-mobile-menu"
        className="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link to="/">
                <img
                  src={publicUrl + "assets/img/logo.jpg"}
                  alt="Logo"
                  decoding="async"
                />
              </Link>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>

          <div className="ltn__utilize-menu">
            <ul>
              <li className={pathname == "" ? "special-link" : ""}>
                <a aria-label="Home" href="#">
                  {langdata.home}
                </a>
              </li>
              <li className={pathname == "about" ? "special-link" : ""}>
                <a
                  aria-label="About Us"
                  onClick={() => setPathname((pathname) => "about")}
                  href="#about"
                >
                  {langdata.about}
                </a>
              </li>
              <li className={pathname == "chooseus" ? "special-link" : ""}>
                <a
                  aria-label="Why Choose Us"
                  onClick={() => setPathname((pathname) => "chooseus")}
                  href="#chooseus"
                >
                  {langdata.chooseus}
                </a>
              </li>
              <li className={pathname == "register" ? "special-link" : ""}>
                <a
                  aria-label="Register with us"
                  onClick={() => setPathname((pathname) => "register")}
                  href="#register"
                >
                  {langdata.register}
                </a>
              </li>
            </ul>
          </div>
          <div className="ltn__social-media-2">
            <ul>
              <li>
                <a aria-label="Facebook" href="#" title="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a aria-label="Twitter" href="#" title="Twitter">
                  <i className="fab fa-x" />
                </a>
              </li>
              <li>
                <a aria-label="Linkedin" href="#" title="Linkedin">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a aria-label="Instagram" href="#" title="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
