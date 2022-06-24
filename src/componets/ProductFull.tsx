
import React, { FC, useEffect, useState, ChangeEvent } from 'react'
import Slider from "react-slick";
import { useParams, Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AddComment, AddToBasket, BuyOrder, DeleteComments, EditComments, DeleteBuy } from '../store/CreateStore';
import { useAppDispatch, useAppSelector } from './../store/state';
import Forms from './Forms';
import Footer from './Footer';
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

const ProductFull: FC = () => {
   const { product } = useAppSelector(state => state.data);
   const { id } = useParams();
   const [value, setValue] = useState<string>("")
   const [edit, setEdit] = useState<boolean>(false)
   const [editId, setEditId] = useState<string>("")
   const [date, setDate] = useState<any>("")
   const [name, setName] = useState<string>("")
   const [boolName, setBoolName] = useState<boolean>(false)
   const [FormBool, setFormBool] = useState<boolean>(false)
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   const dispatch = useAppDispatch()
   const handleSendComment = (id: number) => {
      if (name === undefined || name === null || name === "") {
         setBoolName(true);
      }
      else {
         if (value.trim() === "") {
            return
         }
         else {
            const NewComment = {
               name: name,
               id: id,
               description: value,
               img: "https://nulltx.com/wp-content/uploads/2018/11/anonymous-cryptocurrency-1068x709.jpg",
               date: new Date()
            }
            dispatch(AddComment(NewComment))
            setValue('')
         }
      }
   }
   const changeBool = (value: boolean) => {
      setFormBool(value)
      dispatch(DeleteBuy())
   }
   const handleSaveComment = (id: number) => {
      if (value.trim() === "") {
         setEditId("")
         setEdit(false)
      }
      else {
         const EditComment = {
            id: id,
            date: date,
            description: value.trim(),
         }
         setEditId("")
         setEdit(false)
         dispatch(EditComments(EditComment))
         setValue('')
      }
   }
   const DeleteComment = (id: any) => {
      dispatch(DeleteComments(id))
   }
   const handleEdit = (item: any, date: any) => {
      setEditId(item.date)
      setEdit(true)
      setValue(item.description)
      setDate(date)
   }
   const handleBuyOrder = (index: any) => {
      dispatch(BuyOrder([index]))
      setFormBool(true)
   }
   return (
      <div className='animate'>
         {product.filter((product) => ":" + product.id === id).map((index) => {
            const { image, name, color, price, description, sale, category, years, comment, id } = index;
            return (
               <>
                  <div className="wrapper product_fulss">
                     <div className="block_img">
                        <img src={image} alt="" />
                     </div>
                     <div className="block_info">
                        <h1 className="title">
                           {name}
                        </h1>
                        <div className="description_full">
                           <p>Sale: <span>{sale}%</span> </p>
                           <p>Category: <span>{category}</span> </p>
                           <p>Years: <span>{years}</span> </p>
                           <p className='color'>Color:
                              <span className="block"
                                 style={{ backgroundColor: color }}>
                              </span> </p>
                           <p>Price: <span>{price}$</span> </p>
                           <p>Description: <span>{description}</span> </p>
                        </div>
                        <div className="block_buttons">
                           <button onClick={() => dispatch(AddToBasket(index))} >Add to cart</button>
                           <button onClick={() => handleBuyOrder(index)}>Buy</button>
                        </div>
                     </div>
                  </div>
                  <div className="wrapper">
                     <h1 className="title">
                        Similar products
                     </h1>
                  </div>
                  <div className="products_main">
                     <div className="wrapper">
                        <div className="products">
                           <Slider {...settings}>
                              {product.filter((item) => item.category.includes(category)).length > 3 ?
                                 (product.filter((item) => item.category.includes(category)
                                 ).filter((item) => item.id !== id)
                                    .map((item: any) => {
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
                                    }
                                    )) :
                                 (product.filter((item) => item.id !== id)
                                    .map((item: any) => {
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
                                    }
                                    ))
                              }
                           </Slider>
                        </div>
                     </div>
                  </div>
                  {
                     FormBool && <Forms changeBool={changeBool}
                        cost={price}
                     />
                  }
                  <div className="wrapper">
                     <div className="comment">
                        <h1 className='titles'>Comments</h1>
                        <div className="commets_main">


                           {comment?.length === 0 ? (
                              <div className='not_comment'
                              >
                                 <h1>Not comment</h1>
                              </div>
                           ) : (<>
                              {comment?.map((item: any) => {
                                 const { name, date, id, description } = item;
                                 return (
                                    <div>
                                       <div className="comment_block" key={id}>
                                          <div className="comment_block_img">
                                             <img src="https://nulltx.com/wp-content/uploads/2018/11/anonymous-cryptocurrency-1068x709.jpg" alt="" />
                                             <p>{name}</p>
                                          </div>
                                          <div className="Date">
                                             <p>{date.toLocaleTimeString()}</p>
                                          </div>
                                          <div className="comment_block_text">
                                             <p>{description}</p>
                                          </div>
                                          <div className="buttons" style={editId === item.date ? { opacity: 0 } : { opacity: 1 }}>
                                             <button onClick={() => handleEdit(item, date)}>Edit</button>
                                             <button onClick={() => DeleteComment(item)}>Delete</button>
                                          </div>
                                       </div>
                                    </div>
                                 )
                              })}
                           </>)}
                        </div>
                        <div className="inputs_register">
                           <div className="input_register">
                              <button
                                 className='register_button'
                                 onClick={() => setBoolName(true)}>Register</button>
                           </div>
                           <div className="input_btn">
                              <span>{value.length}/300</span>
                              <input type="text"
                                 maxLength={300}
                                 value={value}
                                 onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                                 placeholder="Comment..." />
                              {edit === false ? <button onClick={() => handleSendComment(id)}>Send</button> :
                                 <button onClick={() => handleSaveComment(index.id)}>Save</button>}
                           </div>
                        </div>
                     </div>
                  </div>
               </>
            )
         })}
         {
            boolName && (
               <div className="modal">
                  <div className="close" onClick={() => setBoolName(false)}>
                     <span>╳</span>
                  </div>
                  <div className="block_main">
                     <p>
                        <h1>
                           Enter your name
                        </h1>
                        <input type="text"
                           value={name}
                           maxLength={20}
                           onChange={(e) => setName(e.target.value)}
                        />
                        <button onClick={() => setBoolName(false)}>Send</button></p>
                  </div>
               </div>
            )
         }

         < Footer />
      </div >
   )
}
export default ProductFull