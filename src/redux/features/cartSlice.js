import {createSlice} from "@reduxjs/toolkit"
const intialState= {
    carts :[]
}
//cart slice 
const cartSlice= createSlice({
    name:"cartslice",
    intialState,
    reducers:{
        //add to cart action
        addToCart:(state,action)=>{

        }
    }
}) 
export const {addToCart} = cartSlice.action;
export default cartSlice.reducer;