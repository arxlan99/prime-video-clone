import React from "react";
import clasess from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={clasess.footer}>
      <div className={clasess.title}>prime video</div>
      <div className={clasess.content}>
        <ul>
          <li>Terms and Privacy Notice</li>
          <li>Send us feedback</li>
          <li>Help</li>
          <li>© 1996-2021, Amazon.com, Inc. or its affiliates</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
