import "./styles/navbar.css";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import globalContext from "../state/globalContext";
import 'font-awesome/css/font-awesome.min.css';

function Navbar(){
  const numberOfProducts=useContext(globalContext).getNumberOfProducts;

  useContext(globalContext);
  function getCurrentPage(){
    return"catalog";
  }
  
  
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ONLINE SHOP
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin Page
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
          
              <Link className="btn btn-outline-success position-relative" to="/cart">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">{numberOfProducts()}</span>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              Cart
              </Link>
          </form>
        </div>
      </div>
    </nav>
    );
}
export default Navbar;