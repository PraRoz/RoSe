import "./style.css";
import landingImage from "../../../assets/Clothes/kindpng_623334.png";
import { Button, Skeleton } from "antd";
import ClothesSlider from "../ClothesSlider";
import { useParams } from "react-router-dom";
import {
  getProductById,
  getProductByCategory,
} from "../../../api/Customer/product";
import { useEffect, useState } from "react";
import { ICart, IProduct } from "../../../types";
import {
  SliderLoading,
  ParagraphWithImageLoading,
} from "../../../constants/SkeletonLoader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, CartState, removeFromCart } from "../../../Redux/cartSlice";
import { RootState } from "../../../Redux/store";

function ProductPage() {
  const { id } = useParams();
  const [loader, setLoader] = useState<boolean>(true);
  const [productDetails, setProductDetails] = useState<IProduct>();
  const [simailarProducts, setSimilarProducts] = useState<IProduct[]>();
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cartReducer.items);

  useEffect(() => {
    getProduct();
    setTimeout(() => {
      setLoader(false);
    }, 500);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    ProductWithCategory();
  }, [productDetails]);

  const getProduct = async () => {
    setLoader(true);
    const res = await getProductById(id);
    setProductDetails(res?.data?.data);
  };
  const isAddedToCart = cart.some((el) => el.id === productDetails?._id);

  const ProductWithCategory = async () => {
    const res = await getProductByCategory(productDetails?.category_id?._id);
    setSimilarProducts(res?.data?.data);
  };
  const similarWithFilter = simailarProducts?.filter(
    (product: IProduct) => product._id !== id
  );

  const handelAdd = () => {
    const cartDetails = {
      id: productDetails?._id,
      name: productDetails?.name,
      price: productDetails?.price,
      photo: productDetails?.photo,
      discount: productDetails?.discount || null,
      quantity: 1,
      size: "xl",
    };

    dispatch(addToCart(cartDetails));
  };
   
  const handelRemove = () =>{
    dispatch(removeFromCart(productDetails?._id))
  }

  return (
    <div>
      {loader ? (
        <ParagraphWithImageLoading />
      ) : (
        <section className="Cover-section">
          <div className="White-wrapper"></div>
          <div className="bg-holder">
            <div className="product-image-holder relative cursor-pointer ">
              <img
                src={productDetails?.photo}
                alt=""
                className="product-image"
              />
              {productDetails?.discount && (
                <div
                  className="ribbon"
                  style={{ boxShadow: "5px -5px 15px -9px rgba(0,0,0,0.45)" }}
                >
                  <span className="ribbon-2"></span>
                  <span className="discount-text ">
                    {" "}
                    {productDetails?.discount}%
                  </span>
                </div>
              )}
            </div>

            <div className="Content-holder w-1/2  flex justify-center items-start ">
              <div className="flex flex-col"></div>
              <div className="w-[80%]">
                <h1 className="text-4xl font-medium">
                  {productDetails?.name}{" "}
                </h1>
                <h3 className="text-lg mt-2">{productDetails?.intro}</h3>
                <div className="flex items-center gap-1 mt-3">
                  <i className="fa-regular fa-star text-[18px]  cursor-pointer"></i>
                  <i className="fa-regular fa-star text-[18px]  cursor-pointer"></i>
                  <i className="fa-regular fa-star text-[18px]  cursor-pointer"></i>
                  <i className="fa-regular fa-star text-[18px]  cursor-pointer"></i>
                  <i className="fa-regular fa-star text-[18px]  cursor-pointer"></i>
                </div>
                <div className="w-full h-[1px] bg-[#000] mt-2"></div>
                <h1 className="text-4xl font-medium mt-2">
                  Rs.{productDetails?.price}{" "}
                </h1>
                <div>
                  <h1 className="text-2xl  mt-10">Available Colors </h1>
                  <div className="flex items-center justify-start gap-2 mt-5">
                    <div className="w-7 h-7 rounded-full cursor-pointer bg-primary"></div>
                    <div className="w-7 h-7 rounded-full cursor-pointer bg-dark"></div>
                    <div className="w-7 h-7 rounded-full cursor-pointer bg-secondary"></div>
                  </div>
                </div>
                <h1 className="text-2xl  mt-5 mb-3">Description </h1>
                <p className="">{productDetails?.description}</p>
                <div className="flex items-center gap-5">
                  {!isAddedToCart ? (
                    <Button
                      type="primary"
                      size="large"
                      className="mt-12"
                      onClick={handelAdd}
                    >
                      + Add to Cart
                    </Button>
                  ) : (
                    <Button size="large" type="primary" className="mt-12" onClick={handelRemove}>
                      Remove from Cart
                    </Button>
                  )}
                  <Button size="large" className="mt-12">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {loader ? (
        <SliderLoading />
      ) : (
        <ClothesSlider
          title={"Similar Products"}
          productArray={similarWithFilter}
        />
      )}
    </div>
  );
}

export default ProductPage;
