import { useEffect,useState } from "react";
import "./Laptops.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ProductList = ({endpoint}) => {
    const [products,setProducts]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:9000/${endpoint}`).then(res=>setProducts(res.data));
    },[endpoint]);

    return(
        <div className="parent">
            {products.map((product)=>(
                <div className="child" key={product.id} onClick={()=>navigate(`/product/${product.id}`)}>
                    <img src={product.pimage} alt={product.pname} />
                    <h4>{product.pname}</h4>
                    <h5>{product.pcost}</h5>
                    <h5>{product.qty}</h5>
                </div>
            ))}
        </div>
    )};

export default ProductList;
