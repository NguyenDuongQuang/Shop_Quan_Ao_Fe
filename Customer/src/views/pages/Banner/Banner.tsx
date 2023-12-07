import React from "react";
import Slider from "react-slick";
import './index.scss';

// Do cả chương trình chỉ có 1 list carousel
// Nên lưu thẳng vào đây để đỡ tốn chi phí query
const list = [
  'https://pkmacbook.com/wp-content/uploads/2021/07/banner-thoi-trang-nu-hien-dai_113857960.png',
  'https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-viet-nam_113858319.jpg',
  'https://tmluxury.vn/wp-content/uploads/banner-do-shop-thoi-trang-nam-tphcm-tmluxury.jpg',
  'https://th.bing.com/th/id/R.d6723abc637ec8f38e06b0dc278fa6fa?rik=6xvE%2f5qGGp46Wg&riu=http%3a%2f%2fquanao.info%2fwp-content%2fuploads%2f2015%2f09%2fbanner-1.jpg&ehk=jrBQxkOwyVkVqmfTIPofYMOrk8TdsRdQwtNGi2q3kQY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
  'https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-the-thao-cho-nam_113858272.jpg',
  'https://pkmacbook.com/wp-content/uploads/2021/07/banner-thoi-trang-hien-dai-dep-nhat_113857069.jpg',
  'https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-dang-cap-hien-dai_113856116.png',
  'https://img3.thuthuatphanmem.vn/uploads/2019/10/12/tong-hop-nhung-banner-thoi-trang-dep-nhat_021715560.jpg',
  'https://3.bp.blogspot.com/-UoLTYLQc5HA/XINQs0XFVNI/AAAAAAAAAfI/8-Qi_V25bbI8WqfcxWqgkYVvTr-erpgjwCLcBGAs/w1200-h630-p-k-no-nu/san-pham-trong-kinh-doanh-thoi-trang-online.jpg',
  'https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-dep_113856538.jpg',
  'https://pkmacbook.com/wp-content/uploads/2021/07/banner-thoi-trang-nu-hien-dai_113857960.png',
  'https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-dang-cap-hien-dai_113856116.png',
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