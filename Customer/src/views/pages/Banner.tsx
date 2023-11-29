import React from "react";
import Slider from "react-slick";
const Banner: React.FC = () => {
  var settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const listBanner = [
    "https://pkmacbook.com/wp-content/uploads/2021/07/banner-thoi-trang-nu-hien-dai_113857960.png",
  ];
  return (
    <Slider {...settings} className="overflow-hidden">
      {listBanner.map((image, index) => (
        <div key={index} className="banner-home">
          <img
            src={image}
            alt=""
            width={"100%"}
            style={{ height: "500px", objectFit: "cover" }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
