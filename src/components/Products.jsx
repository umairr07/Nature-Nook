import { useState } from "react";
import milkImage from "../images/milk.png";
import dairy from "../images/dairy.jpeg";
import grains from "../images/grains.jpeg";
import oils from "../images/oils.jpeg";
import veg from "../images/vegies.jpeg";
import { useNavigate } from "react-router-dom";

const dataPr = [
  {
    id: "1",
    name: "Milk",
    image: milkImage,
  },
  {
    id: "2",
    name: "Dairy",
    image: dairy,
  },
  {
    id: "3",
    name: "Grains",
    image: grains,
  },
  {
    id: "4",
    name: "Oils",
    image: oils,
  },
  {
    id: "5",
    name: "Vegetables",
    image: veg,
  },
];

const Products = () => {
  const [products, setProducts] = useState(dataPr);
  const naviagte = useNavigate();
  return (
    <div>
      <div className="lg:text-3xl md:text-2xl sm:text-xl lg:font-bold md:font-bold sm:font-medium mt-20 py-5 mb-5 text-grayForPageHeading lg:px-16 sm:px-5">
        <h1 className="text-grayForPageHeading">
          | All Nature Nook Products At One Place...
        </h1>
      </div>

      <div className="lg:flex lg:justify-center lg:gap-32 md:grid md:grid-cols-3 md:gap-5 sm:grid sm:grid-cols-2 sm:gap-5 py-8">
        {products.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center gap-3"
            >
              <div
                className="flex justify-center items-center"
                onClick={() => naviagte(`/products-category/${item.name}`)}
              >
                <img
                  src={item.image}
                  alt="All images"
                  className="border-[1px] border-gray-400 rounded-full lg:w-32 lg:h-32  sm:w-24 sm:h-24 object-cover cursor-pointer p-5 transition-transform duration-300 ease-in-out hover:scale-90"
                />
              </div>

              <div>
                <p className="lg:text-[24px] sm:text-[18px] text-grayForPageHeading">
                  {item.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
