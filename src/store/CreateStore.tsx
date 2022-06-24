import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialTS } from "../interfaceTS/interface";
import { Products } from './../assests/assets';
import { Asset } from './../interfaceTS/interface';
const initialState: initialTS = {
   sum: 0,
   product: Products,
   basket: [],
   buy: []
};
const createStore = createSlice({
   name: "Shopping",
   initialState: initialState,
   reducers: {
      AddToBasket: (state: any, action: PayloadAction<Asset>) => {
         state.sum = state.sum + action.payload.price
         if (state.basket.find((item: any): any | never => item.id === action.payload.id)) {
            const result = state.basket.map((item: any): any => {
               if (item.id === action.payload.id) {
                  return { ...item, count: item.count + 1 };
               }
               else {
                  return item
               }
            })
            state.basket = result;
         }
         else {
            state.basket = [...state.basket, action.payload];
         }
      },
      DeleteToBasket: (state: any, action: PayloadAction<Asset>) => {
         state.sum = state.sum - action.payload.price;
         if (state.basket.find((item: any): any | never => item.id === action.payload.id && action.payload.count > 1)) {
            const result = state.basket.map((item: any): any => {
               if (item.id === action.payload.id) {
                  return { ...item, count: item.count - 1 };
               }
               else {
                  return item
               }
            })
            state.basket = result;
         }
         else {
            state.basket = state.basket.filter(
               (item: any) => item.id !== action.payload.id
            );
         }
      },
      AddComment: (state: any, action: PayloadAction<any>) => {
         const result = state.product.map((item: any) => {
            if (item.id === action.payload.id) {
               return { ...item, comment: [...item.comment, action.payload] };

            } else {
               return item;
            }
         })
         state.product = result;

      },
      DeleteComments: (state: any, action: PayloadAction<any>) => {
         const result = state.product.map((item: any) => {
            if (item.id === action.payload.id) {
               return {
                  ...item, comment: item.comment.filter((item: any) =>
                     item.date !== action.payload.date
                  )
               };
            } else {
               return item;
            }
         })
         state.product = result;
      },
      EditComments: (state: any, action: PayloadAction<any>) => {
         console.log(action.payload);
         const newComment = state.product.map((item: any) => {
            if (item.id === action.payload.id) {
              return {
                  ...item,
                  comment: item.comment.map((item: any) => {
                     if (item.date === action.payload.date) {
                        return { ...item, description: action.payload.description };
                     } else {
                        return item;
                     }
                  }),
               };
            } else {
               return item;
            }
         });
         state.product = newComment;
      },
      BuyOrder: (state: any, action: any) => {
         state.buy = [...action.payload]
      },
      DeleteBuy: (state: any) => {
         state.buy = [];
      }
      ,
      DeleteBasket: (state: any) => {
         state.buy = [];
         state.basket = [];
         state.sum = 0;
      }
   },
});
export const {
   AddToBasket,
   DeleteToBasket,
   AddComment,
   DeleteComments,
   EditComments,
   DeleteBasket,
   DeleteBuy
   , BuyOrder
} = createStore.actions;
export default createStore.reducer;
