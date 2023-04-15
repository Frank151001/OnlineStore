import "./styles/home.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

function Home(){
 
    return (
    <div className="Home">
        <div className="boxH">
        <h1>Welcome To my Online Store!</h1>    
        <p>Welcome to our online store! We offer a wide variety of products to enhance your life and make your everyday routines easier. From home essentials to beauty products, we have everything you need to live your best life. Explore our selection and discover your new favorite products today!</p>
        <div className="headers">
        <h2>Featured Products</h2>
        </div>
        <div className="container">
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
        <Accordion.Header>Home Decor</Accordion.Header>
        <Accordion.Body>
        Our selection of home decor includes everything from stylish throw pillows to chic wall art. Add a touch of personality to your living space with our unique and affordable decor.
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
        <Accordion.Header>Kitchen Appliances</Accordion.Header>
        <Accordion.Body>
        Make cooking and entertaining a breeze with our selection of high-quality kitchen appliances. From coffee makers to blenders, we have the tools you need to create delicious meals and drinks.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Outdoor Gear</Accordion.Header>
        <Accordion.Body>
        Get outside and explore with our selection of outdoor gear. From camping equipment to hiking boots, we have everything you need to enjoy the great outdoors.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Beauty Products</Accordion.Header>
        <Accordion.Body>
        Pamper yourself with our selection of beauty products. From skincare to makeup, we have everything you need to look and feel your best.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Electronics</Accordion.Header>
        <Accordion.Body>
        Stay connected and entertained with our selection of electronics. From smartphones to headphones, we have the latest gadgets to keep you in the loop.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Beverage</Accordion.Header>
        <Accordion.Body>
        We offer a wide variety of drinks to quench your thirst and satisfy your cravings. From refreshing sodas to rich coffees, we have something for everyone.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <br></br>
        </div>
        </div>

        <div className="info">
        <div className="headers">
        <h2>Why Choose Us?</h2>
        </div>
        
        <div className="cards">
            
        <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={"images/Quality.jpg"} />
      <Card.Body>
        <Card.Title>Quality Products</Card.Title>
        <Card.Text>
        All of our products are carefully selected and tested to ensure the highest quality.
        </Card.Text>
       
      </Card.Body>
      
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="center" src={"images/Affordable.jpg"} />
      <Card.Body>
        <Card.Title>Affordable Prices</Card.Title>
        <Card.Text>
        We offer competitive prices on all of our products, so you can get the items you need without breaking the bank.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
        <br />
        <br />
        <br />
        
      <Card.Img variant="center" src={"images/Fast.jpg"} />
      <Card.Body>
        <br />
        <br />
        <Card.Title>Fast Shipping</Card.Title>
        <Card.Text>

        We offer fast and reliable shipping to get your products to you as quickly as possible.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"images/customer.avif"} />
      <Card.Body>
        <Card.Title>Excellent Customer Service</Card.Title>
        <Card.Text>
        Our friendly and knowledgeable customer service team is here to answer any questions you may have and ensure your complete satisfaction.
        </Card.Text>
       
      </Card.Body>
    </Card>
    
        </div>
        
    </div>
    </div>
    );
}

export default Home;