import Link from 'next/link'
import MovieCard from '../Components/MovieCard'

async function page() {


  const url = process.env.RAPID_KEY

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cc1b2247cbmsh1597dce7f7fd1b3p159e83jsn4f1c4d5c3348',
      'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const main_data = data.titles;



  return (
    <>
      <h1 className='text-center ' >Movies & Series</h1>
      <div className=' gap-[1rem] p-[1rem] w-[90%]  mr-auto ml-auto lg:grid lg:grid-cols-4 ' >
        {
          main_data.map((currentElement) => {
            return <MovieCard key={currentElement.id} {...currentElement} />
          })
        }
      </div>
    </>

  )
}

export default page