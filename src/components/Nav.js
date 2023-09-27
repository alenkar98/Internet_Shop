import { useContext } from "react"
import Context from "./Context"
import Filter from "./Filter"
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from "react-router-dom";



export default function Nav() {

    const value = useContext(Context);
    

    return(
        <nav style={{background : !value.openfilter ? 'skyblue' : 'transparent'}}>
            <ul className="menu">
                {value.lang.map((lan,i) => <Link to={lan} className="link">
                    <li key={i}>{lan}</li>
                </Link>)}
            </ul>
            <Filter />
            <button className="openFilter" onClick={() => {
                value.setOpenfilter(!value.openfilter)
            }} style={{bottom : !value.openfilter ? '-30px' : '-90px'}}><IoIosArrowForward style={{transform : !value.openfilter ? 'rotate(90deg)' : 'rotate(-90deg)'}} /></button>
        </nav>
    )
}