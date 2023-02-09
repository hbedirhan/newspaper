import {useEffect, useState} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Carousel() {

    const [slide, setSlide] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=tr&apiKey=18099a6a295e4ea59636644cd4dea747')
        .then((res) => res.json())
        .then((data) => setSlide(data.articles))

    }, [])

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
            slide.slice(0, 3).map((s, i) => 
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