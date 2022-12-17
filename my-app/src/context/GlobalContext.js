import React, { createContext, useState, useCallback, useMemo } from 'react';

import axios from 'axios';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const title = 'My posts'

  const [items, setItems] = useState([]);

  const handlerDelete = useCallback((myId) => {
    axios.post('http://localhost:3001/delete', { myId })
      .then(data => console.log(data))
    setItems(items.filter((item) => item.myId !== myId))
  }, [items])

  const addLike = useCallback((myId) => {
    axios.patch('http://localhost:3001/posts', { myId })
      .then(data => console.log('data LIKE', data))
    setItems(items.filter((item) => item.myId === myId ? item.likes += 1 : item))
  }, [items])

  const random = useMemo(() => Math.random() * 7, [items]);

  return (
    <GlobalContext.Provider value={
      { title, items, setItems, handlerDelete, addLike, random }
    }>
      {children}
    </GlobalContext.Provider>
  )
}