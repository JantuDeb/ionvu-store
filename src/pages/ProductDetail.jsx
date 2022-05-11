import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axios-instance";
import { getDiscountedPrice } from "../utils/utils";
import Loader from "../components/loader/Loader";
import { useProducts } from "../context/products/ProductContext";
import { useAuth } from "../context/auth/AuthContext";
import { toast } from "react-toastify";
export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const { addToCart } = useProducts();
  const { authState } = useAuth();
  
  const getProduct = async (id) => {
    try {
      const { data } = await axiosInstance.get("/products/" + id);
      if (data.success) {
        setLoading(false);
        setProduct(data.product);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  const addToCartHandler = () => {
    if (!authState.isLogedIn) return toast.dark("You need to login first");
    addToCart(product);
  };

  const {
    title,
    description,
    brand,
    photos,
    rating,
    price,
    discount,
    numOfReviews,
  } = product;

  return (
    <>
      {loading && <Loader />}
      <div className="product-detail p-2 gap-2 bg-white">
        <div className="product-image border">
          {photos ? (
            <img
              src={photos[0]?.secure_url}
              className="img-fluid radius-md"
              alt="Full Rim Stainless steel Round Blue Medium"
            />
          ) : (
            <Loader />
          )}
          <div className="flex gap-2 p-2">
            <button
              className="bg-primary text-white py-3 w-full"
              onClick={addToCartHandler}
            >
              ADD TO CART
            </button>
            <Link
            onClick={addToCartHandler}
              to="/checkout"
              className="bg-red text-white py-3 w-full flex center"
            >
              BUY NOW
            </Link>
          </div>
        </div>
        <div className="product-info flex-col gap-2">
          <h2>{title}</h2>
          <div className="flex gap-1 font-medium">
            <div className="bg-green px-2 text-white flex center radius-sm">
              {rating} <AiFillStar />
            </div>
            <p className="m-0">25 Ratings</p>
            <span>&</span>
            <p className="m-0">{numOfReviews} Reviews</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-6 m-0">₹{getDiscountedPrice(price, discount)}</p>
            <s className="text-gray font-medium">₹{price}</s>
            <p className="m-0 text-red"> {discount * 100}% off</p>
          </div>
          <div className="flex gap-2 font-medium">
            <p className="text-gray m-0">Brand</p> -
            <p className="m-0">{brand}</p>
          </div>
          <div className="flex gap-2 font-medium">
            <p className="text-gray m-0">Frame Type</p> -
            <p className="m-0">Full Rim</p>
          </div>
          <div className="flex gap-2 font-medium">
            <p className="text-gray m-0">Frame Color</p> -
            <p className="m-0">Black</p>
          </div>
          <div className="flex gap-2 font-medium">
            <p className="text-gray m-0">Frame Shape</p> -
            <p className="m-0">Round</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
