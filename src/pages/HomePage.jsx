import Cards from '../components/Card';
import { useGetAllGamesListQuery } from '../apiSlice/api';
function HomePage() {
  const { data, isLoading } = useGetAllGamesListQuery();
  if (isLoading) {
    return 'loading...';
  }
  return (
    <section className='flex flex-wrap bg-gray-800 gap-10 pt-10 justify-center'>
      {data?.map(game => (
        <Cards key={game.id} {...game} />
      ))}
    </section>
  );
}

export default HomePage;
