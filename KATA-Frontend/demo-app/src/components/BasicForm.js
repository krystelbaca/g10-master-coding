import React, { useState }from 'react';

export default function BasicForm () {

  const [ data, setData ] = useState({
    email: '',
    password: ''
  })

  function handleChange (event) {
    setData({
      ...data,
      [event.target.email] : event.target.value
    })
  }

  function handleSubmit (event) {
    return true
  }



  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="text" 
            name="email" 
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>   
  )
}