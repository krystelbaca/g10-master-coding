import React, { useState } from 'react'

import { useAuth } from '../helpers/auth';

export default function Login () {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })

  const { login } = useAuth()

  const handleInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value
    })
  }

  const sendCredentials = ({ email, password}) => {
    login(email, password)
  }

  return (
    <div className="container my-4">
      <div className="col-auto">
        <label>Email: </label>
        <input type="email" name="email" id="email" value={inputs.email} onChange={handleInputs} className="form-control"/>
      </div>
      <div className="col-auto">
        <label>Password: </label>
        <input type="password" name="password" id="password" onChange={handleInputs} value={inputs.password} className="form-control" />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3" onClick={() => sendCredentials(inputs)}>
          Login 
        </button>
      </div>
    </div>
  )
}



