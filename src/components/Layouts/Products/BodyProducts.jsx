import deliv from "../../../assets/utilsHome/delivery.svg";
import cs from "../../../assets/utilsHome/service.svg";
import guarate from "../../../assets/utilsHome/guarantee.svg";
// import arrowL from "../../../assets/utilsHome/arrowL.svg";
// import arrowR from "../../../assets/utilsHome/arrowR.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const BodyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:2002/products");
        setProducts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="relative min-h-screen">
        <div className="container relative top-[0px] left-[200px] right-[137px] ">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col relative  font-poppins font-semibold ">
              <div className="ml-6 h-[50px] w-[244px] border-r-2"></div>
              <div className="ml-6 w-[244px] border-r-2">
                <p className="mb-[16px]">Luxotic Knit</p>
                <p className="mb-[16px]">Raw Denim</p>
                <p className="mb-[16px]">Cotton Combed</p>
                <p className="mb-[16px]">Canvas Prestige</p>
                <p className="mb-[16px]">Luxury Combed</p>
                <p className="mb-[16px]">Luxury Denim</p>
                <p className="mb-[16px]">Luxury Knit </p>
                <p className="mb-[16px]">Stealth Knit</p>
                <p className="mb-[16px]">Ranyon Ventury</p>
              </div>
            </div>

            {/* ini isi product */}
            <div className="flex justify-center mt-[60px]">
              <div className="pl-8 grid grid-cols-4 gap-8">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div
                      key={product.id}
                      className="w-full bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      {product.images && product.images.length > 0 ? (
                        <img
                          src={`http://localhost:2002/products/image/${product.id}`}
                          alt={product.name}
                          className="h-56 object-cover"
                        />
                      ) : (
                        <div className="h-56 bg-gray-200"></div>
                      )}
                      <div className="p-4">
                        <h3 className="text-lg font-medium mb-2">
                          {product.name}
                        </h3>
                        <p className="text-base text-gray-700">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No products available</div>
                )}
              </div>
            </div>
            {/* ini isi product */}
          </div>

          <div className="relative mt-20 ">
            <div className="ml-[180px] w-[1170px] mt-[75px] h-[0px] border-b-2"></div>

            <div className="flex flex-row justify-center space-x-[60px] mt-[160px] font-poppins">
              <div className="relative flex flex-col items-center justify-center w-[262px] h-[161px]">
                <img className="mx-auto top-0" src={deliv} alt="" />
                <p className="mt-[24px] text-xl font-semibold">
                  FREE AND FAST DELIVERY
                </p>
                <p className="mt-[8px] text-sm">
                  Free delivery for all orders over $140
                </p>
              </div>
              <div className=" relative flex flex-col items-center justify-center w-[262px] h-[161px] ">
                <img className="mx-auto top-0" src={cs} alt="" />
                <p className="mt-[24px] text-xl font-semibold">
                  24/7 CUSTOMER SERVICE
                </p>
                <p className="mt-[8px] text-sm">
                  Friendly 24/7 customer support
                </p>
              </div>
              <div className="relative flex flex-col items-center justify-center w-[262px] h-[161px] mb-24">
                <img className="mx-auto top-0" src={guarate} alt="" />
                <p className="mt-[24px] text-xl font-semibold">
                  MONEY BACK GUARANTEE
                </p>
                <p className="mt-[8px] text-sm">
                  We reurn money within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyProducts;
