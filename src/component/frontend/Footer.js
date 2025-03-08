import React, { useEffect, useState } from "react";

import Copyright from "./Copyright";

export default function Footer() {
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [messageSuccess, setMessageSuccess] = useState("");
  const [button, setButton] = useState(false);
  useEffect(() => {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

    $(document).on("click", ".theme-btn-1 ", function () {
      $("div").removeClass("modal-backdrop");
      $("div").removeClass("show");
      $("div").removeClass("fade");
      $("body").attr("style", "");
    });
  }, []);
  const subscribe = async () => {
    setButton(true);
    if (!email) {
      setEmailError(true);
      setMessageError("Please enter valid email!");
      setButton(false);
      return;
    }
    setMessageError("");
    setEmailError(false);

    const obj = {
      email: email,
    };
  };

  return (
    <footer className="ltn__footer-area  ">
      <Copyright />
    </footer>
  );
}
