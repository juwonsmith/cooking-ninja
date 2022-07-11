import './recipe.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/config'
export default function Recipe() {
  const {mode} = useTheme()
  const { id } = useParams()
  //using json server()
  // const url = 'http://localhost:3000/recipes/' + id
  // const { error, isPending, data: recipe } = useFetch(url)
  const [data, setData] = useState(null)
  const [isPending, setIspending] =useState(false)
  const [error, setError] =useState(false)
  // my method
  // useEffect(() => {
  //   setIspending(true)
  //   projectFirestore.collection('recipes').get().then((snapShot) => {
  //     snapShot.docs.forEach(doc => {
  //       if(doc.id === id){
  //         setData(doc.data())
  //         setIspending(false)
  //       }
  //     })
  //   }).catch(err => {
  //     setError(err.message);
  //   })
  // }, [id]);
    useEffect(() => {
        setIspending(true)
        projectFirestore.collection('recipes').doc(id).get().then((doc) => {
          if(doc.exists){
            setIspending(false)
            setData(doc.data())
          }else{
            setIspending(false)
            setError('could not find that recipe')
          }
        })
    }, [id])
    // const handleClick =() => {
    //   projectFirestore.collection('recipes').doc(id).update({
    //     title: ''
    //   })
    // }
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h2 className="page-title">{data.Title}</h2>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{data.method}</p>
          {/* <button onClick={handleClick}>Update Me</button> */}
        </>
      )}
    </div>
  )
}
