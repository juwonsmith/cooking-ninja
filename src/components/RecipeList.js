import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import './recipelist.css'
import TrashCan from '../assets/trashcan.svg'
import { projectFirestore } from '../firebase/config'

export default function RecipeList({ recipes }) {
  const {mode} = useTheme()
  if(recipes.length === 0){
    return <div className='error'>No recipes to load...</div>
  }
  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.Title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img 
          src={TrashCan}
          className ='delete'
          onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  )
}
