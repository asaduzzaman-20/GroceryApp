import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/greencart_assets/assets";

import toast from "react-hot-toast"
export const AppContext = createContext(null);
const AppcontextProvider = ({children}) =>{
    const navigate = useNavigate();
    const [user, setUser]= useState(null);
    const [isSeller, setIsSeller] =useState(null);
    const [showUserLogin, setShowUserLogin] =useState(false);
    const [products,setProduct]=useState([])
    const [cartItems,setCartItems]=useState({})
    const [searchQuery, setSearchQuery] =useState([])

    const fetchProducts=async()=>{
        setProduct(dummyProducts);
    }
    const addToCart=(itemId)=>{
        let cartData=structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] +=1;
        }else{
            cartData[itemId]=1;
        }
        setCartItems(cartData);
        toast.success('added to cart')
    }
    const cartCount=()=>{
        let totalCount=0;
        for (const items in cartItems){
            totalCount += cartItems[items]
        }
        return totalCount;
    }
    const totoalCartAmount=()=>{
        let totalAmount=0;
        for(const items in cartItems){
            let itemInfo=products.find((product)=>product._id==items);
        if(cartItems[items]>0){
            totalAmount+=cartItems[items]*itemInfo.offerPrice;
        }
        }
        return Math.floor(totalAmount*1000)/100;
    }

    const updateCartItem=(itemId, quantity)=>{
        let cartData =structuredClone(cartItems);
        cartData[itemId]=quantity;
        setCartItems(cartData);
        toast.success("cart updated")
    }
     const removeFromCart =(itemId)=>{
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]){
            cartData[itemId]-=1;
            if (cartData[itemId]==0){
                delete cartData[itemId]
            }
        }
        toast.success("removeFrom cart");
        setCartItems(cartData);
     }

    useEffect(()=>{
        fetchProducts()
    },[])
    
    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        addToCart,
        updateCartItem,
        cartCount,
        removeFromCart,
        cartItems,
        totoalCartAmount,
        searchQuery,
        setSearchQuery,
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
};
export default AppcontextProvider;

