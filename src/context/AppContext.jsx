import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/greencart_assets/assets";


export const AppContext = createContext(null);
const AppcontextProvider = ({children}) =>{
    const navigate = useNavigate();
    const [user, setUser]= useState(null);
    const [isSeller, setIsSeller] =useState(null);
    const [showUserLogin, setShowUserLogin] =useState(false);
    const [products,setProduct]=useState([])
    const fetchProducts=async()=>{
        setProduct(dummyProducts);
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
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
};
export default AppcontextProvider;

