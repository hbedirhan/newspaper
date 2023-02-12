import {useContext} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NewsContext from '../NewsContext'


function Carousel() {

    const {headlines} = useContext(NewsContext)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>

    <Slider {...settings}>
    {
            headlines.slice(0, 3).map((s, i) => 
            <div key={i}>
                <div className="slider-container">
                    <div className="slide-frame">
                        <div>
                            <img src={`${s.urlToImage}`} alt="" className="slide-image" />
                            <div className="slide-text">{s.title}</div>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </Slider>
    </div>
  )
}

export default Carousel