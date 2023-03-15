import Carousel from 'react-bootstrap/Carousel'
import { useHistory } from "react-router-dom";
import './index.css';
import locationIcon from '../../assets/location-icon.PNG'
import servicesIcon from '../../assets/services-icon.PNG'
export default function Slider() {
    const history = useHistory();

    return(
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img 
                    className="d-block w-100, img-size"
                    src="https://sandemanevents.com/wp-content/uploads/2019/01/ED21_183x-2000x1000.jpg"
                    alt="First slide" 
                    />
                    <Carousel.Caption>
                        <div className="carosel-captions">
                            <p id="para">Give your Events a Royal Look</p>
                            <button id="how-it-works-btn">See How It Works</button>
                            <br />
                            <br />
                            <div id="inputfields">
                                <img src={locationIcon} className="input-icons"/>
                                <input className="inputs" placeholder="Find location..."/> &nbsp; &nbsp; 
                                <img src={servicesIcon} className="input-icons"/>
                                <input className="inputs" placeholder="Select services..."/>&nbsp; &nbsp;
                                <button id="search-btn">Search</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100, img-size"
                    src="https://www.bumbleevents.co.uk/wp-content/uploads/2019/08/corporate-event-planner-london.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="carosel-captions">
                            <p id="para">Give your Events a Royal Look</p>
                            <button id="how-it-works-btn">See How It Works</button>
                            <br />
                            <br />
                            <div id="inputfields">
                                <img src={locationIcon} className="input-icons"/>
                                <input className="inputs" placeholder="Find location..."/> &nbsp; &nbsp; 
                                <img src={servicesIcon} className="input-icons"/>
                                <input className="inputs" placeholder="Select services..."/>&nbsp; &nbsp;
                                <button id="search-btn">Search</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100, img-size" 
                    src="https://i.pinimg.com/originals/73/5f/71/735f71a9eeae396cab5b58a8c8944a88.jpg"
                    alt="Third slide"
                    /> 
                    <Carousel.Caption>
                        <div className="carosel-captions">
                            <p id="para">Give your Events a Royal Look</p>
                            <button id="how-it-works-btn">See How It Works</button>
                            <br />
                            <br />
                            <div id="inputfields">
                                <img src={locationIcon} className="input-icons"/>
                                <input className="inputs" placeholder="Find location..."/> &nbsp; &nbsp; 
                                <img src={servicesIcon} className="input-icons"/>
                                <input className="inputs" placeholder="Select services..."/>&nbsp; &nbsp;
                                <button id="search-btn">Search</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}