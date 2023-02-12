import {useContext} from 'react'
import Services from '../Services'
import NewsContext from '../NewsContext'

function Health() {

  const {health, loading} = useContext(NewsContext)

  return (
    <div>
      <article>
        <div className="content-container">
          <p>CATEGORIES</p>
          <h2>Health</h2>
          <div className="news-container">
            <div className='news-content-container'>
              {loading && <h3>Yükleniyor...</h3>}
              {health.map((h, i) => 
              <div key={i} className='news-content'>
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
            <div className='popular-container'>
              <h2 style={{margin:'0 auto'}}>Trending</h2>
              <Services/>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Health