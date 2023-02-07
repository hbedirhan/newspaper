import {useEffect, useState} from 'react'
import axios from 'axios'

function Home() {

  const [headlines, setHeadlines] = useState([])

  useEffect(() => {
    axios('https://newsapi.org/v2/top-headlines?country=tr&apiKey=18099a6a295e4ea59636644cd4dea747')
    .then((res) => setHeadlines(res.data.articles))

  }, [])

  return (
    <div>
  
<article>
  <div className="content-container">
    <h2>Editor's Pick</h2>
    <div className="news-container">
      <div>
        <h5></h5>
        <div className="new-container-img">
          <img src="" alt="" width="200px" />
        </div>
        <p></p>
        <a href="" target="_blank" rel="noopener noreferrer">Read More</a>
        <p></p>
      </div>
    </div>
  </div>
</article>
    </div>
  )
}

export default Home