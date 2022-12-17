import React from 'react'

export default function Form({handlerForm, handleInputs, inputs}) {
  console.log('Form')
  return (
    <div>
      <form onSubmit={handlerForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputEmail1"
            name='title'
            onChange={handleInputs}
            value={inputs.title ?? ''}
            aria-describedby="emailHelp" 
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Text</label>
          <input 
            type="text" 
            name="text"
            className="form-control"
            onChange={handleInputs}
            value={inputs.text ?? ''}
            id="exampleInputPassword1" 
          />
        </div>
        <div className="mb-3 form-check">
          <input 
            id="exampleCheck1" 
            name="checkbox"
            type="checkbox" 
            className="form-check-input"
            onChange={handleInputs}
            defaultChecked={false}
          />
          <label 
            className="form-check-label" 
            htmlFor="exampleCheck1">
              Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
