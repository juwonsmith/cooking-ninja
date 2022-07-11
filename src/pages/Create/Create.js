//styles
import './create.css'
import { useState,useRef,useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
export default function Create() {

  const [Title, setTitle] = useState('');
  const [method, setmethod] = useState('');
  const [cookingTime, setcookingTime] = useState('');
  const [newIngredients, setNewIngredients] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientsInput = useRef()
  // const {postData , data, error} = useFetch(' http://localhost:3000/recipes', 'POST' )
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    // postData({
    //   title, ingredients, method, cookingTime: cookingTime + 'minutes'
    // })
    const postData = {
      Title, ingredients, method, cookingTime: cookingTime + ' minutes'
    }
    try{
      await projectFirestore.collection('recipes').add(postData)
      history.push('/')
    }catch(err){
      console.log(err)
    }
  }
  // useEffect(() => {
  //   data && history.push('/')
  // } , [data,history])

  const handleAdd = (e) => {
      e.preventDefault()
      const ing = newIngredients.trim()
      if(ing && !ingredients.includes(ing)){
        setIngredients(preving => [...preving, ing])
      }
      setNewIngredients('')
      ingredientsInput.current.focus()
  }
  return (
    <div className='create'>
      <h2 className='page-title'>Add a new recipe</h2>
      <form onSubmit={handleSubmit}>
          <label>
            <span>Recipe title: </span>
            <input type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={Title}
            required
             />
          </label>

      {/* ingredients there */}
      <label>
        <span>Recipe ingredients: </span>
        <div className='ingredients'>
          <input type='text' onChange={(e) => setNewIngredients(e.target.value)} value={newIngredients}  ref={ingredientsInput} />
          <button className='btn' onClick={handleAdd}>Add</button>
        </div>
      </label>
      <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
          <label>
            <span>Recipe method: </span>
            <textarea 
            onChange={(e) => setmethod(e.target.value)}
            value={method}
            required
            />
          </label>
          <label>
            <span>Cooking time in minutes</span>
            <input type='number' onChange={(e) => setcookingTime(e.target.value)} value={cookingTime}  required/>
          </label>
          <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
