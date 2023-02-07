import {useEffect, useState} from 'react'

function Business() {

  const [business, setBusiness] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch('https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=18099a6a295e4ea59636644cd4dea747')
    .then((res) => res.json())
    .then((data) => setBusiness(data.articles))
    .catch((e) => console.log(e))
    .finally(() => setLoading(false))

  }, [])

  return (
    <div>
      <article>
        <div className="content-container">
          <p>CATEGORIES</p>
          <h2>Business</h2>
          <div className="news-container">
            <div>
              {loading && <h3>Yükleniyor...</h3>}
              {business.map((b, i) => 
              <div key={i}>
                <h5>{b.title}</h5>
                <div className="new-container-img">
                  <img src={`${b.urlToImage}`} alt="" width="200px" />
                </div>
                <p>{b.description}</p>
                <a href={`${b.url}`} target="_blank" rel="noopener noreferrer">Read More</a>
                <p>{b.publishedAt}</p>
              </div>
              )}

            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Business