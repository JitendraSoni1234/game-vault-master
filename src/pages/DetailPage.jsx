import { useParams } from 'react-router-dom';
import { useGetGameDetailQuery } from '../apiSlice/api';
import { useEffect, useState } from 'react';

export default function DetailPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const { id } = useParams();
  const { data, isLoading } = useGetGameDetailQuery(id);

  const images = [data?.thumbnail || [], ...(data?.screenshots?.map(i => i.image) || [])];

  useEffect(() => {
    let interval;
    if (!isLoading) {
      interval = setInterval(() => {
        if (!isLoading) {
          setCurrentImage(i => (i === images.length - 1 ? 0 : i + 1));
        }
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [data]);

  if (isLoading) {
    return 'loading...';
  }

  console.log(images, currentImage, 'img');
  return (
    <section className='body-font overflow-hidden text-white'>
      <div className='py-24 w-[100%]'>
        <div className='xl:w-4/5 xl:mx-auto mx-14 flex flex-wrap'>
          <div id='default-carousel' className='relative xl:w-1/2 w-full h-[500px] object-cover object-center rounded' data-carousel='slide'>
            <div className='relative lg:h-[500px] overflow-hidden rounded-lg h-[100%]'>
              {images?.map((image, index) => (
                <div className={`transition duration-700 ease-in-out ${currentImage !== index ? 'hidden' : ''}`} data-carousel-item key={image}>
                  <img src={image} className='absolute block w-full h-[500px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt='...' />
                </div>
              ))}
            </div>
            <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
              {images.map((image, index) => (
                <button type='button' key={image} className='w-3 h-3 rounded-full' aria-current='true' aria-label={`Slide ${index + 1}`} data-carousel-slide-to={`${index}`}></button>
              ))}
            </div>
            <button
              type='button'
              onClick={() => setCurrentImage(i => (i === 0 ? images.length - 1 : i - 1))}
              className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
              data-carousel-prev
            >
              <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none'>
                <svg aria-hidden='true' className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path>
                </svg>
                <span className='sr-only'>Previous</span>
              </span>
            </button>
            <button
              type='button'
              onClick={() => setCurrentImage(i => (i === images.length - 1 ? 0 : i + 1))}
              className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
              data-carousel-next
            >
              <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none'>
                <svg aria-hidden='true' className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
                </svg>
                <span className='sr-only'>Next</span>
              </span>
            </button>
          </div>
          <div className='xl:w-1/2 w-full xl:pl-10 lg:py-6 mt-6 xl:mt-0'>
            <h2 className='text-sm title-font text-gray-500 tracking-widest'>
              {data.developer} - <span>Release Date: {data.release_date}</span>
            </h2>
            <h1 className='text-white text-3xl title-font font-bold mb-1'>{data.title}</h1>
            <p className='leading-relaxed'>{data.description}</p>
            <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
              <div className='flex'>
                <span className='mr-3'>Platform: {data.platform}</span>
                <span className='mr-3'>Genre: {data.genre}</span>
              </div>
            </div>
            <div className='flex'>
              <span className='mr-1'>URL: </span>
              <a target='_blank' href={data.game_url} className='title-font font-medium underline text-blue-500' rel='noreferrer'>
                {data.game_url}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
