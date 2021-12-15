import React from 'react'

export default function Login () {
  return (
    <div className="container my-4">
      <div class="col-auto">
        <label>Email: </label>
        <input type="email" name="email"  class="form-control"/>
      </div>
      <div class="col-auto">
        <label>Password: </label>
        <input type="password" name="password" class="form-control" />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">
          Login 
        </button>
      </div>
    </div>
  )
}



