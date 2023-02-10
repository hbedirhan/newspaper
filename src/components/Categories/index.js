import {useContext} from 'react'
import NewsContext from '../NewsContext'

function Categories() {

  const {business, entertainment, health, politics, sports} = useContext(NewsContext)

  return (
    <div>
      {/* <article>
        <div className="content-container">
          <p>CATEGORIES</p>
          <h2>Entertainment</h2>
          <div className="news-container">
            <div>
              {health.slice(0,3).map((e, i) => 
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
        </div>
      </article> */}
    </div>
  )
}

export default Categories