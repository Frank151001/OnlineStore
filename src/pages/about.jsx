import "./styles/about.css";
import {useState} from 'react';

function About(){
    const[displayEmail,setDisplayEmail] = useState(false);

    function toggleEmail(){
        console.log("Hello");
        setDisplayEmail(true);
    }

    function getEmailSection(){
        if(displayEmail){
            return(  <h5>Franckgomez323@gmail.com</h5>)
        }
        else{
            return (null)
        }
    }

    return(
        <div className="About">
            <i class="fa fa-car" aria-hidden="true"></i>
            <h1>Francisco Ibarra</h1>
            {getEmailSection()}
            <button className="btn btn-sm btn-dark" onClick={toggleEmail}>Show my Email</button>
        </div>
    );
}

export default About;