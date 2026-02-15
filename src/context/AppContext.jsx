import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext(null);
const AppcontextProvider = ({children}) =>{
    const navigate = useNavigate();
    const [user, setUser]= useState(null);
    const [isSeller, setIsSeller] =useState(null);
    const [showUserLogin, setShowUserLogin] =useState(false);
    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin};
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
};
export default AppcontextProvider;

// import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const AppContext = createContext(null);

// const AppcontextProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(true); // 👈 বড় U

//   const value = {
//     navigate,
//     user,
//     setUser, // 👈 বড় U
//   };

//   return (
//     <AppContext.Provider value={value}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppcontextProvider;
