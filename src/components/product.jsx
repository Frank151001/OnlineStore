import "./styles/product.css";
import QuantityPicker from './quantityPicker';
import './styles/product.css';
import {useEffect,useState,useContext} from "react";
import globalContext from "../state/globalContext";


function Product(product){
    const[quantity, setQuantity] = useState(1);
    const addToCart = useContext(globalContext).addToCart;

    useEffect(function(){
        console.log("hey im a product");
    },[]);
    function onQuantityChange(qty){
        console.log("New value: " + qty);
        setQuantity(qty);
    }
    function getTotal(){
        let total = product.data.price * quantity;
        return total.toFixed(2);        
    }

    function handleAddClick(){
        console.log("Adding to cart");
        let prodForCart ={...product.data};
        prodForCart.quantity=quantity;
        console.log(prodForCart);

        addToCart(prodForCart)
    }



    return(
        <div className='product'>
            <h5>{product.data.title}</h5>
            <img src={"/images/"+product.data.image} alt=''/>
            <div className='prices'>
                <label>Price: ${product.data.price.toFixed(2)}</label>
                <label>Total: ${getTotal()}</label>
            </div>

            <div className="controls">
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button type="button" onClick={handleAddClick} className="btn btn-sm btn-dark">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </button>
            </div>
        </div>

        
    );
}

export default Product;