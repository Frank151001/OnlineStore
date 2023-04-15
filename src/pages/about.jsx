import "./styles/about.css";
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function About(){
    const[displayEmail,setDisplayEmail] = useState(false);

    function toggleEmail(){
        console.log("Hello");
        setDisplayEmail(true);
    }

    function getEmailSection(){
        if(displayEmail){
            return(  
                <div className="content">
                    
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"images/Imagen.jpg"} />
                <Card.Body>
                  <Card.Title>Francisco Ibarra Gomez</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Info Contact</Button>
                </Card.Body>
              </Card>
              
              </div>
            )
            
        }
        else{
            return (null)
        }
    }

    return(
        <div className="About">
           <div className="box">
           <h1>Contact Info</h1>
           <p>At our store, we are committed to providing high-quality products and exceptional customer service. Our mission is to make your online shopping experience as seamless and enjoyable as possible.</p>
           <p>Our team consists of dedicated professionals who are passionate about delivering top-notch service to our customers. We believe in going the extra mile to ensure that our customers are satisfied with every purchase.</p>
            {getEmailSection()}
            <br />
            <button className="btn btn-sm btn-dark" onClick={toggleEmail}>Show 
            details</button>
            <br />
           </div>
           
            
        </div>
        
    );
}

export default About;