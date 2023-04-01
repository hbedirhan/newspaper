import {useContext} from 'react'
import Carousel from './carousel'
import Services from '../Services'
import NewsContext from '../NewsContext'

function Home() {

  const {headlines} = useContext(NewsContext)

  return (
    <>

      <Carousel/>

      <article>
        <div className="content-container">
          <h2>Editor's Pick</h2>
          <div className="news-container">
            <div className='news-content-container'>
              {headlines.slice(3,).map((h, i) => 
              <div key={i} className='news-content'>
                <h5>{h.title}</h5>
                <div className="new-container-img">
                  <img src={`${h.urlToImage}`} alt="" width="200px" />
                </div>
                <p>{h.description}</p>
                <a href={`${h.url}`} target="_blank" rel="noopener noreferrer">Read More</a>
                <p>{h.publishedAt.replace("T", " ").replaceAll("-", ".").replace("Z", "")}</p>
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

export default Home