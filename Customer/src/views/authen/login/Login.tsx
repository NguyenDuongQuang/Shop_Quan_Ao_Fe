import { firebase } from "@Constants/firebase";

import formatError from "@Constants/formatError";
import { REGEX_EMAIL } from "@Constants/regex";
import {
  useLoginGoogleMutation,
  useLoginMutation,
} from "@Services/auth.service";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "./../../../assets/images/logo.png"
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login] = useLoginMutation();
  const [loginGogle] = useLoginGoogleMutation();
  const navigate = useNavigate();

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  const responseGoogle = async () => {
    let ggProvider = new firebase.auth.GoogleAuthProvider();
    firebase // send req to firebase
      .auth()
      .signInWithPopup(ggProvider)
      .then(async (result: any) => {
        const { given_name, email, id } = result.additionalUserInfo.profile;

        const loginData = {
          password: id,
          email: email,
          name: given_name,
        };

        await loginGogle(loginData).then((res: any) => {
          if (res?.error) {
            toast.error(formatError[res?.error?.data?.error]);
          } else {
            localStorage.setItem("user_data",JSON.stringify( res?.data?.data));
            localStorage.setItem("is_login", "1");
            localStorage.setItem("device_user",res?.data?.data?.id)
            window.location.href="/"
          }
        });
      });
  };
  const onSubmit = async (data: any) => {
    await login(data).then((res: any) => {
      if (res?.error) {
        toast.error(formatError[res?.error?.data?.error]);
      } else {
        localStorage.setItem("user_data", JSON.stringify( res?.data?.data));
        localStorage.setItem("is_login", "1");
        localStorage.setItem("device_user",res?.data?.data?.id)

        window.location.href="/"
      }
    });
  };
  return (
    <>
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full lg:px-4">
            <div
              className="
               relative
               mx-auto
               max-w-[525px]
               overflow-hidden
               rounded-lg
               bg-white
               py-16
               px-10
               text-center
               sm:px-12
               md:px-[60px]
               "
            >
              <div className="mb-10 md:mb-2  ">
                <Link
                  to="/"
                  className="mx-auto inline-block max-w-[200px] align-bottom"
                >
                  <h1 className="Login-title m-b-20 m-t-20 underline-title">
        <b>Đăng Nhập</b>
      </h1>
                </Link>
                <span>
                
                </span>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                      required: "Vui lòng nhập thông tin này",
                      pattern: {
                        value: REGEX_EMAIL,
                        message: "Emai không hợp lệ",
                      },
                    })}
                    className={classNames(
                      "text-body-color bordder-[#E9EDF4] focus:border-primary w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base placeholder-[#ACB6BE] outline-none focus-visible:shadow-none ",
                      errors["email"] && "border-red-600 focus:ring-red-600 "
                    )}
                  />
                  <span className="text-start text-xs text-red-500">
                    {errors?.email?.message}
                  </span>
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    className={classNames(
                      "text-body-color bordder-[#E9EDF4] focus:border-primary w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base placeholder-[#ACB6BE] outline-none focus-visible:shadow-none ",
                      errors["password"] && "border-red-600 focus:ring-red-600 "
                    )}
                    {...register("password", {
                      required: "Vui lòng nhập thông tin này",
                    })}
                  />
                  <span className="text-start text-xs text-red-500">
                    {errors?.password?.message}
                  </span>
                </div>
                <div className="mb-5">
                  <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-black text-white py-3 px-8 text-base font-medium text-white  hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>
              <p className="mb-5 text-base text-black">Hoặc</p>
              <ul className="-mx-2 mb-5 flex justify-between">
           
                <li className="w-full px-2" onClick={responseGoogle}>
                  <Link
                    to="/"
                    className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#D64937]
                        hover:bg-opacity-90
                        "
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                        fill="white"
                      />
                      
                    </svg>
                  <span className="text-white px-2">Google</span>

                  </Link>
                </li>
              </ul>
              {/* <Link
               to="/"
                className="
                  hover:text-primary
                  mb-2
                  inline-block
                  text-base
                  text-[#adadad] hover:underline
                  "
              >
                Quên mật khẩu
              </Link> */}
              <p className="text-base text-black">
                Chưa có tài khoản?{" "}
                <Link to={"/register"} className="text-black underline hover:underline">
                  Đăng ký
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
