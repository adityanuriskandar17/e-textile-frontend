import BodyHome from "../../components/Layouts/Body/BodyHome";
import Footer from "../../components/Layouts/Footer";
import Header from "../../components/Layouts/Header";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <BodyHome />
        <Footer />
      </div>
    </>
  );
};

export default Home;
