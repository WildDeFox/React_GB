import React, {memo, useEffect, useState} from 'react'
// import { useSelector } from 'react-redux'
import { onValue} from "firebase/database";
import { postsRef } from '../../services/firebase'

import Item from '../Item/Item'

const List = () => {
  // const posts = useSelector(store => store.posts)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const newPosts = Object.entries(data).map((item) => ({
          id: item[0],
          ...item[1]
        }))
        setPosts(newPosts)
      }
    })
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
    </div>
  )
}

export default memo(List);
