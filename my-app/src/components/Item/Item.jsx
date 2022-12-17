import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { set, push, remove } from "firebase/database";

import { getPostById } from '../../services/firebase'

import * as postActions from '../../redux/actions/postAC'

export default function Item({item}) {
  console.log('Item')
  const dispatch = useDispatch();
  const handlerDelete = (myId) => {
    // dispatch(postActions.removePost({myId}))
    remove(getPostById(myId))
  }

  const addLike = (myId) => {
    dispatch(postActions.addLikePost({myId}))
  }

  return (
    <>
      <div className="card" style={{width: '18rem'}}>
        <img src="/images/pik.gif" className="card-img-top" alt="..." />
        <div className="card-body">
          {
            item.check ?
            <p className="card-text">EEEEee boy</p> :
            <p className="card-text">Yyyyppps</p>
          }
          <h5 className="card-title">{item.title ?? 'Card title'}</h5>
          <p className="card-text">{item.text ?? 'Some quick example'}</p>
          <div className="btn-group">
            <Link to={`/posts/${item.myId}`} className="btn btn-info">Detail</Link>
            <button onClick={() => addLike(item.id)} className="btn btn-success">Like {item.likes}</button>
            <button onClick={() => handlerDelete(item.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}
