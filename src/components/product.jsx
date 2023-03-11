import "./styles/product.css";
import QuantityPicker from './quantityPicker';
import './styles/product.css';
import {useEffect} from "react";

function Product(product){

    useEffect(function(){
        console.log("hey im a product");
    },[]);
    return(
        <div className='product'>
            <h5>{product.title}</h5>
            <img src={"/images/"+product.data.img} alt=''/>
            <div className='prices'>
                <label>Price: ${product.data.price}</label>
                <label>Total: ${product.data.price}*QuantityPicker</label>
            </div>
            <QuantityPicker></QuantityPicker>
            <button type="button" className="btn btn-primary">Info</button>
        </div>
    );
}

export default Product;