import React from "react";
import "../../../css/Style.css";
import "../../../css/bootstrap.min.css";
import "../../../js/bootstrap.min";
import Corasoule from "../../../Corasoule/Corasoule";
import image from "../../../../Images/home.jpg";
import image1 from "../../../../Images/menu-4-256.png";

const Home = () => {
  return (
    <div>
      <div class="container-fluid" class="bg-image" style={{ backgroundImage: image }}>

        <div class="row">

          <div class="col-sm-8">
            <br></br>
            <div style={{ backgroundColor: "lightblue" }}>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
            </div>


          </div>
          <div class="col-sm-4">
            <br></br>
            <div style={{ backgroundColor: "lightblue" }}>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
              <p >This text is important.</p>
            </div>


          </div>

        </div>
      </div>


    </div>

  );
};

export default Home;
