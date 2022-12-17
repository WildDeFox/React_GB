import React, {memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { onValue } from "firebase/database";

import { postsRef } from '../../services/firebase'

import Item from '../Item/Item'

const List = () => {
  // const posts = useSelector(store => store.posts)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = onValue(postsRef, (snapshot) => {
      setLoading(true)
      const data = snapshot.val()
      console.log('data', data)
      if (data) {
        const newPosts = Object.entries(data).map((item) => ({
          id: item[0],
          ...item[1]
        }))
        setPosts(newPosts)
      }
      setLoading(false)

    })

    return unsubscribe
  }, [])

  return (
    <div>
      <div className="row justify-content-center">
        {
          posts.map((item) =>
            <Item item={item} key={item.id} />
          )
        }
      </div>
      {loading && <p>Loading......</p>}
    </div>
  )
}

export default memo(List);
