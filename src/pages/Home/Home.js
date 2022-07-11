import './home.css'
//import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'
import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react';


export default function Home() {
  //using json-server(local data)
    // const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
    const [data, setData] = useState(null)
    const [isPending, setIspending] =useState(false)
    const [error, setError] =useState(false)

    useEffect(() => {
      setIspending(true)
      const unsub = projectFirestore.collection('recipes').onSnapshot((snapShot) => {
        if(snapShot.empty){
          setError('no recipes to load')
          setIspending(false)
        }else {
          let results = []
          snapShot.docs.forEach(doc => {
            results.push({id: doc.id,  ...doc.data()})
          })
          setData(results)
          setIspending(false)
        }
      }, (err) => {
        setError(err.message)
        setIspending(false)
      })

      return () => {
        unsub()
      }
    }, []);

    return (
      <div className="home">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <RecipeList recipes={data} />}
      </div>
    )
  }
  

