import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set, push, remove } from "firebase/database";

import { postsRef } from '../../services/firebase'
import * as postActions from '../../redux/actions/postAC'

import Form from '../../components/Form/Form'

export default function Post() {

  const inputs = useSelector(store => store.postInputs)
  const dispatch = useDispatch()

  const handlerForm = (event) => {
    event.preventDefault()
    // dispatch(postActions.submitPost(inputs))
    console.log(inputs)
    push(postsRef, {
      ...inputs
    })
    dispatch(postActions.clearInputPost())
  }

  const handleInputs = (event) => {
    // console.log('event.target',event.target.name, event.target.checked)
    dispatch(postActions.typingPost(event))
  }

  return (
    <>
      <h1>Page - create my post</h1>
      <Form handlerForm={handlerForm} handleInputs={handleInputs} inputs={inputs} />
    </>
  )
}
