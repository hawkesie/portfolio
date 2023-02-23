
import './App.css';
// import 'swiper/swiper.min.css'

// import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

import { useEffect, useRef, useState } from "react";

// import nft1 from "./images/slider/nft1.jpg";
// import nft2 from "./images/slider/nft2.jpg";
// import nft3 from "./images/slider/nft3.jpg";
// import nft4 from "./images/slider/nft4.jpg";
// import nft5 from "./images/slider/nft5.jpg";
// import nft6 from "./images/slider/nft6.jpg";
// import nft7 from "./images/slider/nft7.jpg";
// import nft8 from "./images/slider/nft8.jpg";
// import nft9 from "./images/slider/nft9.jpg";
// import nft10 from "./images/slider/nft10.jpg";
// import nft11 from "./images/slider/nft11.jpg";
// import nft12 from "./images/slider/nft12.jpg";
import Header from './components/Header';
import MySites from './components/MySites';
import MyGits from './components/MyGits';

// SwiperCore.use([EffectCoverflow, Pagination]);

function App() {

  // const [windowSize, setWindowSize] = useState(window.innerWidth);
  // const isMobile = windowSize <= 991;
  // const imports =[nft1,nft2,nft3,nft4,nft5,nft6,nft7,nft8,nft9,nft10,nft11,nft12];
  return (
    <div className="App">
      
      

      <div className='main-container'>
        <Header />
        <MySites />
        <MyGits/>
        {/* <div className='inner-container'>
        <div className='my-swiper-container'>
            <div className='my-swiper-inner-container'>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              loop={true}
              pagination={true}
              centeredSlides={false}
              slidesPerView={!isMobile ? "4" : "2"}
              autoplay={{
                  delay: 1500,
                  disableOnInteraction: true,
              }}
              coverflowEffect={{
                  rotate: 180,
                  stretch: 0,
                  depth: 90,
                  modifier: 2,
                  slideShadows: true,
              }}
              className="mySwiper"
            >
                    {imports.map((item, index) => {
                            return (
                                
                            <SwiperSlide>
                                <div className='swiper-slide-inner'>
                                <img src={item} alt={index} />
                                </div>
                            </SwiperSlide>
                            )})}
                </Swiper>
            </div>
        </div>
          </div> */}
        </div>
      </div>
  );
}

export default App;
