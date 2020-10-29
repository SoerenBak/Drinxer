import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus()
  },[])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <section className="">
      <form className="" onSubmit={handleSubmit}>
        <div className="col-md-4 offset-md-4 col-sm-10 offset-sm-1 text-center">
          <div className="search-bg">
            <label htmlFor='name' className="search-title">Search for you favorite cocktail</label>
            <input type="text" id="name" className="form-control form-control-lg" ref={searchValue} onChange={searchCocktail} placeholder="Search for a cocktail..."></input>
          </div>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
