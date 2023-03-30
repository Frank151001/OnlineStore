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
        console.log("cheeking");
    }
    function removeToCart(){
        console.log("Deleting...");
    }
    
    return <GlobalContext.Provider value={{
        cart:cart,
        user:user,
        addToCart:addToCart,
        removeToCart:removeToCart
    }}>{props.children}</GlobalContext.Provider>;
}
export default GlobalProvider;