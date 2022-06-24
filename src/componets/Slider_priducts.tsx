
import React, { FC } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppSelector } from './../store/state';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToBasket } from '../store/CreateStore';
var settings = {
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   initialSlide: 0,
   autoplay: true,
   autoplaySpeed: 2500,
   arrows: false,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
};

interface Sliders {
   category: string
}
const Slider_priducts: FC<Sliders> = ({ category }) => {
   const { product } = useAppSelector(state => state.data)
   const dispatch = useDispatch()
   return (
      <div className="products_main">
         <div className="wrapper">
            <div className="products">
               <Slider {...settings}>
                  {product.filter((item) => item.category.includes(category)).
                     map((item: any) => {
                        const { id, image } = item;
                        return (
                           <div className="product" key={id}>
                              <div className="choise_product">
                                 <div className="blocks">
                                    <div className="block">
                                       <p onClick={() => dispatch(AddToBasket(item))}>🛒</p>
                                    </div>
                                    <div className="block">
                                       <Link to={`/productFull/:${id}`}
                                          onClick={() => window.scrollTo(0, 0)}>
                                          <p>🔍</p>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                              <img src={image} alt="" />
                           </div>
                        )
                     })}
               </Slider>
            </div>
         </div>
      </div>
   )
}
export default Slider_priducts