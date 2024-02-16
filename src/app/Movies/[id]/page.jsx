import Image from "next/image";
import Link from "next/link";


async function page({ params }) {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cc1b2247cbmsh1597dce7f7fd1b3p159e83jsn4f1c4d5c3348',
      'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);
  const data = await response.json();
  // const  main_data = data[0].details;
  const { type, title, synopsis } = data[0].details;

  return (
    <div className=" min-h-[70%] w-[80%] mr-auto ml-auto  mt-[1rem] " >

      <h1>{title} & {type} </h1>

      <div className=" h-[80%] w-[50%]  " >
        <Image
          className="w-[100%] h-[100%] object-fill "
          src={data[0].details.backgroundImage.url}
          alt="photo"
          width={100}
          height={100}
        />
      </div>

      <span>
        <p> {synopsis} </p>
      </span>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-[.5rem] ">
        Read more
      </button>

    </div>
  )
}

export default page