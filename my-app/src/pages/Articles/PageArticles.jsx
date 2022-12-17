import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as articlesAxtions from '../../redux/actions/articlesAC'


export default function Articles() {
  /*
  const promise = new Promise((resolve, reject) => {
    // ...todo
    if(true) {
      resolve('Done')
    } else {
      reject('Error erro asd343242')
    }
  })
  // console.log('promise', promise);
  promise
    .then((res) => res)
    .then((data) => console.log(data +' ASDASDas'))
    .catch((er) => console.log(er))
    .finally(() => console.log('FINISH'))
  */
  
  const articles = useSelector((store) => store.articles)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  // const [articles, setArticles] = useState([])
  const [error, setError] = useState(null)

  const getFetchArticles = async () => {
    setLoading(true)
    try {
      // const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
      // if(response.ok) {
      //   const data = await response.json()
      //   setArticles(data)
      // }
      dispatch(articlesAxtions.fetchDataArticles())
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // getFetchArticles()
  }, [])

  return (
    <>
      <h1>Articles Page</h1>
      {loading && <p>Loading....</p>}
      <button 
        type="button"
        onClick={getFetchArticles}
        className="btn btn-secondary"
      >
        Get data from api
      </button>
      {!loading && (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      )}
      {error && <p style={{color: 'red'}}>{error.message}</p>}
    </>
  )
}
