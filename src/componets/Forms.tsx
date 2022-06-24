import { ChangeEvent, FC, useEffect, useState } from "react";
import { DeleteBasket } from "../store/CreateStore";
import { useAppDispatch, useAppSelector } from "./../store/state";



interface IProps {
   changeBool: (n: boolean) => void;
   cost: number;
}
const Forms: FC<IProps> = ({ changeBool, cost }) => {
   const [state, setState] = useState<number>(0);
   const [buttonValue, setbuttonValue] = useState<string>("Далее");
   const [dissabled, setDissabled] = useState<boolean>(true);
   useEffect(() => {
      if (state === 2) {
         setbuttonValue("");
      } else if (state === 3) {
         changeBool(false);
      } else {
         setbuttonValue("Next");
      }
   }, [state]);
   const FuncDissabled = (n: boolean) => {
      setDissabled(n)
   }
   return (
      <div className="onsova_form">
         <div className="close" onClick={() => changeBool(false)}>
            <span>╳</span>
         </div>
         <div className="froms">
            <div className="steps">
               {[1, 2, 3].map((value, index) => {

                  return (
                     <div
                        className={`step ${state === index ? "active" : ""}${state > index ? "completet" : ""
                           }`}>
                        <p> {value}</p>
                     </div>
                  );
               })}
               <div className="step_1">
               </div>
            </div>
            <div className="osnova_form">
               {state === 0 && <FirstPage FuncDissabled={FuncDissabled} />}
               {state === 1 && <TwoPage FuncDissabled={FuncDissabled} />}
               {state === 2 && <TreePage cost={cost} changeBool={changeBool} />}
            </div>
            <div className="osnova_forms">
               {state > 0 && (
                  <button onClick={() => setState((state) => state - 1)}>
                     Previous                  </button>
               )}
               <button
                  disabled={dissabled}
                  style={state === 2 ? { display: "none" } : {}}
                  onClick={() => setState((state) => state + 1)}>
                  {buttonValue}
               </button>
            </div>
         </div>
      </div>
   );
};
export default Forms;
interface FirstTS {
   FuncDissabled: (n: boolean) => void;
}
const FirstPage: FC<FirstTS> = ({ FuncDissabled }) => {
   const [name, setName] = useState<string>("")
   const [surname, setSurname] = useState<string>("");
   const [age, setAge] = useState<string>("");
   const [mobile, setMobile] = useState<string>("");
   const [gmail, setGmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   useEffect(() => {
      if (surname.trim() === "" || name.trim() === "" || age.trim() === "" || mobile.trim() === "" || password.trim() === "") {
         FuncDissabled(true);
      }
      else {
         FuncDissabled(false);
      }
   }, [name, surname, age, mobile, gmail, password])
   return (
      <div className="form_pages">
         <div className="block choise">
            <h1>Name</h1>

            <input
               type="text"
               placeholder="Enter your name"
               value={name}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <h1>Surname </h1>
            <input
               type="text"
               placeholder="Enter your surname"
               value={surname}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
            />
            <h1>Age</h1>
            <input type="number" placeholder="Enter your age"
               value={age}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
               min={1} max={100}
               maxLength={3}
            />
            <div></div>
         </div>
         <div className="block choise">
            <h1>Mobile Number </h1>
            <input
               type="phone"
               placeholder="Enter your mobile number"
               value={mobile}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setMobile(e.target.value)}
               maxLength={13} />
            <h1>Gmail</h1>
            <input
               type="text"
               placeholder="Enter your gmail"
               value={gmail}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setGmail(e.target.value)}
            />
            <h1>Password</h1>
            <input type="password"
               value={password}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
               placeholder="Enter your password"
            />
            <div>
            </div>
         </div>
      </div>
   );
};
interface FirstTS {
   FuncDissabled: (n: boolean) => void;
}
const TwoPage: FC<FirstTS> = ({ FuncDissabled }) => {
   const [country, setCountry] = useState<string>("")
   const [addres, setAdress] = useState<string>("")
   const [house, setHouse] = useState<string>("")
   useEffect(() => {
      if (country.trim() === "" || addres.trim() === "" || house.trim() === "") {
         FuncDissabled(true);
      }
      else {
         FuncDissabled(false);
      }
   }, [country, addres, house])
   return (
      <div className="form_pages two">
         <h1>Country</h1>
         <input type="text"
            value={country}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
            placeholder="Enter your country"
         />
         <h1>Adress {"(street)"}</h1>
         <input type="text"
            value={addres}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAdress(e.target.value)}
            placeholder="Enter your address"
         />
         <h1>House {("(Number)")}</h1>
         <input type="text"
            value={house}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setHouse(e.target.value)}
            placeholder="Enter your house"
         />
         <div>
         </div>
      </div >
   );
};
interface TreePage {
   cost: number;
   changeBool: (n: boolean) => void;
}
const TreePage: FC<TreePage> = ({ cost, changeBool }) => {
   const { sum, buy, basket } = useAppSelector((state) => state.data);
   const dispatch = useAppDispatch();
   const handleClick = () => {
      if (buy.length !== 1) {
         dispatch(DeleteBasket())
      }
      alert("The purchase was successful ")
      changeBool(false);
   };
   return (
      <div className="form_pages tree">
         <div className="block">
            {buy.length === 1 ? <>
               {buy?.map((item: any) => {
                  const { image, name, price, count } = item;

                  return (
                     <div className="block_buy" key={name}>
                        <img src={image} alt="" />
                        <p>{name}</p>
                        <p>{cost}$</p>
                        <p>{count}</p>
                     </div>
                  )
               })}</> : (
               <>{basket.map((item: any) => {

                  const { image, name, price, count } = item;
                  return (
                     <div className="block_buy" key={name}>
                        <img src={image} alt="" />
                        <p>{name}</p>
                        <p>{price}$</p>
                        <p>{count}</p>
                     </div>
                  )
               })}</>
            )}
         </div>
         <div className="block">
            <h1>Title {cost}$</h1>
            <button onClick={handleClick}>Pay</button>
         </div>
      </div >
   );
};
