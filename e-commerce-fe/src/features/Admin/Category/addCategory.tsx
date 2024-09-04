import React from "react";
import AdminLayout from "../../../layout/Admin";
import { categorySchema } from "../../../validation/Admin";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import { Col, Row, Alert, Button, Dropdown, Input, notification } from "antd";
import { addCategory } from "../../../api/Admin";
import KJInput from "../../../constants/KJInput";
import KJTextarea from "../../../constants/KJTextArea";

type ProductFormData = z.infer<typeof categorySchema>;

function AddCategory() {
  const navigate = useNavigate();

  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<ProductFormData>({
    resolver: zodResolver(categorySchema),
    mode: "onBlur", // "onChange"
  });
  const onSubmit = async (data: ProductFormData) => {
    const res = await addCategory(data);
    if (res?.data?.status === 201) {
      console.log(res?.data?.status, "kdsjdgjagjdgajsgdas");
      notification.success({ message: res?.data?.message });
      navigate("/adminCategory");
    } else {
      notification.error({ message: res?.data?.message });
    }
  };

  return (
    <AdminLayout>
      <section className="py-10 px-14">
        <div className="table bg-light w-full h-screen rounded-2xl p-10">
          <h1 className="text-2xl text-primary text-medium">
            Add Category Product
          </h1>
          <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
            <Row gutter={16}>
              <Col span={24}>
                <KJInput
                  name="title"
                  control={control}
                  label="Product"
                  parentClass=""
                  register={register}
                  labelClass="block text-gray-700 text-sm font-medium mb-2"
                  error={errors}
                  placeholder="Product Name"
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
            <Button htmlType="submit" size="large" className="mt-2">
              + Add Category
            </Button>
          </form>
        </div>
      </section>
    </AdminLayout>
  );
}

export default AddCategory;
