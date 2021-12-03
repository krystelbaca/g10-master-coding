import React, { useState } from 'react'


export default function BasicForm () {

  const [ data, setData ] = useState({
    email: '',
    password: ''
  })

  function handleChange (event) {
    // manejar el cambio de informacion recibida
    setData({
      ...data,
      [event.target.email] : event.target.value
    })

  }

  function handleSubmit (event) {
    // enviar mi informacion
    event.preventDefault()
    console.log('Submitting data...', data.email, data.password)
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input 
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Log in </button>
        </div>
      </form>
    </div>
  )
}



