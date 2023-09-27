import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Context from './components/Context';
import Section from './components/Section';
import Category from './components/Category';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import { menu } from './components/menu';
import Basket from './components/Basket';
import Pay from './components/Pay';

function App() {

  const [lang, setLang] = useState(['Home', 'About', 'Orders', 'Products', 'Contact']);
  const [openfilter, setOpenfilter] = useState(false);
  const [filter,setFilter] = useState(menu);
  const [openbasket,setOpenbasket] = useState('polygon(50% 0, 50% 0, 50% 100%, 50% 100%)');
  const [addcart,setAddcart] = useState([]);
  const [total,setTotal] = useState(0);
  const [count,setCount] = useState(0)
  const [openmoney,setOpenmoney] = useState('polygon(50% 0, 50% 0, 50% 100%, 50% 100%)');
  const [totalpay,setTotalpay] = useState(0)
  const [balancepay,setBalancepay] = useState(Math.round(Math.random()* 10000))
  
  const value = {
    lang, setLang,
    openfilter, setOpenfilter,
    filter,setFilter,
    openbasket,setOpenbasket,
    addcart,setAddcart,
    total,setTotal,
    count,setCount,
    openmoney,setOpenmoney,
    balancepay,setBalancepay,
    totalpay,setTotalpay
  }

  return (
    <Context.Provider value={value}>
      <div className="App">
        <Header />
        <Category />
        <Nav />
        <Routes>
          <Route path='/' element={ <Section />}></Route>
          <Route path='/Products' element={<Products />}></Route>
          <Route path='/Home' element={<Section />}></Route>
        </Routes>
        <Basket />
        <Pay /> 
        
      </div>
    </Context.Provider>
  );
}

export default App;
