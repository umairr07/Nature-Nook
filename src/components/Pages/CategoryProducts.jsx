import { useContext, useEffect, useState } from "react";
import { bestSellers, data, newArrivals } from "../../data/data";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { handleError, handleSuccess } from "../../utils/Toast";
import { IoMdArrowRoundBack } from "react-icons/io";
import { UserContext } from "../../context/UserContext";

const CategoryProducts = () => {
  const [pCategory, setPCategory] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const { name } = useParams();

  const combinedProducts = [...data, ...newArrivals, ...bestSellers];

  useEffect(() => {
    const findProduct = combinedProducts.filter(
      (item) => item.category === name
    );
    setPCategory(findProduct);
  }, [name]);

  return (
    <div>
      <div className="w-full max-w-4xl mb-6 lg:px-16 sm:px-4 pt-10">
        <button
          className="flex items-center gap-2 text-gray-600 text-xl"
          onClick={() => navigate("/")}
        >
          <IoMdArrowRoundBack className="text-2xl" />
          Product / Category / {pCategory[0]?.category}
        </button>
      </div>
      <div className="grid lg:gap-10 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 px-4 lg:px-16">
        {pCategory.length > 0 ? (
          pCategory.map((item) => (
            <div
              key={item.id}
              className="relative bg-white-400 border border-gray-300 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between gap-5"
            >
              {/* Discount Badge */}
              {item.discount > 0 ? (
                <div className="absolute top-0 left-0 bg-green-400 text-white-400 text-xs font-bold px-3 py-1 rounded-br-lg">
                  {item.discount}% OFF
                </div>
              ) : (
                <div className="absolute top-0 left-0 bg-red-500 text-white-400 text-xs font-bold px-3 py-1 rounded-br-lg ">
                  NO OFF
                </div>
              )}

              {/* Product Image */}
              <div
                className="relative cursor-pointer group"
                onClick={() => navigate(`/products-details/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-44 m-auto mt-10 h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Details */}
              <div className="flex-grow flex flex-col justify-between p-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {item.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                      <span className="line-through text-red-500">
                        ₹{item.price}
                      </span>
                      <span className="ml-2 text-gray-800 font-medium">
                        ₹{item.discountedPrice} / {item.unit[0]}
                      </span>
                    </p>
                  </div>
                  {/* Star Rating */}
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          index < item.reviews
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.572L24 9.748l-6 5.849 1.416 8.268L12 18.896l-7.416 4.969L6 15.597 0 9.748l8.332-1.589z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">
                      ({item.reviews})
                    </span>
                  </div>
                </div>
                {/* Add to Cart Button */}
                {user ? (
                  <div className="lg:mt-10 sm:mt-5 mb-2">
                    <button
                      className="w-full bg-green-400 text-white-400 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors"
                      onClick={() => {
                        addToCart(item);
                        handleSuccess(`${item.name} added to Cart`);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                ) : (
                  <div className="lg:mt-10 sm:mt-5 mb-2">
                    <button
                      className="w-full bg-green-400 text-white-400 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors"
                      onClick={() => {
                        handleError(`Login to continue :(`);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500 text-lg">
            No products found :(
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
