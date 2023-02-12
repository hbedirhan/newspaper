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
            <div className='news-content-container'>
              {loading && <h3>Yükleniyor...</h3>}
              {entertainment.map((e, i) => 
              <div key={i} className='news-content'>
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

export default Entertainment