import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as articlesActions from '../../redux/actions/articlesAC'

export default function Articles() {
  const articles = useSelector((store) => store.articles)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  // const [articles, setArticles] = useState([])
  const [error, setError] = useState(null)

  const getFetchArticles = async () => {
    setLoading(true)
    try {
      dispatch(articlesActions.fetchDataArticles())
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
