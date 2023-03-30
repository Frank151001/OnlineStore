import {Provider} from 'react';
import GlobalContext from './globalContext';
import { useState } from 'react';
function GlobalProvider(props){
    const [cart,setCart] =useState([]);
    const[user,setUser] =useState({name:"Francisco Ibarra", id:1234});
    function addToCart(prod){
        console.log("global fn");

        let copy=[...cart];
        copy.push(prod);
        setCart(copy);
    }
    function removeToCart(){
        console.log("Deleting...");
    }

    function getNumberOfProducts(){
        let total=0;
        for(let i=0;i<cart.length;i++){
          let prod = cart[i];
          total =total+prod.quantity;
        }
        return total;
    }
    
    return (<GlobalContext.Provider 
        value={{
        cart:cart,
        user:user,
        addToCart:addToCart,
        removeToCart:removeToCart,
        getNumberOfProducts:getNumberOfProducts,
    }}>{props.children}</GlobalContext.Provider>
    );
}
export default GlobalProvider;