import "./styles/admin.css"
import{useState} from 'react';
import DataService from "../services/dataService";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Admin(){
    const[product,setProduct]=useState({});
    const[coupon,setCoupon]=useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleTextChange(e){
        const value=e.target.value;
        const name=e.target.name;
        let copy={...product};
        copy[name]=value;
        setProduct(copy);
    }

    function handleCouponTextChange(c){
        const value=c.target.value;
        const name=c.target.name;
        coupon[name] = value;
        let copy={...coupon};
        copy[name]=value;
        setCoupon(copy);
    }
    function saveProduct(){
        console.log(product);
        let copy = {...product};
        copy.price = parseFloat(copy.price);
        let service = new DataService();
        service.saveProduct(copy);
        setProduct({
            title: '',
            image: '',
            category: '',
            price: '',
        });
    }
    function saveCoupon(){
        console.log(coupon);
    }

    return <div className="admin">
        <h1>Add New Products</h1>

        <main>
            <div className="box">
                <div className="headers">
                <h1>Products</h1>
                </div>
           
            <section id="products">

                <form>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input name="title" value={product.title} onChange={handleTextChange}type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input name="category" value={product.category} onChange={handleTextChange}type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Image Name</label>
                        <input name="image" value={product.image} onChange={handleTextChange}type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Prices</label>
                        <input name="price"  value={product.price} onChange={handleTextChange}type="number" className="form-control" />
                    </div>
                    
                </form>
                <div className="buttoms">
                <div className="mb-3">
                        <button type="button" onClick={saveProduct}className="btn btn-primary">Save</button>
                    </div>
                <Button variant="primary" onClick={handleShow}>
                Reedem Coupons!
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Coupon Codes</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Code</label>
                        <input name="code"onChange={handleCouponTextChange}type="code" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Discount</label>
                        <input name="discount"onChange={handleCouponTextChange}type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <button type="button" onClick={saveCoupon}className="btn btn-primary">Save</button>
                    </div>
                </form>
                </Offcanvas.Body>
                </Offcanvas>
                </div>
                
            </section>
            </div>
        
            
         

                
 
        </main>
    </div>
}
export default Admin;