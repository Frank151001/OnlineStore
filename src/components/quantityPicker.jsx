import './styles/quantityPicker.css'
import{useState} from "react";

function QuantityPicker(){

    let [i,setI] = useState(1);
     
    function decrease(){
        if(i>0){
            setI(--i);
        }
        console.log("clicked event decrease " + i);
    }

    function increase(){
        if(i>=0){
            setI(++i);
        }
        console.log("clicked event increase " + i);
    }

    return (
        <div className="qt-picker">
            <button disabled={i===0} onClick={decrease}> - </button>
            <label>{i}</label>
            <button onClick={increase}> + </button>
        </div>
    );
}

export default QuantityPicker;