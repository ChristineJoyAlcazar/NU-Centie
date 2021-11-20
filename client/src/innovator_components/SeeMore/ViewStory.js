import React from "react";
// import '../../App.css';
import "../innovators.css";
import "../SeeMore/ViewMore-Elements.css";

import pic3 from "../../assets/Article1.png";
import NavBar from "../../NavbarFooter/NavBar";
import Footer from "../../NavbarFooter/Footer";

function ViewStory(props) {
  console.log(props.location.state);
  const { title } = props.location.state;
  const { description } = props.location.state;
  const { date } = props.location.state;
  const { name } = props.location.state;
  console.log({ title });
  console.log({ date });

  return (
    <div className="App">
      <NavBar />
      <div className="MainContainer">
        <h1 className="heading1">INNOVATORS & STORIES</h1>
        <div className="storyContainer">
          <ul>
            <li className="linkpage">
              {" "}
              <a href="/"> Innovators </a> /{" "}
              <a href="/app"> Featured Innovator </a>/ CoE prof gets
              international faculty award
            </li>
            {/* <li className="headingTitle">CoE prof gets international faculty award</li> */}
            <li className="headingTitle">{title}</li>
            <li className="subHeading">{name}</li>
            <li className="date">{date}</li>
          </ul>
          <hr />
          <div class="fillDiv">
            <img className="fill-imageDiv" src={pic3} alt="Logo" />
          </div>
          <h2 className="sourceImage">Photo from National University</h2>

          <p className="content"> {description} </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ViewStory;
