import { createContext, useState, useEffect } from 'react'
import axios from 'axios';

const NewsContext = createContext()

export const NewsProvider = ({ children }) => {

  const apiKey = "18099a6a295e4ea59636644cd4dea747";

  const [loading, setLoading] = useState(true);

  const [health, setHealth] = useState([]);

  useEffect(() => {
    axios(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`)
      .then((res) => setHealth(res.data.articles))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  }, [])

  const [business, setBusiness] = useState([])

  useEffect(() => {
    axios(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
      .then((res) => setBusiness(res.data.articles))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))

  }, [])

  const [entertainment, setEntertainment] = useState([])

  useEffect(() => {
    axios(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${apiKey}`)
      .then((res) => setEntertainment(res.data.articles))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))

  }, [])

  const [headlines, setHeadlines] = useState([])

  useEffect(() => {
    axios(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((res) => setHeadlines(res.data.articles))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
      
    }, [])
    
  const [politics, setPolitics] = useState([])


  useEffect(() => {

    axios(`https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=${apiKey}`)
      .then((res) => setPolitics(res.data.articles))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  }, [])

  const [sports, setSports] = useState([])

  useEffect(() => {
    axios(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`)
      .then((res) => setSports(res.data.articles))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))

  }, [])

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