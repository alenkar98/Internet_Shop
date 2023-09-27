import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'

export default function Section() {

    const sliderImages = ['img1/42.jpg','img1/47.jpg','img1/58.jpg','img1/61.jpg','img1/76.jpg','img1/86.jpg','img1/91.jpg','img1/100.jpg','img1/102.jpg','img1/116.jpg','img1/122.jpg','img1/131.jpg','img1/142.jpg']

    return(
        <div className="slider">
            <Swiper slidesPerView={3} spaceBetween={20} grabCursor='true'>
                {sliderImages.map(img => <SwiperSlide>
                    <img src={img} alt="" />
                </SwiperSlide>)}    
            </Swiper>           
        </div>
    )
}