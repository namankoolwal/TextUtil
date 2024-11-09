import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = (props) => {
  return (
    <>
      <div className="mt-5">
        <div className={`d-flex justify-content-around align-items-center bg-${props.mode} shadow-lg py-4`}>
          <h6>
            <i className={`fa text-${props.mode === 'light'? 'dark':'light'} fa-copyright me-2`}> Build with 💗 by Naman Khandelwal</i>
          </h6>
          <div className="d-flex justify-content-center">
            <a href="https://twitter.com/NAMANKH31936926" className={`d-flex text-decoration-none text-${props.mode === 'light'? 'dark':'light'} align-items-center me-4`}>
              <FaTwitter className="me-1" />
              Twitter
            </a>
            <a href="https://github.com/namankoolwal" className={`d-flex text-decoration-none text-${props.mode === 'light'? 'dark':'light'} align-items-center me-4`}>
              <FaGithub className="me-1" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/naman-khandelwal-568971189/" className={`d-flex text-decoration-none text-${props.mode === 'light'? 'dark':'light'} align-items-center`}>
              <FaLinkedin className="me-1" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
