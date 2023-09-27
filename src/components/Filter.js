import { useContext } from 'react'
import Context from './Context'
import { menu } from './menu';

export default function Filter() {

    const value = useContext(Context);

    const styleFilter = {
        top: !value.openfilter ? '0%' : '100%',
        zIndex: !value.openfilter ? '-1' : '1'
    }
    const fil = ()=>{
        let min = document.querySelector('.min');
        let max = document.querySelector('.max');

        let filt = menu.filter(item => {
            if (item.price >= min.value && item.price <= max.value ) {
                return item
            }
            else if (min.value === null && item.price <= max.value){
                return
            }
            else if (item.price >=min.value && max.value === ''){
                return item
            }
            
            
        })
        value.setFilter(filt)
    }
    window.onkeydown = e =>{
        if(e.keyCode === 13){
            fil()
        }
    }

    return (
        <div className="contFilter" style={styleFilter}>
            <div className='searchPrice' >
                <input type="number" placeholder='Min Price' className='min' />
                <input type="number" placeholder='Max Price' className='max' />
                <button className='searchFilter' onClick={() => {
                   fil()

                }} >Filter</button>
            </div>
            <input type="search" placeholder='Search' className='search' onChange={(e) => {
                let filtered = menu.filter(item => {
                    if (item.name.toUpperCase().includes(e.target.value.toUpperCase())) {
                        return item
                    }
                   
                })
                value.setFilter(filtered)
            }} />
        </div>
    )
}