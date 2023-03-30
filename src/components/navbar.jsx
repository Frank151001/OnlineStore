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
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          ONLINE SHOP
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/admin">
                Admin Page
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
          
              <Link className="btn btn-outline-success position-relative" to="/cart">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">{numberOfProducts()}</span>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              Cart
              </Link>
          </form>
        </div>
      </div>
    </nav>
    );
}
export default Navbar;