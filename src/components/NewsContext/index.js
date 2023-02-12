import {createContext, useState, useEffect} from 'react'

const NewsContext = createContext()

export const NewsProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    
    const [health, setHealth] = useState([])
  
    useEffect(() => {
  
      fetch('https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=<your_api_key>')
      .then((res) => res.json())
      .then((data) => setHealth(data.articles))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  
    }, [health])

    const [business, setBusiness] = useState([])
  
    useEffect(() => {
  
      fetch('https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=<your_api_key>')
      .then((res) => res.json())
      .then((data) => setBusiness(data.articles))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  
    }, [business])

    const [entertainment, setEntertainment] = useState([])

    useEffect(() => {
  
      fetch('https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=<your_api_key>')
      .then((res) => res.json())
      .then((data) => setEntertainment(data.articles))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  
    }, [entertainment])

    const [headlines, setHeadlines] = useState([])

    useEffect(() => {
      fetch('https://newsapi.org/v2/top-headlines?country=tr&apiKey=<your_api_key>')
      .then((res) => res.json())
      .then((data) => setHeadlines(data.articles))
  
    }, [headlines])

    const [politics, setPolitics] = useState([])

    useEffect(() => {
  
      fetch('https://newsapi.org/v2/top-headlines?country=tr&category=politics&apiKey=<your_api_key>')
      .then((res) => res.json())
      .then((data) => setPolitics(data.articles))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  
    }, [politics])

    const [sports, setSports] = useState([])

    useEffect(() => {
  
      fetch('https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=<your_api_key>')
      .then((res) => res.json())
      .then((data) => setSports(data.articles))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  
    }, [sports])

    const values = {
        loading,
        health,
        business,
        entertainment,
        headlines,
        politics,
        sports
    }

    return <NewsContext.Provider value={values}>{children}</NewsContext.Provider>
}

export default NewsContext