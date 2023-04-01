import {useContext} from 'react'
import Services from '../Services'
import NewsContext from '../NewsContext'

function Business() {

  const {business, loading} = useContext(NewsContext)

  return (
    <>
      <article>
        <div className="content-container">
          <p>CATEGORIES</p>
          <h2>Business</h2>
          <div className="news-container">
            <div className='news-content-container'>
              {loading && <h3>Yükleniyor...</h3>}
              {business.map((b, i) => 
              <div key={i} className='news-content'>
                <h5>{b.title}</h5>
                <div className="new-container-img">
                  <img src={`${b.urlToImage}`} alt="" width="200px" />
                </div>
                <p>{b.description}</p>
                <a href={`${b.url}`} target="_blank" rel="noopener noreferrer">Read More</a>
                <p>{b.publishedAt.replace("T", " ").replaceAll("-", ".").replace("Z", "")}</p>
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
    </>
  )
}

export default Business