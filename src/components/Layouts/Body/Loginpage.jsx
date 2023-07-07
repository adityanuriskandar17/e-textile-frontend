import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (msg !== "") {
      const timer = setTimeout(() => {
        setMsg("");
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [msg]);


  const auth = async (e) => {
    e.preventDefault();
    try {
      const ApiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${ApiUrl}/login`, {
        email: email,
        password: password,
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.error);
      }
    }
  };

  return (
    <>
      <main className="h-screen w-screen bg-white flex pr-[135px] pt-[76px] pb-[173px]">
        <div className="w-7/12 flex flex-row items-center bg-[#CBE4E8]">
          <img
            className="w-full h-full object-contain"
            src="/images/cartphone.png"
            alt="Cart and Phone"
          />
        </div>

        <div className="flex justify-center w-5/12 bg-white items-center">
          <div className="w-full sm:max-w-md p-5 mx-auto">
            <h2 className="mb-6 font-poppins text-[36px]">
              Log in to Exclusive
            </h2>
            <p className="mb-12">Enter your details below</p>
            <form onSubmit={auth}>
              <div className="mb-4">
              <p className="mb-6 text-btn2 text-center">{msg}</p>
                <div className="flex items-center border-b border-gray-700 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins text-[16px]"
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                {/* Input Password */}
                <div className="flex items-center border-b border-gray-700 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins text-[16px]"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <div className="flex items-center">
                  <button className="w-auto inline-flex items-center justify-center px-12 py-4 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                  type="submit">
                    Log in
                  </button>
                </div>
                <div>
                  <a
                    href="/"
                    className="text-[16px] text-[#DB4444] font-poppins"
                  >
                    {" "}
                    Forgot your password?{" "}
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Loginpage;
