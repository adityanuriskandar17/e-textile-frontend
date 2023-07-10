import Footer from "../../components/Layouts/Footer";
import Header from "../../components/Layouts/Header";
import BodyProducts from "../../components/Layouts/Products/BodyProducts";

const Products = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <BodyProducts />
        <Footer />
      </div>
    </>
  );
};

export default Products;
