import React, { useState } from "react";
import { paymentSchema } from "../../../validation/Customer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { ErrorMessage } from "@hookform/error-message";
import { signUp } from "../../../api/Customer/index";
import KJInput from "../../../constants/KJInput";
import KJTextarea from "../../../constants/KJTextArea";
import { Col, Row, Radio, Button, Alert, notification } from "antd";
import clsx from "clsx";
import type { RadioChangeEvent } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { getUser } from "../../../Redux/userSlice";
import { sendOrder } from "../../../api/Customer/order";
type ContactUsFormData = z.infer<typeof paymentSchema>;

function PaymentDetails() {
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cartReducer.items);
  const user = useSelector(getUser);
  const { id } = user;
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormData>({
    resolver: zodResolver(paymentSchema),
    mode: "onBlur", // "onChange"
  });
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    setIsSelected(true);
  };

  const onSubmit = async (data: ContactUsFormData) => {

  const  productArray =  cart.map((item) =>{
    return{
      ...item,
      product_id:item.id,
    }
  })

  console.log(productArray)


    const orderData = {
      user_id: id,
      receiver: {
        receiver_name: data.name,
        receiver_contact: data.phone,
        location: data.location,
        monument: data.monument,
      },
      products: productArray,
      status:"pending",
      paymentMethod: data.paymentMethod == "1" ? "cash on delivery" :"degital wallet"
    };
      const res = await sendOrder(orderData);
      if(res.status == 200){
          localStorage.removeItem("cart")
          notification.success({message:"Order Send Sucessfully"})
          window.location.href = "/";

      }else{
        notification.error({message:"Something went wrong. Try again"})
      }

  };
  const handelCancle = () => {
    notification.warning({ message: "Order was canceled." });
    navigate("/");
  };
  return (
    <div className="w-1/2 pr-14">
      <h1 className="my-2 text-xl font-medium">Your Order</h1>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={12}>
          <Col span={12}>
            <KJInput
              name="name"
              control={control}
              label="Reciver Name"
              parentClass=""
              register={register}
              labelClass="block text-gray-700 text-sm font-medium mb-2"
              error={errors}
              placeholder="Product Name"
              inputClass="shadow appearance-none border rounded border-[#bababa] w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Col>
          <Col span={12}>
            <KJInput
              name="phone"
              control={control}
              label="Reciver Number"
              parentClass=""
              register={register}
              labelClass="block text-gray-700 text-sm font-medium mb-2"
              error={errors}
              placeholder="Reciver Number"
              required
              inputClass="shadow appearance-none border rounded border-[#bababa] w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={24}>
            <KJInput
              name="location"
              control={control}
              label="Location"
              parentClass=""
              register={register}
              labelClass="block text-gray-700 text-sm font-medium mb-2"
              error={errors}
              placeholder="Location"
              required
              inputClass="shadow appearance-none border rounded border-[#bababa] w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <KJTextarea
              name="monument"
              control={control}
              register={register}
              label="Monument Near You"
              parentClass=""
              labelClass="block text-gray-700 text-sm font-medium mb-2"
              error={errors}
              required
              placeholder="Monument Near You"
              inputClass="shadow appearance-none border rounded border-[#bababa] w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={24}>
            <Radio.Group
              className="flex flex-col gap-5"
              value={value}
              {...register("paymentMethod")}
              onChange={(e) => onChange(e)}
            >
              <Radio
                value={1}
                className={clsx(
                  `py-3 px-5 ${
                    isSelected ? "bg-[#ebe9f0] " : "bg-[#f8f7fa] "
                  }   w-full rounded`
                )}
              >
                Cash on Delivery
              </Radio>
              <Radio
                value={2}
                disabled={true}
                className="py-3 px-5 bg-[#f8f7fa] w-full rounded"
              >
                <div>Pay via Digital Wallet (coming soon...)</div>
              </Radio>
            </Radio.Group>
            <ErrorMessage
              errors={errors}
              name={"paymentMethod"}
              render={({ message }) => (
                <Alert
                  message={message}
                  type="error"
                  className="mt-2 text-center"
                />
              )}
            />
          </Col>
        </Row>

        <div className="flex mt-10 gap-10 items-center justify-center">
          <Button type="primary" htmlType="submit" size="large">
            Order Now
          </Button>
          <Button size="large" onClick={handelCancle}>
            Cancle
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PaymentDetails;
