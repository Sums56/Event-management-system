import React from "react";
import './index.css';
import socialIcons from '../../assets/social-icons.PNG';
import callIcons from '../../assets/callFoot.PNG';
import mailIcons from '../../assets/mailFoot.PNG';

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-3 mb-md-0 mb-3, one">
                <p className="text-titlecase, heading">Our Story</p>
                <ul className="list-unstyled">
                    <li>About us</li>
                    <li>Team</li>
                </ul>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
            
            <div className="col-md-3 mb-md-0 mb-3, two">
                <p className="text-titlecase, heading">Get inspired</p>
                <ul className="list-unstyled">
                    <li>Testimonial</li>
                    <li>Blog</li>
                </ul>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3, three">
                <p className="text-titlecase, heading">Policies</p>
                <ul className="list-unstyled">
                    <li>Terms and Conditions</li>
                    <li>PrivacyPolicy</li>
                    <li>Cancellation</li>
                </ul>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3, four">
                <p className="text-titlecase, heading">More</p>
                <ul className="list-unstyled">
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
            
            <div className="col-md-3 mb-md-0 mb-3, five">
                <p className="text-titlecase, heading">Karachi Office</p>
                <ul className="list-unstyled">
                    <li>Al Baraka House 162 Banglore Town, Main <br/> Shahrah-e-Faisal,Karachi,Pakistan</li>
                    <li></li>
                    <li>PABX: +92.(21).3431.5851</li>
                    <li>Fax: +92.(21).3454.6465</li>
                    <li>Email: info@albarka.com.pk</li>
                </ul>
            </div>
    <hr />
        </div>
    </div>

    <div className="footer-copyright text-center py-3">Connect with us on: <img src={socialIcons}/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <img src={callIcons}/> 111-222-333 &nbsp; &nbsp; &nbsp; <img src={mailIcons}/> customercare@eventmanagement.com.pk <br />
    <span id="footer-span">All rights reserved &copy; 2017 </span>
    </div>

</footer>

export default Footer