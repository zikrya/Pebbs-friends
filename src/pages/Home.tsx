import { useFetchPets } from '../hooks/useFetchPets'

function Home() {
  const { pets, loading, error } = useFetchPets()

  console.log('Pets from Hook:', pets)
  console.log('Loading state:', loading)
  console.log('Error state:', error)

  return <h1>Home</h1>
}

export default Home
