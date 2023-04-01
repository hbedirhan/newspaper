import {useContext} from 'react'
import NewsContext from '../NewsContext'

function Services() {

    const {headlines} = useContext(NewsContext)

  return (
    <>
        {headlines.slice(0, 3).map((p, i) => 
            <div key={i} className='popular-container-content'>
              <h1 style={{margin:'auto'}}>0{i + 1}</h1>
                <div className='populer-text'>
                  <h5>{p.title}</h5>
                  <p>{p.author}</p>
                </div>
            </div>
        )}
    </>
  )
}

export default Services