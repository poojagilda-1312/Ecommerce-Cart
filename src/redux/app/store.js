import {configurestore} from "@reduxjs/toolkit";
import cartSlice from "../features/cartslice";


//create store 
 export const store = configurestore({
    reducer:{
        allCart:cartSlice
    }
 })