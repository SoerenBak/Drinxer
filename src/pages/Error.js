import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="">
      <div className="">
      <h1>Oops... This page does not exist</h1>
      <Link to="/" className="btn-grad">
        Back to home
      </Link>
      </div>
    </section>
  )
}

export default Error
