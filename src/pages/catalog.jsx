import Product from '../components/product';
import './styles/catalog.css';
import { useEffect, useState } from 'react';
import DataService from "../services/dataService";

function Catalog(){
    const[products,setProducts]=useState([]);

useEffect(function(){
    console.log("component loaded");
    loadCatalog();
},[]);

    function loadCatalog(){
        let service= new DataService();
        let products= service.getProduct();
        console.log(products);
        setProducts(products);
    }

    return(

        <div className='catalog'>
            <h1>Hello check our stuff</h1>
            <h5>We have {products.length} new products for you</h5>

            {products.map((p)=>(
                <Product data={p}></Product>
                
            ))}
        </div>
    );
}

export default Catalog;