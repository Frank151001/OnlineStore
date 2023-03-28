import "./styles/product.css";
import QuantityPicker from './quantityPicker';
import './styles/product.css';
import {useEffect,useState} from "react";

function Product(product){
    const[quantity, setQuantity] = useState(1);

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

    

    return(
        <div className='product'>
            <h5>{product.data.title}</h5>
            <img src={"/images/"+product.data.image} alt=''/>
            <div className='prices'>
                <label>Price: ${product.data.price.toFixed(2)}</label>
                <label>Total: ${getTotal()}</label>
            </div>
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button type="button" className="btn btn-sm btn-info">Add</button>

            <div className="controls">
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button type="button" className="btn btn-sm btn-info">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </button>
            </div>
        </div>

        
    );
}

export default Product;