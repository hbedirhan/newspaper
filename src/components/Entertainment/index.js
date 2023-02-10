import {useContext} from 'react'
import Services from '../Services'
import NewsContext from '../NewsContext'

function Entertainment() {

  const {entertainment, loading} = useContext(NewsContext)

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
          <h2>Trending</h2>
          <div className='popular-container'>
          <Services/>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Entertainment