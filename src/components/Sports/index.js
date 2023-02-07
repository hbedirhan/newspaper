import {useEffect, useState} from 'react'

function Sports() {

  const [sports, setSports] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch('https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=18099a6a295e4ea59636644cd4dea747')
    .then((res) => res.json())
    .then((data) => setSports(data.articles))
    .catch((e) => console.log(e))
    .finally(() => setLoading(false))

  }, [])

  return (
    <div>
      <article>
        <div className="content-container">
          <p>CATEGORIES</p>
          <h2>Sports</h2>
          <div className="news-container">
            <div>
              {loading && <h3>Yükleniyor...</h3>}
              {sports.map((s, i) => 
              <div key={i}>
                <h5>{s.title}</h5>
                <div className="new-container-img">
                  <img src={`${s.urlToImage}`} alt="" width="200px" />
                </div>
                <p>{s.description}</p>
                <a href={`${s.url}`} target="_blank" rel="noopener noreferrer">Read More</a>
                <p>{s.publishedAt}</p>
              </div>
              )}

            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Sports