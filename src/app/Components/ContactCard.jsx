import Link from 'next/link'
import React from 'react'

function ContactCard() {
    return (

        <div className='flex  justify-evenly place-items-center w-[100%]  my-[3rem] ' >
            <div className='w-[28%] h-[30vh]  flex justify-center place-items-center shadow-md shadow-indigo-500/40 ' >
                <div className='text-center' >
                    <h1 className=' text-3xl  ' ><ion-icon name="mail" ></ion-icon></h1>
                    <h1>Email</h1>

                    <div className='mt-[.5rem] ' >
                        <p>Monday to Friday Expected</p>
                        <p>Response Time :? 72 hours</p>
                    </div>

                    <Link href="">
                        <h2 className='  mt-[1rem] ' >Send Email : -&gt; </h2>
                    </Link>
                </div>
            </div>

            <div className='w-[28%] h-[30vh]  flex justify-center place-items-center shadow-md shadow-indigo-500/40 ' >
                <div className='text-center' >
                    <h1 className=' text-3xl  '><ion-icon name="chatbox"></ion-icon></h1>
                    <h1>Email</h1>

                    <div className='mt-[.5rem] ' >
                        <p>Monday to Friday Expected</p>
                        <p>Response Time :? 72 hours</p>
                    </div>

                    <Link href="">
                        <h2 className='  mt-[1rem] ' >Send Email : -&gt; </h2>
                    </Link>
                </div>
            </div>

            <div className='w-[28%] h-[30vh]  flex justify-center place-items-center shadow-md shadow-indigo-500/40 ' >
                <div className='text-center' >
                    <h1 className=' text-3xl '><ion-icon name="chatbox"></ion-icon></h1>
                    <h1>Email</h1>

                    <div className='mt-[.5rem] ' >
                        <p>Monday to Friday Expected</p>
                        <p>Response Time :? 72 hours</p>
                    </div>

                    <Link href="">
                        <h2 className='  mt-[1rem] ' >Send Email : -&gt; </h2>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default ContactCard