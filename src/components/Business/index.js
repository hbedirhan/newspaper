import {useContext} from 'react'
import Services from '../Services'
import NewsContext from '../NewsContext'

function Business() {

  const {business, loading} = useContext(NewsContext)

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
          <h2>Trending</h2>
          <div className='popular-container'>
          <Services/>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Business