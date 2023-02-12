import {useContext} from 'react'
import Services from '../Services'
import NewsContext from '../NewsContext'

function Politics() {

  const {politics, loading} = useContext(NewsContext)

  return (
    <div>
      <article>
        <div className="content-container">
          <p>CATEGORIES</p>
          <h2>Politics</h2>
          <div className="news-container">
            {loading && <h3>Yükleniyor...</h3>}
            <div className='news-content-container'>
              {politics.map((p, i) => 
              <div key={i} className="news-content">
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

export default Politics