import './index.css';
import sideImg from '../../assets/login-img.PNG'
import mailIcon from '../../assets/mail-icon2.PNG'
import passIcon from '../../assets/pass-icon.PNG'

export default function Login() {
    return(
        <div className="main-div">
            <div id="left-div"><br/><br/>
                <img src={sideImg} id="side-img"/>
                <br/>
                <p id="copyright-text">&copy; 2020 EVENT MANAGEMENT. All Rights Reserved.</p>
            </div>
            <div className="login-form">
                <p id="english-dropdown">English (USA)
                <select>
                    <option></option>
                </select>
                </p>
                <p id="start-text-login">START WITH EVENT MANAGEMENT</p>
                <h1 id="heading">Log in to EVENT MANAGEMENT</h1>
                <label className="label"> E-mail* </label>
                <br />
                <input className="input-fields" placeholder="example@gmail.com" />
                <img src={mailIcon} id="mail-icon"/>
                <br />
                <label className="label"> Password* </label>
                <br />
                <input  className="input-fields" type="password" placeholder="*********" />
                <img src={passIcon} id="pass-icon"/>
                <br />
                <button id="login-btn">Login</button>
            </div>
        </div>
    )
}