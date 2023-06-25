import React from "react";

function RegisterPage() {
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
            <form>
              <div className="mb-4">
                {/* Input Name */}
                <div className="flex items-center border border-gray-700 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins text-[16px]"
                    type="text"
                    placeholder="Name"
                    aria-label="Email"
                  />
                </div>
              </div>
              <div className="mb-4">
                {/* Input Email */}
                <div className="flex items-center border border-gray-700 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins text-[16px]"
                    type="email"
                    placeholder="Email or Phone Number"
                    aria-label="Email"
                  />
                </div>
              </div>
              <div className="mb-4">
                {/* Input Password */}
                <div className="flex items-center border border-gray-700 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins text-[16px]"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                  />
                </div>
              </div>
              <div className="mt-10 items-center">
                <div className="flex items-center">
                  <button className="w-full inline-flex items-center justify-center px-12 py-4 bg-red-600 border border-transparent rounded-md font-semibold capitalize font-poppins text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
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
                    {" "}
                    Already have account?{" "}
                  </p>
                  <a
                    href="/"
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
