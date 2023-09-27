import { useContext } from "react"
import Context from "./Context"
import {FaShoppingBasket} from 'react-icons/fa'


export default function Products() {
    const value = useContext(Context);
    const adding = item => value.setAddcart([...value.addcart,item])
    return(
        <div className="contProducts">
           
            {value.filter.map(prod => <div className="products" key={prod.id}>
                <img src={prod.picture} alt="" />
                <h2>{prod.name}</h2>
                <h3>{prod.price} $</h3>
                <FaShoppingBasket onClick={() => {
                    if(!value.addcart.includes(prod)) {
                        adding(prod);
                        value.setTotal(value.total + prod.price);
                        value.setCount(value.count + 1);
                        
                    }
                }} />
            </div>)}
        </div>
    )
}