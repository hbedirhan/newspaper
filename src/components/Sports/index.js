import {useContext} from 'react'
import Services from '../Services'
import NewsContext from '../NewsContext'

function Sports() {

  const {sports, loading} = useContext(NewsContext)

  return (
    <>
      <article>
        <div className="content-container">
          <p>CATEGORIES</p>
          <h2>Sports</h2>
          <div className="news-container">
            <div className='news-content-container'>
              {loading && <h3>Yükleniyor...</h3>}
              {sports.map((s, i) => 
              <div key={i} className='news-content'>
                <h5>{s.title}</h5>
                <div className="new-container-img">
                  <img src={`${s.urlToImage}`} alt="" width="200px" />
                </div>
                <p>{s.description}</p>
                <a href={`${s.url}`} target="_blank" rel="noopener noreferrer">Read More</a>
                <p>{s.publishedAt.replace("T", " ").replaceAll("-", ".").replace("Z", "")}</p>
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

export default Sports