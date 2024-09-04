import { Button, Col, Row, Alert, notification } from "antd";
import React, { useEffect, useState } from "react";
import UploadImage from "../../../constants/Upload";
import AdminLayout from "../../../layout/Admin";
import { productSchema } from "../../../validation/Admin";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { ErrorMessage } from "@hookform/error-message";
import { addProduct, getAllCategory } from "../../../api/Admin";
import { useNavigate } from "react-router-dom";
import KJInput from "../../../constants/KJInput";
import KJTextarea from "../../../constants/KJTextArea";
import KJSelect from "../../../constants/KJSelect";

type ProductFormData = z.infer<typeof productSchema>;

type ICategory = {
  _id: any;
  title: string;
  description: string;
};
function AddProduct() {
  const [imageName, setImageName] = useState("");
  const [category, setCategory] = useState<ICategory[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const res = await getAllCategory();
    setCategory(res?.data?.data);
  };
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    mode: "onBlur", // "onChange"
  });

  useEffect(() => {
    if (imageName) {
      reset({
        photo: imageName,
      });
    }
  }, [reset, imageName]);

  const onSubmit = async (data: ProductFormData) => {
    
    const res = await addProduct(data);
    if (res?.data?.status === 201) {
      notification.success({ message: res?.data?.message });
      navigate("/adminproduct");
    }
  };

  return (
    <AdminLayout>
      <section className="py-10 px-14">
        <div className="table bg-light w-full h-screen rounded-2xl p-10">
          <h1 className="text-2xl text-primary text-medium">Add new Product</h1>
          <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
            <Row gutter={16}>
              <Col span={12}>
                <KJInput
                  name="name"
                  control={control}
                  label="Name"
                  parentClass=""
                  register={register}
                  labelClass="block text-gray-700 text-sm font-medium mb-2"
                  error={errors}
                  placeholder="Product Name"
                  required
                  inputClass="shadow appearance-none border rounded border-[#bababa] w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </Col>
              <Col span={12}>
                <KJInput
                  name="price"
                  control={control}
                  register={register}
                  label="Price"
                  parentClass=""
                  labelClass="block text-gray-700 text-sm font-medium mb-2"
                  error={errors}
                  placeholder="Price"
                  required
                  inputClass="shadow appearance-none border rounded border-[#bababa] w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <KJInput
                  name="intro"
                  control={control}
                  register={register}
                  label="Intro"
                  parentClass=""
                  labelClass="block text-gray-700 text-sm font-medium mb-2"
                  error={errors}
                  placeholder="Intro"
                  required
                  inputClass="shadow appearance-none border rounded border-[#bababa] w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <KJTextarea
                  name="description"
                  control={control}
                  register={register}
                  label="Description"
                  parentClass=""
                  labelClass="block text-gray-700 text-sm font-medium mb-2"
                  error={errors}
                  placeholder="Description"
                  required
                  inputClass="shadow appearance-none border rounded border-[#bababa] w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <KJSelect
                  name="category_id"
                  control={control}
                  register={register}
                  label="Category"
                  parentClass=""
                  labelClass="block text-gray-700 text-sm font-medium mb-2"
                  error={errors}
                  optionArray={category}
                  placeholder="Category"
                  required
                  inputClass="shadow appearance-none border rounded border-[#bababa] w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </Col>
              <Col span={12}>
                <KJInput
                  name="discount"
                  control={control}
                  register={register}
                  label="Discount"
                  parentClass=""
                  labelClass="block text-gray-700 text-sm font-medium mb-2"
                  error={errors}
                  placeholder="Discount"
                  inputClass="shadow appearance-none border rounded border-[#bababa] w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Photo *
                  </label>
                  <input
                    type="text"
                    {...register("photo")}
                    className="w-[0.1px]"
                  />
                  <UploadImage setImageName={setImageName} />
                  <ErrorMessage
                    errors={errors}
                    name="photo"
                    render={({ message }) => (
                      <Alert
                        message={message}
                        type="error"
                        className="mt-2 text-center"
                      />
                    )}
                  />
                </div>
              </Col>
            </Row>
            <Button htmlType="submit" size="large" className="mt-2">
              + Add Product
            </Button>
          </form>
        </div>
      </section>
    </AdminLayout>
  );
}

export default AddProduct;
