import React from "react";
import "../../../css/Style.css";
import "../../../css/bootstrap.min.css";
import "../../../js/bootstrap.min";
import Corasoule from "../../../Corasoule/Corasoule"
//import image from "../../../../Images/image1.jpg"
//import image1 from "../../../../Images/menu-4-256.png";

const Home = () => {
  return (
    <div>
        <Corasoule/>
       <div className="container text-center mt-5 ">
        <h1>Our Features</h1>
        <p className="pt-2">Some Features</p>
      </div>
      <div className="container text-center pt-4">
        <div className="row">
          <div className="col-4">
            <div style={{ color: "red", fontSize: "250px" }}>
              <i className="fa fa-meetup" aria-hidden="true"></i>
            </div>
          </div>

          <div className="col-4">
            <div style={{ color: "red", fontSize: "250px" }}>
              <i className="fa fa-file-text" aria-hidden="true"></i>
            </div>
          </div>

          <div className="col-4">
            <div style={{ color: "red", fontSize: "250px" }}>
              <i className="fa fa-commenting-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center pt-4 ">
        <div className="row py-5">
          <div className="col-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="col-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="col-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      {/* <script>
        window.sr = ScrollReveal();
        sr.reveal('.container', {duration:1000})
        sr.reveal('.container-fluid',{duration:1000}  )
      </script> */}
    </div>
  );
};

export default Home;
