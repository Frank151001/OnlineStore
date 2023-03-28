import "./styles/admin.css"
import{useState} from 'react';

function Admin(){
    const[product,setProduct]=useState({});
    const[coupon,setCoupon]=useState({});

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
    }
    function saveCoupon(){
        console.log(coupon);
    }

    return <div className="admin">
        <h1>Manage your Store</h1>

        <main>
            <section id="products">
                <h5>Products</h5>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input name="title"onChange={handleTextChange}type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input name="category"onChange={handleTextChange}type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Image Name</label>
                        <input name="image"onChange={handleTextChange}type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Prices</label>
                        <input name="price" onChange={handleTextChange}type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <button type="button" onClick={saveProduct}className="btn btn-primary">Save</button>
                    </div>
                </form>
            </section>
            <section id="coupons">
                <h5>Coupon Codes</h5>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Code</label>
                        <input name="title"onChange={handleCouponTextChange}type="code" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Discount</label>
                        <input name="discaount"onChange={handleCouponTextChange}type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <button type="button" onClick={saveCoupon}className="btn btn-primary">Save</button>
                    </div>
                </form>
            </section>
        </main>
    </div>
}
export default Admin;