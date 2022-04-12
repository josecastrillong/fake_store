import { useQuery } from 'react-query'
import { getProducts } from '../../api/store_items'


function Card() {

  const { isLoading, isError, data, error } = useQuery('todos', getProducts)

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <article>
      {data.map(todo => (
        <section>{todo.title}</section>
      ))}
    </article>
  )
}

export default Card;
