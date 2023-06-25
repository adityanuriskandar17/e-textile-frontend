import React from "react";
import Header from "../../components/Layouts/Header";
import RegisterPage from "../../components/Layouts/Body/Registerpage";
import Footer from "../../components/Layouts/Footer";

function Register() {
  return (
    <>
    <div className="overflow-x-hidden">
      <Header />
      <RegisterPage />
      <Footer />
      </div>
    </>
  );
}

export default Register;
