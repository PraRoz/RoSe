import React, { useState, useEffect } from "react";
import Layout from "../../../layout/Customer";
import PaymentDetails from "./PaymentDetails";
import ProductList from "./ProductList";
import { Alert, Space, Spin } from "antd";
import axios from "axios";



function PaymentPage() {

  return (
    <Layout>
      <div className="flex p-14 relative">
        <ProductList />
        <PaymentDetails  />
      </div>
    </Layout>
  );
}

export default PaymentPage;
