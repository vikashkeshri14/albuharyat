import React from "react";

export default function Social() {
  return (
    <div className="ltn__social-media">
      <ul>
        <li className="ml-1 mr-1">
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/jawharat.albuhairat"
            title="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li className="ml-1 mr-1">
          <a
            aria-label="Twitter"
            href="https://x.com/j_albuhairat"
            title="Twitter"
          >
            <i className="fab fa-x" />
          </a>
        </li>
        <li className="ml-1 mr-1">
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/jawharat.albuhairat/"
            title="Instagram"
          >
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li className="ml-1 mr-1">
          <a
            aria-label="Snapchat"
            href="https://www.snapchat.com/add/j_albuhairat"
            title="Snapchat"
          >
            <i className="fab fa-snapchat" />
          </a>
        </li>
        <li className="ml-1 mr-1">
          <a
            aria-label="Whatsapp"
            href="https://api.whatsapp.com/send?phone=966552555184"
            title="Whatsapp"
          >
            <i className="fab fa-whatsapp" />
          </a>
        </li>
      </ul>
    </div>
  );
}
