import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name, id, info, glass}) => {
  return (
        <div className="col-lg-4">
            <img src={image} alt={name} className="img-fluid"></img>
            <div className="card">
              <h3>{name}</h3>
              <h4>{glass}</h4>
              <p>{info}</p>
              <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
                Details
              </Link>
            </div>
        </div>
  )
}

export default Cocktail
