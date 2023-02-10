import {useContext} from 'react'
import Services from '../Services'
import NewsContext from '../NewsContext'

function Sports() {

  const {sports, loading} = useContext(NewsContext)

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
          <h2>Trending</h2>
          <div className='popular-container'>
          <Services/>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Sports