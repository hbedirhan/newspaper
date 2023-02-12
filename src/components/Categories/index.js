import {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import NewsContext from '../NewsContext'

function Categories() {

  const {business, entertainment, health, politics, sports} = useContext(NewsContext)

  return (
    <div>
      <article>
        <div className='content-container'>
          <NavLink to='/politics' className='categories-navlink'><h2>Politics</h2></NavLink>
          <div className='card-container'>
            {
              politics.slice(0,3).map((p, i) => 
              <div key={i} className='card'>
                <div className="new-container-img">
                  <img src={`${p.urlToImage}`} alt="" width="100px" />
                </div>
                <h5>{p.title}</h5>
                <p>{p.author}</p>
              </div>)
            }
          </div>
        </div>
        <div className='content-container'>
          <NavLink to='/business' className='categories-navlink'><h2>Business</h2></NavLink>
          <div className='card-container'>
            {
              business.slice(0,3).map((b, i) => 
              <div key={i} className='card'>
                <div className="new-container-img">
                  <img src={`${b.urlToImage}`} alt="" width="80px" />
                </div>
                <h5>{b.title}</h5>
                <p>{b.author}</p>
              </div>)
            }
          </div>
        </div>
        <div className='content-container'>
          <NavLink to='/health' className='categories-navlink'><h2>Health</h2></NavLink>
          <div className='card-container'>
            {
              health.slice(0,3).map((h, i) => 
              <div key={i} className='card'>
                <div className="new-container-img">
                  <img src={`${h.urlToImage}`} alt="" width="80px" />
                </div>
                <h5>{h.title}</h5>
                <p>{h.author}</p>
              </div>)
            }
          </div>
        </div>
        <div className='content-container'>
          <NavLink to='/entertainment' className='categories-navlink'><h2>Entertainment</h2></NavLink>
          <div className='card-container'>
            {
              entertainment.slice(0,3).map((e, i) => 
              <div key={i} className='card'>
                <div className="new-container-img">
                  <img src={`${e.urlToImage}`} alt="" width="80px" />
                </div>
                <h5>{e.title}</h5>
                <p>{e.author}</p>
              </div>)
            }
          </div>
        </div>
        <div className='content-container'>
          <NavLink to='/sports' className='categories-navlink'><h2>Sports</h2></NavLink>
          <div className='card-container'>
            {
              sports.slice(0,3).map((s, i) => 
              <div key={i} className='card'>
                <div className="new-container-img">
                  <img src={`${s.urlToImage}`} alt="" width="80px" />
                </div>
                <h5>{s.title}</h5>
                <p>{s.author}</p>
              </div>)
            }
          </div>
        </div>
      </article>
    </div>
  )
}

export default Categories