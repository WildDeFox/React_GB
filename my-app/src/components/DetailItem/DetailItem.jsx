import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from "react-router-dom";

import axios from 'axios'

export default function DetailItem() {
  const [post, setPost] = useState({loading: true})
  const {myId} = useParams()
  const navigate = useNavigate()
  // console.log(param)

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${myId}`)
      .then((onePost) => {
        console.log(onePost.data.onePosts)
        setPost({...onePost.data.onePosts, loading: false})
      })
  }, [myId])

  return (
    <>
      <div>DetailItem</div>
    {
      post.loading ? (
        <div className="spinner-border" style={{width:'3rem', height:'3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="card" style={{width: '18rem'}}>
          <img src="/images/pik.gif" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{post.title ?? 'Card title'}</h5>
            <p className="card-text">{post.text ?? 'Some quick example'}</p>
            <div className="btn-group">
              <button onClick={() => navigate(-1)} className="btn btn-info">Back</button>
            </div>
          </div>
        </div>
      )
    }
    </>
    
  )
}
