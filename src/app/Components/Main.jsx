import styles from "@/app/styles/home.module.css";
import Image from 'next/image'


function Main({ tittle, imageurl }) {
    return (
        <div className="border-2 border-black h-[90vh] " >
            <div className={styles.home_main}  >

                <div className=" h-[50%]  w-[100%]  lg:h-[100%] lg:w-[50%]   flex  place-items-center justify-center flex-col " >
                    <div className="  h-[40%] w-[70%] text-left overflow-y-scroll no-scrollbar ">
                        <h1 className="font-bold text-[1.1rem]  lg:text-[2rem] ">{tittle}</h1>
                        <p className="" >
                            Discover the groundbreaking sci-fi thriller that pushes the limits of human consciousness. "Beyond the Horizon" takes you on a mind-bending journey where the lines between reality and virtual reality blur, leaving you questioning the very nature of existence.
                        </p>
                    </div>

                    <div className=" w-[70%] mt-[1rem] " >
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Explore Movies
                        </button>

                    </div>

                </div>

                <div className="h-[50%] w-[100%] lg:h-[100%] lg:w-[50%]   flex justify-center place-items-center " >
                    <div className=" h-[70%] w-[70%]  " >
                        <Image
                            className="object-contain w-[100%] h-[100%] "
                            src={imageurl}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>

                <div className= {styles["custom-shape-divider-bottom-1707651354"]} >
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles["shape-fill"]}></path>
                </svg>
            </div>

        </div>

        </div >
    )
}

export default Main