import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeName } from '../../redux/actions/profileAC'

import Button from '../../components/ui/Button/Button'

export default function Profile() {
  const {name} = useSelector((store) => store.profile)
  const dispatch = useDispatch()
  
  const [value, setValue] = useState('')

  const hendlerInput = () => {
    dispatch(changeName(value))
    setValue('')
  }

  return (
    <>
      <h1>Profile page</h1>
      <h2>Name: {name}</h2>
      <div className="mt-3 mb-3">
        <input 
          type="text"
          className="form-control"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
      <Button
        onClick={hendlerInput}
        className="btn btn-primary"
      >
        Change name
      </Button>
    </>
  )
}