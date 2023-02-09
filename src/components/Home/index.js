import {useEffect, useState} from 'react'
import Carousel from './carousel'
import Services from '../Services'



function Home() {

  const [headlines, setHeadlines] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=tr&apiKey=18099a6a295e4ea59636644cd4dea747')
    .then((res) => res.json())
    .then((data) => setHeadlines(data.articles))

  }, [])

  return (
    <div>

      <Carousel/>

      <article>
        <div className="content-container">
          <h2>Editor's Pick</h2>
          <div className="news-container">
            <div>
              {headlines.slice(3,).map((h, i) => 
              <div key={i}>
                <h5>{h.title}</h5>
                <div className="new-container-img">
                  <img src={`${h.urlToImage}`} alt="" width="200px" />
                </div>
                <p>{h.description}</p>
                <a href={`${h.url}`} target="_blank" rel="noopener noreferrer">Read More</a>
                <p>{h.publishedAt}</p>
              </div>
              )}
            </div>
          </div>
          <h2>Trending</h2>
          <div className='popular-container'>
          <Services/>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Home