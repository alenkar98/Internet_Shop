import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineHeart, AiFillCreditCard } from 'react-icons/ai'
import { useContext} from 'react'
import Context from './Context'
import { language } from './language';


export default function Header() {
    const value = useContext(Context);

    const changeLang = (e) => {
        for (let key in language) {
            if (e.target.getAttribute('data') === key) {
                value.setLang(language[key].menu);
            }
        }
    }

    return (
            <header>
                <div className="logo">
                    <h1>CLICK & COLLECT</h1>
                </div>
                <div className='language'>
                    <button data='arm' onClick={(e) => {
                        changeLang(e);
                    }}>ARM</button>
                    <button data='rus' onClick={(e) => {
                        changeLang(e);
                    }}>RUS</button>
                    <button data='eng' onClick={(e) => {
                        changeLang(e);
                    }}>ENG</button>
                </div>
                <div className="icons">
                    <FiShoppingCart onClick={() => {
                        value.setOpenbasket('polygon(0 0, 100% 0, 100% 100%, 0% 100%)');
                        document.body.style.overflow = 'hidden';
                    }} />
                    <AiOutlineHeart />
                    <AiFillCreditCard onClick={()=>{
                        value.setOpenmoney('polygon(0 0, 100% 0, 100% 100%, 0% 100%)');
                        document.body.style.overflow = 'hidden'
                    }} />
                </div>
            </header>
    )
}