import React from "react";
import "../../../../css/Home.css";
import "../../../css/bootstrap.min.css";
import "../../../js/bootstrap.min";
import Corasoule from "../../../Corasoule/Corasoule";
import image from "../../../../Images/background.jpg";
import image2 from "../../../../Images/background2.jpg";
import image1 from "../../../../Images/menu-4-256.png";


const Home = () => {
  return (
    <div>
      <div className="table" >
        <div className=".container-fluid">
          <div className="row">
            <div className="col-sm-5 col-md-6">
              <div className="card bg-dark text-white">
                <img className="backimage1" src={image} alt="" />
                <div className="card-img-overlay">
                  <h2 className="card-title">UPCOMING EVENTS</h2><br /><br />
                  <h4 className="card-title">CLOUD Workshop</h4>
                  <h5>10.07.2021</h5><br />
                  <h4 className="card-title">BLOCKCHAIN Workshop</h4>
                  <h5>15.07.2021</h5><br />
                  <h4 className="card-title">IOT Workshop</h4>
                  <h5>20.07.2021</h5><br />
                </div>
              </div>
            </div>
            <div className="col-sm-5 offset-sm-1 col-md-6 offset-md-0">
              <img className="backimage" src={image2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>




  );
};

export default Home;
