import React from "react";
import image1 from "../../Images/image1.jpg";
import image2 from "../../Images/image2.jpg";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const Corasoule = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={image1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={image2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={image1} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      {/* <script>
        $("#carousel-item").responsiveSlides(
        {{
          pager: true,
          speed: 500,
          namespace: "transparent-btns",
        }}
        );
      </script> */}
    </div>
  );
};

export default Corasoule;
