import {useEffect, useState} from 'react'

function Entertainment() {

  const [entertainment, setEntertainment] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch('https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=18099a6a295e4ea59636644cd4dea747')
    .then((res) => res.json())
    .then((data) => setEntertainment(data.articles))
    .catch((e) => console.log(e))
    .finally(() => setLoading(false))

  }, [])

  return (
    <div>
      <article>
        <div className="content-container">
          <p>CATEGORIES</p>
          <h2>Entertainment</h2>
          <div className="news-container">
            <div>
              {loading && <h3>Yükleniyor...</h3>}
              {entertainment.map((e, i) => 
              <div key={i}>
                <h5>{e.title}</h5>
                <div className="new-container-img">
                  <img src={`${e.urlToImage}`} alt="" width="200px" />
                </div>
                <p>{e.description}</p>
                <a href={`${e.url}`} target="_blank" rel="noopener noreferrer">Read More</a>
                <p>{e.publishedAt}</p>
              </div>
              )}

            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Entertainment