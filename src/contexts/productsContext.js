import React from "react"
import axios from "axios";

export const productsContext = React.createContext()

const ProductsContextProvider = ({children}) => {
    const API = 'http://localhost:8000/products';


    return <productsContext.Provider value={{}}>{children}</productsContext.Provider>


}
export default ProductsContextProvider