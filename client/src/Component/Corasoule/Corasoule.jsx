import React from "react";
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const Corasoule = () => {
  return (
    <div>
     <div id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} alt="Los Angeles" width="500" height="500" />
          </div>
          <div class="carousel-item">
            <img src={image2} alt="Chicago" width="500" height="500" />
          </div>
          <div class="carousel-item">
            <img src={image1} alt="New York" width="500" height="500" />
          </div>
        </div>

        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
};

export default Corasoule;
