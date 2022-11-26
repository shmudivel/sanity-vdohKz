import React from "react";
import { BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 VDOH All rights reserverd</p>
      <p className="icons">
        <a
          href="https://www.instagram.com/vdoh_kz/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a href="https://t.me/vdohkz" target="_blank" rel="noreferrer">
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
