import './styles/productincart.css';

function ProductInCart(prod){
    
    function getTotal(){
        let total= prod.data.price * prod.data.quantity;
        return total.toFixed(2);
    }

    return(
        <div className="prod-cart">
            <h5>{prod.data.title}</h5>
            <img src={"/images/"+prod.data.image} alt=''/>
           
                <label>Price: ${prod.data.price.toFixed(2)}</label>
                <label>Total: ${getTotal()}</label>
        
           
        </div>
    )
}
export default ProductInCart;