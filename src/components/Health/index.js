import {useEffect, useState} from 'react'
import Services from '../Services'

function Health() {

  const [health, setHealth] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch('https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=18099a6a295e4ea59636644cd4dea747')
    .then((res) => res.json())
    .then((data) => setHealth(data.articles))
    .catch((e) => console.log(e))
    .finally(() => setLoading(false))

  }, [])

  return (
    <div>
      <article>
        <div className="content-container">
          <p>CATEGORIES</p>
          <h2>Health</h2>
          <div className="news-container">
            <div>
              {loading && <h3>Yükleniyor...</h3>}
              {health.map((h, i) => 
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

export default Health