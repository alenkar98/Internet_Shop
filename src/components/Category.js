import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { menu } from "./menu";
import { useContext } from "react";
import Context from "./Context";
import { Link } from "react-router-dom";


export default function Category() {

    const value = useContext(Context);

    const categImg = [
        {
            name: 'Shorts',
            picture: 'img1/90.jpg'
        },
        {
            name: 'Cap',
            picture: 'img1/115.jpg'
        },
        {
            name: 'Whatches',
            picture: 'img1/104.jpg'
        },
        {
            name: 'Trousers',
            picture: 'img1/73.jpg'
        },
        {
            name: 'Bag',
            picture: 'img1/121.jpg'
        },
        {
            name: 'Shoes',
            picture: 'img1/99.jpg'
        },
        {
            name: 'Jewerly',
            picture: 'img1/47.jpg',
            
        },
        {
            name: 'Bottle',
            picture: 'img1/131.jpg'
            
        },
        {
            name: 'Sun Glasses',
            picture: 'img1/138.jpg'
        }
    ]

    return (
        <div className="contCategory">
           

           
            <Swiper slidesPerView={4} spaceBetween={20} grabCursor='true'>
                {categImg.map((pic, i) => <SwiperSlide>
                    <Link to = '/Products'>
                    <div className="Contswiper" key={i} style={{ width: '300px', height: '90%', background: `url(${pic.picture})`, backgroundSize: 'cover', backgroundPosition: 'center' } }>
                        <div className="overflowCategory" onClick={(e) => {
                            const categ = menu.filter(item=>{
                                if(e.target.innerText === item.name){
                                    return item
                                }
                            })
                            value.setFilter(categ)
                        }}

                        >{pic.name}</div>
                    </div>
                    </Link>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}