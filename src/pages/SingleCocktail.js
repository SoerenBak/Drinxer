import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json()
        if(data.drinks) {
          const {
            strDrink:name,
            strDrinkThumb:image,
            strAlcoholic:info, 
            strCategory:category,
            strGlass:glass, 
            strInstructions:instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
          ]
          const newCocktail = {
            name,image, info, category, glass, instructions, ingredients
          }
          setCocktail(newCocktail)
        }
        else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])
  if(loading) {
    return <Loading />
  }
  if(!cocktail) {
    return <div className="col-lg-12 text-center drink-info">
        <h2 className="">No cocktail to display</h2>
    </div>
    
  }
  const {name, image, category, info, glass,instructions, ingredients} = cocktail;
  return (
    <div className="container">
      <div className="row">
        <div className="cocktail-info">

        </div>
      <div className="col-lg-6">
        <div className="drink">
          <img src={image} alt={name} className="img-fluid"></img>
        </div>
      </div>
      <div className="col-lg-6 drink-info">
      <div className="drink-info">
        <h2>{name}</h2>
        <p>
          <span className="drink-data">Name:</span>
          {name}
        </p>
        <p>
          <span className="drink-data">Category:</span>
          {category}
        </p>
        <p>
          <span className="drink-data">Glass:</span>
          {glass}
        </p>
        <p>
          <span className="drink-data">Info:</span>
          {info}
        </p>
        <p>
          <span className="drink-data">Instructions:</span>{instructions}
        </p>
        <p>
          <span className="drink-data">Ingredients:</span>
          {ingredients.map((item,index) => {
            return item? <span key={index}>{item}, </span> : null
          })}
        </p>
      </div>
      </div>
      </div>
     
      
      </div>
  )
}

export default SingleCocktail
