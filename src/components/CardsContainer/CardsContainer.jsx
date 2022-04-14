import { useQuery } from 'react-query'
import { getProducts } from '../../api/store_items'
import Card from '../ProductCard/Card'


function CardContainer() {

  const { isLoading, isError, data, error } = useQuery('todos', getProducts)

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <section>
      {data.map(() => (
        <Card key={data.id} image={data.image} title={data.title} />
      ))}
    </section>
  )
}

export default CardContainer;
