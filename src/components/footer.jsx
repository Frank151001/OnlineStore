import './styles/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Footer(){
    return(
        <footer className='footer-basic'>
      <div>
        
      </div>
      <Button variant="outline-secondary">Home</Button>{' '}
      <Button variant="outline-secondary">About Us</Button>{' '}
      <Button variant="outline-secondary">Admin Page</Button>{' '}
      <Button variant="outline-secondary">Terms</Button>{' '}
      <Button variant="outline-secondary">Privacy Policy</Button>{' '}
      <br></br>
      <label className='copyright'>Francisco Ibarra @Copyright</label>
    </footer>
    );
}
export default Footer;