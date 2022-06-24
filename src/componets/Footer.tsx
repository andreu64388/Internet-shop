import React, { FC } from 'react'
import { Link } from 'react-router-dom';
interface contactsTS {
   name: string;
   img: string;
   Link: string;
}
const contacts: contactsTS[] = [
   { name: "VK", img: "https://cdn.icon-icons.com/icons2/1121/PNG/512/1486147202-social-media-circled-network10_79475.png", Link: "https://vk.com/andr15shev" },
   { name: "Instagram", img: "https://cdn.icon-icons.com/icons2/1211/PNG/512/1491580635-yumminkysocialmedia26_83102.png", Link: "https://www.instagram.com/andr_15_sh/" },
   { name: "Telegram", img: "https://cdn.icon-icons.com/icons2/2429/PNG/512/telegram_logo_icon_147228.png", Link: "https://github.com/andreu64388" },
]
const Footer: FC = () => {
   return (
      <div className='footer'>
         <div className="wrapper">

            <div className="logo">
               WebShop
            </div>
            <ul className="nav">
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/product">Product</Link>
               </li>
               <li>
                  <Link to="/basket"
                  >Basket
                  </Link>
               </li>
            </ul>
            <div className="contacts">

               <ul>
                  {contacts.map((item: contactsTS) => {
                     const { img, name, Link } = item;
                     return (
                        <li key={name}>
                           <a href={Link}>
                              <img src={img} alt={name} />
                              <p>{name}</p>
                           </a>
                        </li>
                     )
                  })}
               </ul>

            </div>
         </div>
      </div >
   )
}

export default Footer