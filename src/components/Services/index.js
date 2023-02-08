import {useState} from 'react'

function Services() {

    const [popular, setPopular] = useState([])

   
    fetch('https://newsapi.org/v2/top-headlines?country=tr&apiKey=18099a6a295e4ea59636644cd4dea747')
    .then((res) => res.json())
    .then((data) => setPopular(data.articles))

  return (
    <div>
        {popular.slice(0, 3).map((p, i) => 
            <div key={i}>
              <h1>0{i + 1}</h1>
                <div className='populer-content'>
                  <h5>{p.title}</h5>
                  <p>{p.author}</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default Services