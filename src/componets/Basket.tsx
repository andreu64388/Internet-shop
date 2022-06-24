import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from './../store/state';
import { useDispatch } from 'react-redux';
import { AddToBasket, BuyOrder, DeleteBuy, DeleteToBasket } from '../store/CreateStore';
import Forms from './Forms';
import Footer from './Footer';
const Basket: FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   const { basket, sum } = useAppSelector(state => state.data);
   const dispatch = useDispatch();
   const [FormBool, setFormBool] = useState<boolean>(false)
   const changeBool = (value: boolean) => {
      setFormBool(value)
      dispatch(DeleteBuy())
   }
   const handleBuyOrder = (basket: any) => {
      setFormBool(true)
   }
   return (
      <div
         className='animate'>
         {basket.length === 0 ? (<div className="empty">
            <img src='https://img.freepik.com/free-vector/empty-concept-illustration_114360-1188.jpg?w=826&t=st=1648823036~exp=1648823636~hmac=b65d6663a934e8e750a4393fd70d7f1c40e0cea01fa1e9a84336aa1e5a2465d9' />
            <p>Your basket is empty go to <Link to="/product">Products</Link></p>
         </div>) : (
            <>            <h1 className='title_basket'>
               Your basket
            </h1>
               <p className="count_products">
                  <span>{basket.length}</span> products
               </p>
               <div className="wrapper bas">
                  <div className="basket">
                     {basket.map((item, index) => {
                        const { id, name, price, image, count } = item;
                        return (
                           <div className="product" key={id}>
                              <div className="id">
                                 <p>{index + 1}</p>
                              </div>
                              <div className="img">
                                 <Link to={`/productFull/:${id}`}>
                                    <img src={image} alt="" />
                                 </Link>
                              </div>
                              <div className="name">
                                 <Link to={`/productFull/:${id}`}>
                                    <p>{name}</p>
                                 </Link>
                              </div>
                              <div className="buttons_add_del">
                                 <button className='add' onClick={() => dispatch(AddToBasket(item))}>Add</button>
                                 <p className='count'><p>{count}</p></p>
                                 <button className='del'
                                    onClick={() => dispatch(DeleteToBasket(item))}
                                 >Del</button>
                              </div>
                           </div>
                        )
                     })}
                  </div>
                  <div className="title_list">
                     <p>Total:{sum}$</p>
                     <button onClick={() => handleBuyOrder(basket)}>Buy</button>

                  </div>
               </div>
               {FormBool && <Forms changeBool={changeBool} cost={sum} />}
            </>
         )}
         <Footer />
      </div>
   )
}
export default Basket