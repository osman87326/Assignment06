import React from 'react';
import social from '../assets/Social Links.png' ;

const Footer = () => {
    return (
        <div>
            <footer className="  footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title text-4xl">Digital Tool</h6>
    <p>Premium digital tools for creators, <br /> professionals, and businesses. <br />
     Work smarter with our suite of powerful tools.</p>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <img src={social} alt="" />
  </nav>
</footer>
        </div>
    );
};

export default Footer;