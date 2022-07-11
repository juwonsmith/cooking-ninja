// import { useLocation } from 'react-router-dom'
// import RecipeList from '../../components/RecipeList'
// import { useFetch } from '../../hooks/useFetch'
// import { projectFirestore } from '../../firebase/config'
// import { useState } from 'react'
// import './search.css'
// export default function Search() {
//   const location = useLocation().search
//   const queryParams = new URLSearchParams(location)
//   const query = queryParams.get('q')
//   console.log(query)
//   const url = " http://localhost:3000/recipes?q=" + query
//   //const {data, isPending,error} = useFetch(url)

//   })
//   return (
//     <div className=''>
//         <h2 className='page-title'>Recipe's inluding "{query}"</h2>
//         {error && <p className='error'>{error}</p>}
//         {isPending && <p className='loading'>Loading ...</p>}
//         {data && <RecipeList recipes={data}/>}
//     </div>
//   )
// }
