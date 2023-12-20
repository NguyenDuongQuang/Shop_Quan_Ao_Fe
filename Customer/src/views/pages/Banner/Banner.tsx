import React from "react";
import Slider from "react-slick";
import './index.scss';

// Do cả chương trình chỉ có 1 list carousel
// Nên lưu thẳng vào đây để đỡ tốn chi phí query
const list = [
  //'https://pkmacbook.com/wp-content/uploads/2021/07/banner-thoi-trang-nu-hien-dai_113857960.png',
  'https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-viet-nam_113858319.jpg',
  'https://tmluxury.vn/wp-content/uploads/banner-do-shop-thoi-trang-nam-tphcm-tmluxury.jpg',
  'https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-the-thao-cho-nam_113858272.jpg',
];


function Banner() {
  return (
    <Slider className="Bannner" autoplay>
      {list.map((item, index) => (
        <img className="Bannner-img" src={item} key={index} />
      ))}
    </Slider>
  );
}

export default Banner;