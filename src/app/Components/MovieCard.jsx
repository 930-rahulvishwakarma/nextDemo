import Image from "next/image";
import Link from "next/link";

function MovieCard(currentElement) {
    const {id,type,title,synopsis} = currentElement.jawSummary;
    return (

            <div className=" w-[100%]  shadow-lg h-[20rem] lg:w-[15rem]  " >

                <div className=" h-[35%] " >
                   <Image
                    className="w-[100%] h-[100%] object-fill "
                    src={currentElement.jawSummary.backgroundImage.url}
                    alt="photo"
                    width={100}
                    height={100}
                   />
                </div>

                <div className=" p-[.3rem]  h-[50%] " >
                    <h1 className="font-bold text-[.8rem]  lg:text-[1.4rem] leading-tight " >{title.substring(0,18)} </h1>

                    <div className=" mt-[1rem]  text-ellipsis overflow-y-clip break-normal	  " >
                        <p>
                            {synopsis.substring(0,85)}
                        </p>
                    </div>



                </div>

                <Link href={`/Movies/${id}`} className=" p-[.3rem] ">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Read more
                    </button>
                </Link>


            </div>
    )
}

export default MovieCard