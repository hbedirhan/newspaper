import {useEffect, useState} from 'react'
import Services from '../Services'

function Politics() {

  const [politics, setPolitics] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch('https://newsapi.org/v2/top-headlines?country=tr&category=politics&apiKey=18099a6a295e4ea59636644cd4dea747')
    .then((res) => res.json())
    .then((data) => setPolitics(data.articles))
    .catch((e) => console.log(e))
    .finally(() => setLoading(false))

  }, [])

  return (
    <div>
      <article>
        <div className="content-container">
          <p>CATEGORIES</p>
          <h2>Politics</h2>
          <div className="news-container">
            {loading && <h3>Yükleniyor...</h3>}
            <div>
              {politics.map((p, i) => 
              <div key={i}>
                <h5>{p.title}</h5>
                <div className="new-container-img">
                  <img src={`${p.urlToImage}`} alt="" width="200px" />
                </div>
                <p>{p.description}</p>
                <a href={`${p.url}`} target="_blank" rel="noopener noreferrer">Read More</a>
                <p>{p.publishedAt}</p>
              </div>
              )}
            </div>
          </div>
          <div className='popular-container'>
          <Services/>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Politics