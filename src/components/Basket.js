import { useContext, useState } from "react"
import Context from "./Context"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs'

export default function Basket() {
    const value = useContext(Context);
    const [basketCount, setbasketCount] = useState('');
    const removeing = id =>value.setAddcart([...value.addcart.filter(item =>item.id !== id)])

    return (
        <div className="basket" style={{ clipPath: value.openbasket }}>
            <button className="closeBasket" onClick={() => {
                value.setOpenbasket('polygon(50% 0, 50% 0, 50% 100%, 50% 100%)');
                document.body.style.overflow = 'auto';
            }}>X</button>
            <div className="topBasket">
                <p>Total : {value.total}$</p>
                <p>Count : {value.count}</p>
            </div>
            <div className="contentBasket">
                {value.addcart.map(item => <div key={item.id} className="itemBasket">
                    <img src={item.picture} alt="" />
                    <h2>{item.name}</h2>
                    <h3>{item.price}$</h3>
                    <div className="iconsBasket"  >
                        <AiOutlineMinus onClick={() => {
                            if (item.usQuan != 1) {
                                setbasketCount(item.usQuan -= 1)
                                value.setTotal(value.total - item.price)
                            }
                        }}
                        />
                        <p>{item.usQuan}</p>
                        <AiOutlinePlus onClick={() => {
                            setbasketCount(item.usQuan += 1)
                            value.setTotal(value.total + item.price)
                        }} />
                    </div>
                    <BsFillTrashFill style={{ color: 'red' }} onClick={()=>{
                        removeing(item.id);
                        value.setTotal(value.total - (item.usQuan * item.price));
                        value.setCount(value.count - 1)
                    }} />
                </div>)}
            </div>
        </div>
    )
}