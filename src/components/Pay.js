import { useContext, useRef, useState } from "react"
import Context from "./Context"


export default function Pay() {
    const value = useContext(Context);
    const [namea,setNamea] = useState('');
    const [surname,setSurname] = useState('')
    const [numbercart, setNumbercart] = useState('')
    const [cvv, setCvv] = useState('');
    const [datacart, setDatacart] = useState('');
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [num4, setNum4] = useState('');
    const [num5, setNum5] = useState('');
    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    const img4 = useRef();
    const img5 = useRef();
    const img6 = useRef();

    let vaildName = /^[A-Z]+$/
    let validNumber = /^\d{4}-\d{4}-\d{4}-\d{4}$/
    let validDate = /^\d{2}\/\d{2}$/
    let validCvv = /^\d{3}$/
    let validRegion = /\+\d{3}/
    let num = /^\d{2}$/

const regexValid = () => {
    namea.match(vaildName) ? img1.current.style.opacity = '0' : img1.current.style.opacity ='1';
    surname.match(vaildName) ? img2.current.style.opacity = '0' : img2.current.style.opacity ='1';
    numbercart.match(validNumber) ? img3.current.style.opacity = '0' : img3.current.style.opacity ='1'
    cvv.match(validCvv) ? img4.current.style.opacity = '0' : img4.current.style.opacity ='1';
    datacart.match(validDate) ? img5.current.style.opacity = '0' : img5.current.style.opacity ='1';
    num1.match(validRegion) ? img6.current.style.opacity = '0' : img6.current.style.opacity ='1';
    num2.match(num) ? img6.current.style.opacity = '0' : img6.current.style.opacity ='1';
    num3.match(num) ? img6.current.style.opacity = '0' : img6.current.style.opacity ='1';
    num4.match(num) ? img6.current.style.opacity = '0' : img6.current.style.opacity ='1';
    num5.match(num) ? img6.current.style.opacity = '0' : img6.current.style.opacity ='1';
}



    const validnum = (e, a, b, c, d) => {
        if (e.keyCode === 8) {
            setNumbercart(numbercart.slice(0, -1))
        }
        if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {
            let numLen = e.target.value.length;
            setNumbercart(numbercart + e.key)
            if (numLen === a || numLen === b || numLen === c) {
                setNumbercart(numbercart + d)
            }
            if (numLen >= 19) {
                setNumbercart(numbercart)
            }
        }
    }






    return (
        <div className="contMoney" style={{ clipPath: value.openmoney }}>
            <button className="closeMoney" onClick={() => {
                value.setOpenmoney('polygon(50% 0, 50% 0, 50% 100%, 50% 100%)');
                document.body.style.overflow = 'auto';
            }}>X</button>
            <div className="payCount">

                <p>Balance: {value.balancepay}$</p>
                <p>Total:{value.total}</p>
            </div>
            <div className="addCart">
                <h3>PAY WITH MASTER / VISA CARD</h3>
                <div className="cartImg">
                    <img src="visa.png" alt="" />
                    <img src="mastercard.png" alt="" />
                    <img src="visaelektro.png" alt="" />
                </div>
                <div className="inpName">
                    <span><input type="text" placeholder="Name" value={namea} onChange={(e) => {
                        setNamea(e.target.value)
                    }} />
                        <img src="close.png" alt="" ref={img1} />
                    </span>
                    <span>
                        <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                        <img src="close.png" alt="" ref={img2} />
                    </span>
                </div>
                <span>
                    <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" value={numbercart} onKeyDown={(e) => {
                        validnum(e, 4, 9, 14, '-')
                    }} />
                    <img src="close.png" alt="" ref={img3} />
                </span>
                <span>
                    <input type="text" placeholder="123" value={cvv} onKeyDown={(e) => {
                        if (e.keyCode === 8) {
                            setCvv(cvv.slice(0, -1))
                        }
                        if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {
                            setCvv(cvv + e.key)
                            if (cvv.length >= 3) {
                                setCvv(cvv)
                            }
                        }
                    }} />
                    <img src="close.png" alt="" ref={img4} />
                </span>
                <span>
                    <input type="text" placeholder="23/09" value={datacart} onKeyDown={(e) => {
                        if (e.keyCode === 8) {
                            setDatacart(datacart.slice(0, -1))
                        }
                        if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {
                            let data = e.target.value.length;
                            setDatacart(datacart + e.key)
                            if (data === 2) {
                                setDatacart(datacart + '/')
                            }
                            if (datacart.length >= 5) {
                                setDatacart(datacart)
                            }
                        }
                    }} />
                    <img src="close.png" alt="" ref={img5} />
                </span>
                <div className="inpNumb">
                    <input type="text" placeholder="+374" value={num1} onKeyDown={(e) => {
                        if (e.keyCode === 8) {
                            setNum1(num1.slice(0, -1))
                        }
                        if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {

                            num1 === '' ? setNum1('+' + e.key) : setNum1(num1 + e.key)
                            if (num1.length >= 4) {
                                setNum1(num1)
                            }
                        }
                    }} />
                    <input type="text" placeholder="XX" value={num2} className="numbers" onKeyDown={(e) => {
                        if (e.keyCode === 8) {
                            setNum2(num2.slice(0, -1))
                        }
                        if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {

                            setNum2(num2 + e.key)
                            if (num2.length >= 2) {
                                setNum2(num2)
                            }
                        }
                    }} />
                    <input type="text" placeholder="XX " value={num3} className="numbers" onKeyDown={(e) => {
                        if (e.keyCode === 8) {
                            setNum3(num3.slice(0, -1))
                        }
                        if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {

                            setNum3(num3 + e.key)
                            if (num3.length >= 2) {
                                setNum3(num3)
                            }
                        }
                    }} />
                    <input type="text" placeholder="XX " value={num4} className="numbers" onKeyDown={(e) => {
                        if (e.keyCode === 8) {
                            setNum4(num4.slice(0, -1))
                        }
                        if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {

                            setNum4(num4 + e.key)
                            if (num4.length >= 2) {
                                setNum4(num4)
                            }
                        }
                    }} />
                    <span>
                        <input type="text" placeholder="XX " value={num5} className="numbers" onKeyDown={(e) => {
                            if (e.keyCode === 8) {
                                setNum5(num5.slice(0, -1))
                            }
                            if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {
                                setNum5(num5 + e.key)
                                if (num5.length >= 2) {
                                    setNum5(num5)
                                }
                            }
                        }} />
                        <img src="close.png" alt="" ref={img6} />
                    </span>
                </div>

                <button className="pay" onClick={() => {
                    regexValid()
                }}>Pay</button>

            </div>

        </div>
    )
}