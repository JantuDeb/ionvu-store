import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import { axiosInstance, axioxPrivate } from "../../utils/axios-instance";
import {
  composeFilterFunc,
  filterCategory,
  filterPrice,
  filterRating,
  sortProduct,
} from "../../utils/filters";
import {
  ADD_TO_CART,
  cartReducer,
  DEC_CART_QUANTITY,
  GET_CARTS_PRODUCTS,
  INC_CART_QUANTITY,
  REMOVE_FROMN_CART,
} from "./cart-reducer";
import { initialState, productReducer } from "./product-reducer";
import {
  ADD_TO_WISHLIST,
  GET_WISHLIST_DATA,
  REMOVE_FROM_WISHLIST,
  wishlistReducer,
} from "./wishlist-reducer";
const ProductContext = createContext([]);
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, []);

  const loadProducts = async () => {
    try {
      const { data } = await axiosInstance.get("/products", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      setProducts(data.products);
    } catch (error) {
      if (error.response)
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    loadProducts();
    getWishLists();
    getCartLists();
  }, []);

  const addToWishList = async (product) => {
    wishlistDispatch({ type: ADD_TO_WISHLIST, payload: product });
    toast.success("Added to wishlist")
    try {
      await axioxPrivate.post("/user/wishlist", { productId: product._id });
    } catch (error) {
      if (error.response)
      toast.error(error.response?.data?.message);
    }
  };

  const removeFromWishList = async (id) => {
    wishlistDispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: { id },
    });
    toast.success("Removed from wishlist")
    try {
      await axioxPrivate.delete("/user/wishlist/" + id);
    } catch (error) {
      if (error.response)
      toast.error(error.response?.data?.message);
    }
  };

  const getWishLists = async () => {
    try {
      const { data } = await axiosInstance.get("/user/wishlist");
      if (data.success) {
        const products = data.wishlists.map((wishlist) => wishlist.product);
        wishlistDispatch({
          type: GET_WISHLIST_DATA,
          payload: {
            products,
          },
        });
      }
    } catch (error) {
      if (error.response)
      toast.error(error.response?.data?.message);
    }
  };

  const getCartLists = async () => {
    try {
      const { data } = await axiosInstance.get("/user/cart");
      if (data.success) {
        cartDispatch({
          type: GET_CARTS_PRODUCTS,
          payload: {
            carts: data.carts,
          },
        });
      }
    } catch (error) {
      if (error.response)
      toast.error(error.response?.data?.message);
    }
  };

  const addToCart = async (product) => {
    cartDispatch({ type: ADD_TO_CART, payload: product });
    toast.success("Added to cart")
    try {
      await axioxPrivate.post("/user/cart", { productId: product._id });
    } catch (error) {
      if (error.response)
      toast.error(error.response?.data?.message);
    }
  };

  const removeFromCart = async (_id) => {
    cartDispatch({ type: REMOVE_FROMN_CART, payload: { _id } });
    toast.success("Removed from cart")
    try {
      await axioxPrivate.delete("/user/cart/" + _id);
    } catch (error) {
      if (error.response)
      toast.error(error.response?.data?.message);
    }
  };

  const increaseCartQuantity = async (_id) => {
    cartDispatch({ type: INC_CART_QUANTITY, payload: { _id } });
    toast.success("Quantity updated successfully")
    try {
      await axioxPrivate.patch("/user/increase_quantity", { productId: _id });
    } catch (error) {
      if (error.response)
      toast.error(error.response?.data?.message);
    }
  };

  const decreaseQuantity = async (_id) => {
    cartDispatch({ type: DEC_CART_QUANTITY, payload: { _id } });
    toast.success("Quantity updated successfully")
    try {
      await axioxPrivate.patch("/user/decrease_quantity", { productId: _id });
    } catch (error) {
      if (error.response)
        toast.error(error.response?.data?.message);
    }
  };


  const filterProducts = composeFilterFunc(
    productState,
    sortProduct,
    filterCategory,
    filterRating,
    filterPrice
  )(products);

  return (
    <ProductContext.Provider
      value={{
        products,
        filterProducts,
        productState,
        productDispatch,
        loadProducts,
        cartDispatch,
        cartState,
        wishlistState,
        wishlistDispatch,
        addToWishList,
        removeFromWishList,
        getWishLists,
        addToCart,
        removeFromCart,
        increaseCartQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);
export { ProductProvider, useProducts };
