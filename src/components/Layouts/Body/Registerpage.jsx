import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
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


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const ApiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${ApiUrl}/register`, {
        username: username,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      console.log(response.data);
      navigate("/login");
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
          <h2 className="mb-6 font-poppins text-[36px]">Create an account</h2>
            <p className="mb-3">Enter your details below</p>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                
            <p className="mb-6 text-btn2 text-center">{msg}</p>
                <div className="flex items-center border border-gray-700 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins text-[16px]"
                    type="text"
                    placeholder="Username"
                    aria-label="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center border border-gray-700 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins text-[16px]"
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center border border-gray-700 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins text-[16px]"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center border border-gray-700 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins text-[16px]"
                    type="password"
                    placeholder="Confirm Password"
                    aria-label="Password"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-10 items-center">
                <div className="flex items-center">
                  <button
                    className="w-full inline-flex items-center justify-center px-12 py-4 bg-red-600 border border-transparent rounded-md font-semibold capitalize font-poppins text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                    type="submit"
                  >
                    Create Account
                  </button>
                </div>

                <div className="mt-4 flex items-center">
                  <button className="w-full inline-flex items-center justify-center px-12 py-4 bg-white border border-gray-500 rounded-md font-semibold capitalize font-poppins text-black hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:border-gray-200 focus:ring focus:ring-gray-200 disabled:opacity-25 transition">
                    <img
                      className="px-4"
                      src="/images/google.svg"
                      alt="google"
                    />
                    Sign up with Google
                  </button>
                </div>

                <div className="mt-8 flex items-center space-x-4 justify-center">
                  <p
                    href="/"
                    className="text-[16px] text-[#000000] font-poppins"
                  >
                    Already have an account?
                  </p>
                  <a
                    href="/login"
                    className="text-[16px] text-[#000000] font-poppins"
                  >
                    Log in
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

export default RegisterPage;
