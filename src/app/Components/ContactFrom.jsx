'use client'

import { useState } from "react"

function ContactFrom() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: ""
  })

  const [status, setStatus] = useState(null);


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({
      ...prevUser, [name]: value
    }
    ));

  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/Contact', {
        method: 'POST',
        headers: { "Content_Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message
        })
      })

      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: ""
        })
        setStatus('success');
      } else {
        setStatus('error');
      }

    } catch (error) {
      console.log(error);
    }
  }



  return (
    <form className="h-[90vh] w-[22%] mr-auto ml-auto mb-[2rem]" onSubmit={handleSubmit} >
      <h1 className="text-center pt-[1rem] flex mb-[.6rem] justify-center " >We'd love to hear  <p className=" text-red-500 ml-[.3rem] " >from you</p> </h1>

      <div className="p-[1rem]  min-h-[80%] shadow-xl ">

        <div className="flex flex-col w-[100%]  my-[1.5rem] " >
          <label htmlFor="name"  >Enter Your Name</label>
          <input type="text" placeholder="Enter your name" name="username" id="name" className="outline-none border-2 border-gray-200 p-[.2rem]"
            value={user.username}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>

        <div className=" flex flex-col w-[100%] my-[1.5rem] " >
          <label htmlFor="email" >Email</label>
          <input type="Email" placeholder="Enter your email" name="email" id="email" className="outline-none border-2 border-gray-200 p-[.2rem]"
            value={user.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>

        <div className=" flex flex-col w-[100%] my-[1.5rem] " >
          <label htmlFor="phnone" >Phone Number</label>
          <input type="number" placeholder="Enter your name" name="phone" id="phone" className="outline-none border-2 border-gray-200 p-[.2rem]"
            value={user.phone}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>

        <div className=" flex flex-col w-[100%] my-[1.5rem] " >
          <label htmlFor="message" >Message</label>
          <textarea name="message" id="message" cols="20" rows="5" className=" border-2  outline-none resize-none "
            value={user.message}
            onChange={handleChange}
            required
            autoComplete="off"
          ></textarea>
        </div>

        <div className=" w-[70%] mt-[1rem] " >

          {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
          {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}


          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id="sumbit" >
            Submit
          </button>

        </div>

      </div>


    </form>
  )
}

export default ContactFrom

// YHGBibVqNkxXCfWR