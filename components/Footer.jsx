import React from "react";
import { BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Vdoh All rights reserverd</p>
      <p className="icons">
        <a href="https://www.instagram.com/vdoh_kz/">
          <BsInstagram />
        </a>
        <a href="https://t.me/vdohkz">
          <BsTelegram />
        </a>
        {/* <a href="/">
          <BsWhatsapp />
        </a> */}
      </p>
    </div>
  );
};

export default Footer;
