import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter, useLocation } from "react-router-dom";
import About from "../pages/Customer/About";
import Home from "../pages/Customer/Home";
import LogIn from "../pages/Customer/Login";
import Product from "../pages/Customer/Product";
import Register from "../pages/Customer/Register";
import AdminHome from "../pages/Admin/Home";
import "./App.css";
import ProductList from "../pages/Admin/Product";
import AddProduct from "../features/Admin/Product/addProduct";
import Category from "../pages/Admin/Category";
import AddCategory from "../features/Admin/Category/addCategory";
import EditCategory from "../features/Admin/Category/editCategory";
import EditProduct from "../features/Admin/Product/editProduct";
import UserDatails from "../pages/Admin/UserDetails";
import AllProducts from "../pages/Customer/AllProducts";
import Payment from "../pages/Customer/Payment";
import Profile from "../pages/Customer/Profile";
import AdminOrder from "../pages/Admin/Order";
import OrderDetailPage from "../pages/Admin/UserOrdersPage";
import NotAuthorized from "../components/NotAuthorized";
import { getUser } from "../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectToggleValue, toggleValue } from "../Redux/toggleAuth";

function App() {
  // const [isAuthorized, setIsAutorized] = useState(true);
  // const user = useSelector(getUser);
  
  const isAuthorized = useSelector(selectToggleValue);

  // const handleClick = () => {
  //   dispatch(toggleValue());
  // };
  // useEffect(() => {
  //   setIsAutorized(true);
  //   const token = JSON.parse(sessionStorage?.getItem("AdminAuth") as any);
  //   if (token?.token) {
  //     setIsAutorized(true);
  //   } else {
  //     setIsAutorized(false);
  //   }
  //   console.log(isAuthorized, "isauth");
  // }, [sessionStorage?.getItem("AdminAuth"), isAuthorized, user]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* customer portal routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/about" element={<AllProducts />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />

          <Route
            path="/admin"
            element={!isAuthorized ? <NotAuthorized /> : <AdminHome />}
          />
          <Route
            path="/adminproduct"
            element={!isAuthorized ? <NotAuthorized /> : <ProductList />}
          />
          <Route
            path="/adminproduct/create"
            element={!isAuthorized ? <NotAuthorized /> : <AddProduct />}
          />
          <Route
            path="/adminproduct/edit/:id"
            element={!isAuthorized ? <NotAuthorized /> : <EditProduct />}
          />
          <Route
            path="/admincategory"
            element={!isAuthorized ? <NotAuthorized /> : <Category />}
          />
          <Route
            path="/admincategory/create"
            element={!isAuthorized ? <NotAuthorized /> : <AddCategory />}
          />
          <Route
            path="/admincategory/edit/:id"
            element={!isAuthorized ? <NotAuthorized /> : <EditCategory />}
          />
          <Route
            path="/adminorder"
            element={!isAuthorized ? <NotAuthorized /> : <AdminOrder />}
          />
          <Route
            path="/adminorder/:id"
            element={!isAuthorized ? <NotAuthorized /> : <OrderDetailPage />}
          />
          <Route
            path="/adminuser"
            element={!isAuthorized ? <NotAuthorized /> : <UserDatails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
