import { Link, useHistory } from "react-router-dom";
import './index.css'
import mailIcon from '../../assets/mail-icon.PNG';
import callIcon from '../../assets/call-icon.PNG';
import headerIcon from '../../assets/header-icon.PNG';
import Slider from "../Slider";
import Services from '../Services';
export default function Home() {
    const history = useHistory();
    return(
        <div>
                <div id="top-div">
                    <p className="mail-contact-no"><img src={mailIcon} className="top-icons"/> customertraveltriange@gmail.com  &nbsp; &nbsp; | </p> 
                    <p className="mail-contact-no">&nbsp; &nbsp; <img src={callIcon} className="top-icons"/> 111-222-333</p>
                </div>
            <img src={headerIcon} id="header-icon"/>
            <div id="event-info">
            <h3 id="event-heading"><span className="first-letter-size">E</span>VENT <span className="first-letter-size">M</span>ANAGEMENT
                <button className="sign-btns" onClick={()=>{history.push('/login')}}>Sign In</button> &nbsp;
                <button className="sign-btns" onClick={()=>{alert("You clicked on Sign Up")}}>Sign Up</button>
            </h3>
            </div>
            <div id="slider">
            <Slider />
            <br />
            <Services />
            </div>
            
        </div>
    )
}