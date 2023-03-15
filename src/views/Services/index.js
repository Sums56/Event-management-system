import "./index.css";
import partyHalls from "../../assets/partyhalls-icon.PNG";
import saloonIcon from "../../assets/saloon-icon.PNG";
import cateringIcon from "../../assets/catering-icon.PNG";
import designerIcon from "../../assets/designer-icon.PNG";
import search from "../../assets/search.PNG";
import request from "../../assets/request.PNG";
import book from "../../assets/book.PNG";
import watchVideo from "../../assets/watch-video.PNG";
import customer from "../../assets/customer.PNG";
import venue from "../../assets/venue.PNG";
import neelam from "../../assets/neelam.PNG";
import commentIcon from "../../assets/comment-icoo.PNG";
import Footer from "../Footer";

export default function Services() {
  return (
    <div>
      <p className="service-heading">Our Best Services For You</p>
      <div id="img-container-1">
        <img src={partyHalls} id="partyhall-icon" />
        <img src={saloonIcon} id="saloon-icon" />
        <img src={cateringIcon} id="catering-icon" />
        <img src={designerIcon} id="designer-icon" />
      </div>
      <br />
      <div>
        <div id="party-text">
          <p>
            PARTY HALLS <br /> 35 Events | 15 Service Providers
          </p>
        </div>
        <div id="saloon-text">
          <p>
            SALOONS <br /> 35 Events | 15 Service Providers
          </p>
        </div>
        <div id="catering-text">
          <p>
            CATERING SERVICES <br /> 35 Events | 15 Service Providers
          </p>
        </div>
        <div id="designer-text">
          <p>
            DRESS DESIGNER <br /> 35 Events | 15 Service Providers
          </p>
        </div>
      </div>
      <div id="book-service">
        <br />
        <p className="service-heading" id="book-text">
          How Book Services?
        </p>
        <div id="img-main-div">
          <div id="search-icon">
            <img src={search} className="all-img" />
            <p>
              <span className="head">Search Services</span> <br /> Search,
              review, short list and <br /> share the Best Banquet Halls, <br />{" "}
              Party Halls near you.
            </p>
          </div>
          <div id="request-icon">
            <img src={request} className="all-img" />
            <p>
              <span className="head">Request Quote</span> <br /> Get multiple
              competing free <br /> quotes from Banquet Hall and <br /> Party
              Halls owners.
            </p>
          </div>
          <div id="book-icon">
            <img src={book} className="all-img" />
            <p>
              <span className="head">Book a Service</span> <br /> Select a quote
              that best fits your <br /> needs and book or reserve a<br />{" "}
              Banquet Hall of your choice.
            </p>
          </div>
          <div id="watch-video">
            <p>
              <span className="head">Watch Video</span>
            </p>
            <img src={watchVideo} />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div id="comment-section">
        <div id="one">
          <br />
          <div id="customer-icon">
            <img src={customer} className="customer-img" />
            <p id="customer-text">
              <span className="head-comment-section">For Customers</span>
              <br />
              <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div id="venue-icon">
            <img src={venue} className="all-img" />
            <p id="venue-text">
              <span className="head-comment-section">For Venue Owners</span>{" "}
              <br /> <br /> Our single goal is to increase your occupancy. Bring{" "}
              <br /> your more customers from a wide variety of new
              <br /> channels. We will relentlessly promote your proper- <br />
              ties to expand your visibility across multiple new customers{" "}
              <br />
              to your banquet sales personnel round the clock is what <br /> we
              thrive to achieve.{" "}
            </p>
          </div>
        </div>
        <div id="two">
          <br />
          <p id="side-commments">Love In Comments</p>
          <img src={neelam} className="neelam-img" />
          <br />
          <br />
          <p id="name">Neelam Muneer</p>
          <p id="neelam-comment">
            We used Event Management to host a <br /> cocktail party for our
            wedding. We used <br /> them for finalizing the venue and the pho-
            <br />
            tographer. It was so easy to find and shot-
            <br />
            list a venie thanks to their service. Ankush <br /> and Aditya were
            very helpful and always available <br /> at any time of the day to
            help us <br /> with our queries and sort out any issues we <br />{" "}
            faced. They also replied us get the best deals.
            <br /> Strongly recommmended in case you <br />
            want to host any event.
          </p>
          <img src={commentIcon} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
