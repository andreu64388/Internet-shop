import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { checkbox } from '../assests/assets';
import { AddToBasket } from '../store/CreateStore';
import { useAppDispatch, useAppSelector } from './../store/state';
import Footer from './Footer';
const Product: FC = () => {
   const { product } = useAppSelector(state => state.data);
   const dispatch = useAppDispatch()
   const [products, setProducts] = useState<any>(product);
   const [sortPrice, setSortPrice] = useState<string>("");
   const [sortYear, setSortYear] = useState<string>("")
   const [sortSale, setSortSale] = useState<string>("")
   const [research, setResearch] = useState<string>("");
   const [filter, setFilter] = useState<any | string>(product)
   const [change, setChange] = useState<any[]>(checkbox);
   const [option, setOption] = useState<any[]>(product);
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   useEffect(() => {
      if (change.map(item => item.checked).includes(true)) {
         const productNew =
            option.map((item: any): any => {
               if (change.filter(item => item.checked).map(item => item.color).includes(item.color)) {
                  return item;
               }
            }
            )
         setProducts(productNew.filter((item: any) => item !== undefined));
      } else {
         setOption(option);
         setProducts(option);
      }
   }, [change]);
   const handleChangePrice = (value: string) => {
      setSortPrice(value)
      setSortSale("Sale")
      setSortYear("Years")
      const result = "price"
      if (value === "ascending") {
         const newProduct = [...products].sort((a: any, b: any) => a[result] - b[result])
         setProducts(newProduct)
      }
      else if (value === "descending") {
         const newProduct = [...products].sort((a: any, b: any) => b[result] - a[result])
         setProducts(newProduct)
      }
      else {
         setProducts(product)
      }
   }
   const Filter = (valueOfFilter: string | any) => {
      setFilter(valueOfFilter)
      if (valueOfFilter === product) {
         setProducts(product)
         setOption(product)
      }
      else {
         const NewDate = product.filter((item: any) => item.category === valueOfFilter);
         setProducts(NewDate)
         setOption(NewDate);
      }
      setChange(change.map(item => {
         return { ...item, checked: false }
      }))
   }
   const handleChangeYears = (value: string) => {
      setSortYear(value)
      setSortPrice("Price")
      setSortSale("Sale")
      const result = "years"
      if (value === "ascending") {
         const newProduct = [...products].sort((a: any, b: any) => a[result] - b[result])
         setProducts(newProduct)
      }
      else if (value === "descending") {
         const newProduct = [...products].sort((a: any, b: any) => b[result] - a[result])
         setProducts(newProduct)
      }
      else {
         setProducts(product)
      }
   }
   const handlerChangeCheckbox = (index: number) => {
      setChange(
         change.map((topping, currentIndex) =>
            currentIndex === index
               ? { ...topping, checked: !topping.checked }
               : topping
         )
      )
   }
   const handleChangeSale = (value: string) => {
      setSortSale(value)
      setSortPrice("Price")
      setSortYear("Years")
      const result = "sale"
      if (value === "ascending") {
         const newProduct = [...products].sort((a: any, b: any) => a[result] - b[result])
         setProducts(newProduct)
      }
      else if (value === "descending") {
         const newProduct = [...products].sort((a: any, b: any) => b[result] - a[result])
         setProducts(newProduct)
      }
      else {
         setProducts(product)
      }
   }
   const ResetAllFilters = () => {
      setSortPrice("");
      setSortYear("");
      setSortSale("");
      setResearch("")
      setChange(checkbox);
      setProducts(product)
      setOption(product)
      setFilter(product);
   }
   return (
      <div
         className='animate'>
         <div className="wrapper">
            <div className="research">
               <div className="sort">
                  <p>Sort by:</p>
                  <div className="selects">
                     <select
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChangePrice(e.target.value)}
                        value={sortPrice}>
                        <option value="">Price</option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                     </select>
                     <select
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChangeYears(e.target.value)}
                        value={sortYear}>
                        <option>Year</option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                     </select>
                     <select
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChangeSale(e.target.value)}
                        value={sortSale}>
                        <option>Sale</option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                     </select>
                  </div>
               </div>
            </div>
            <div className="products__input">
               <div className="input">
                  <h1>Research</h1>
                  <input type="text"
                     placeholder="Search"
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setResearch(e.target.value)}
                     value={research}
                  />
                  <h1>Category</h1>
                  <div className="categors">
                     <button style={filter === product ? { background: "black", color: "white" } : {}}
                        onClick={() => Filter(product)} >All</button>
                     <button style={filter === "phone" ? { background: "black", color: "white" } : {}}
                        onClick={() => Filter("phone")} >Phone</button>
                     <button
                        style={filter === "clothing" ? { background: "black", color: "white" } : {}}
                        onClick={() => Filter("clothing")} >Clothes</button>
                     <button
                        style={filter === "book" ? { background: "black", color: "white" } : {}}
                        onClick={() => Filter("book")} >Book</button>
                  </div>
                  <h1>Сolor selection</h1>
                  <div className="colors">
                     {checkbox.map((index, i) => {
                        return (
                           <p className='check'>
                              <input type="checkbox"
                                 id={index.color}
                                 key={i}
                                 checked={change[i].checked}
                                 onChange={() => handlerChangeCheckbox(i)} />
                              <label htmlFor={index.color}>
                                 <p className={change[i].checked ? 'circle active' : 'circle'}
                                    style={{ background: index.color }}
                                 >
                                 </p></label>
                           </p>
                        );
                     })}
                  </div>
                  <button className='reset'
                     onClick={ResetAllFilters} >
                     Reset all filters
                  </button>
               </div>
               <div className="products">
                  {products.filter((n: any) => {
                     if (research === "") return n;
                     else if (
                        n.name.toLowerCase().includes(research.toLowerCase())
                     ) {
                        return n;
                     }
                  }).map((item: any) => {
                     const { id, image } = item;
                     return (
                        <div className="product" key={id}>
                           <div className="choise_product">
                              <div className="blocks">
                                 <div className="block">
                                    <p onClick={() => dispatch(AddToBasket(item))}> 🛒</p>
                                 </div>
                                 <div className="block">
                                    <Link to={`/productFull/:${id}`}>
                                       <p>🔍</p>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                           <img src={image} alt="" />
                        </div>
                     )
                  }
                  )}
               </div>
            </div>
         </div >
         <Footer />
      </div >
   )
}
export default Product