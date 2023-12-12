import { REGEX_PHONE } from "@Constants/regex";
import { useUpdateProfileMutation } from "@Services/auth.service";
import moment from "moment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Info = ({ classNames }: any) => {
  const [update] = useUpdateProfileMutation();
  const [userData] = useState(() => {
    try {
      return (
        localStorage.getItem("user_data") &&
        JSON.parse(localStorage.getItem("user_data") || "{}")
      );
    } catch (error) {}
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userData?.name || "",
      email: userData?.email || "",
      phone: userData?.phone || "",
      heigth: userData?.height,
      weigth: userData?.weight,
      gender: userData?.gender,
      // value="2012-3-23"
      birthDay: "",
      id: userData?.id,
    },
  });

  const submit = async (values: any) => {
    const customeData = {
      ...values,
      birthDay: "13/02/2002",
      heigth: Number(values?.heigth),
      weigth: Number(values?.weigth),
    };
    console.log(customeData);

    await update(customeData).then((res: any) => {
      toast.success("Cập nhật tài khoản thành công");
      if (res?.data) {
        localStorage.setItem("user_data", JSON.stringify(res?.data));
      }
    });
  };
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Thông tin tài khoản
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <form onSubmit={handleSubmit(submit)}>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="flex items-center text-sm font-medium text-gray-500">
                Họ tên
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  placeholder="name"
                  className={classNames("w-full rounded-xl")}
                  {...register("name")}
                />
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="flex items-center text-sm font-medium text-gray-500">
                Email
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  placeholder="email"
                  className={classNames("w-full rounded-xl")}
                  {...register("email")}
                  disabled
                />
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="flex items-center text-sm font-medium text-gray-500">
                Số điện thoại
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  className={classNames(
                    "w-full rounded-xl",
                    errors["phone"] && "border-red-600 focus:ring-red-600 "
                  )}
                  {...register("phone", {
                    pattern: {
                      value: REGEX_PHONE,
                      message: "Số điện thoại không hợp lệ",
                    },
                  })}
                />
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="flex items-center text-sm font-medium text-gray-500">
                Giới tính
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <div className="mb-5">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="radioButton1"
                        className="h-5 w-5"
                        {...register("gender")}
                        defaultChecked={userData?.gender == 1}
                        value="1"
                      />
                      <label
                        htmlFor="radioButton1"
                        className="pl-3 text-base font-medium text-[#07074D]"
                      >
                        Nam
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        {...register("gender")}
                        defaultChecked={userData?.gender == 0}
                        id="radioButton2"
                        className="h-5 w-5"
                        value="0"
                      />
                      <label
                        htmlFor="radioButton2"
                        className="pl-3 text-base font-medium text-[#07074D]"
                      >
                        Nữ
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        {...register("gender")}
                        defaultChecked={userData?.gender == 2}
                        id="radioButton2"
                        className="h-5 w-5"
                        value="2"
                      />
                      <label
                        htmlFor="radioButton2"
                        className="pl-3 text-base font-medium text-[#07074D]"
                      >
                        Khác
                      </label>
                    </div>
                  </div>
                </div>
              </dd>
            </div>
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-black py-3 px-8 text-base font-medium text-white text-white  hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cập nhật thông tin
            </button>
          </form>
        </dl>
      </div>
    </div>
  );
};

export default Info;
