import { Link } from 'react-router-dom';

function Card({ id, title, thumbnail, short_description, publisher, release_date }) {
  return (
    <Link to={`/${id}`} className='p-4 xl:w-1/4 lg:w-1/2 w-full shadow-lg dark:bg-gray-900 bg-white lg:hover:scale-105 transition ease-in-out rounded-lg duration-700'>
      <div className='h-full flex flex-col items-center text-center'>
        <div className='relative mb-4 w-full'>
          <img alt='team' className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center' src={thumbnail} />
          <div className='absolute inset-0 bg-black opacity-0 hover:opacity-50 text-transparent hover:text-white text-3xl flex place-items-center justify-center'>{title}</div>
        </div>
        <div className='w-full'>
          <h2 className='title-font font-medium text-lg text-white'>{title}</h2>
          <h3 className='dark:text-white mb-3'>
            {publisher} - {release_date}
          </h3>
          <p className='mb-4 dark:text-white'>{short_description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
