import React from "react";
import Header from "../../components/Layouts/Header";
import Loginpage from "../../components/Layouts/Body/Loginpage";
import Footer from "../../components/Layouts/Footer";

function Login() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <Loginpage />
        <Footer />
      </div>
    </>
  );
}

export default Login;
