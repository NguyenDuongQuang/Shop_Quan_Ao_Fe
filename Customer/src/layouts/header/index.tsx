import { useAppSelector } from "@Hooks/reduxHook";
import {
  useGetBrandsQuery,
  useGetClassifysQuery,
  useGetMadeInQuery,
} from "@Services/common.service";
import { useLazyGetAllByKeyQuery } from "@Services/product.service";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const navigation = {
  // about: [{ name: "Giới thiệu", href: "/about" }],
  about: [{ name: "Giới Thiệu", href: "/about" }],
  categories: [
    {
      id: "product",
      name: "Sản phẩm",
      featured: [
        {
          name: "",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "",
          href: "#",
          imageSrc:
          "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Liên hệ", href: "/contact" },
    // { name: "Chọn size", href: "/size" },
  ],
  
};

interface Menu {
  name: string;
  id: number;
}
interface MenuClassify {
  name: string;
  categoryList: [];
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<any>();
  const listBrand = useGetBrandsQuery("");
  const listClassify = useGetClassifysQuery("");
  const listMadeIn = useGetMadeInQuery("");
  const [showSearch, setShowSearch] = useState(false);
  const [triggerFindName] = useLazyGetAllByKeyQuery();
  const amount = useAppSelector((state) => state.cartChange.amount);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const numberToCurrencyStyle = (x: any) => {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  console.log("listBrand");
  console.log(listBrand);
  console.log("listBrand");

  //   useEffect(()=>{
  // console.log("duoc goij");
  // console.log(localStorage.getItem('count_cart'));

  //   },[localStorage.getItem('count_cart')])

  console.log(search);
  const handleSearch = async () => {
    if (search) {
      await triggerFindName(search).then((res) => {
        setData(res.data?.data);
      });
    } else {
      setData([]);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [search]);

  console.log(data);

  return (
    <div className="bg-white ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative  flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-800"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <Tab.Panels as={Fragment}>
                    <div className="space-y-6 border-t border-gray-200 py-6 px-6">
                      {navigation.about.map((page) => (
                        <div key={page.name} className="flow-root">
                          <Link
                            onClick={() => setOpen(false)}
                            to={page.href}
                            className="-m-2 block p-2 text-sm font-medium text-gray-900"
                          >
                            {page.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-6  border-gray-200 px-6 pb-6">
                      {navigation.pages.map((page) => (
                        <div key={page.name} className="flow-root">
                          <Link
                            to={page.href}
                            onClick={() => setOpen(false)}
                            className="-m-2 block p-2 text-sm font-medium text-gray-900"
                          >
                            {page.name}
                          </Link>
                        </div>
                      ))}
                    </div>

                    <div className="gap-y-10 gap-x-8 p-5 text-sm">
                      <div className="mt-2">
                        <p
                          // id={`-heading`}
                          className="font-extrabold text-gray-900"
                        >
                          Thương hiệu
                        </p>
                        <ul
                          // aria-labelledby={`${section.name}-heading`}
                          className="mt-6 space-y-6 px-3 sm:mt-4 sm:space-y-4"
                        >
                          {listBrand.data?.map((item: Menu) => (
                            <li className="flex">
                              <Link
                                to={"/collection?brand=" + item.id}
                                onClick={() => setOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <hr className="my-6" />

                      <div className="mt-2">
                        <p
                          // id={`-heading`}
                          className="font-extrabold text-gray-900"
                        >
                          Danh mục
                        </p>
                        <ul
                          // aria-labelledby={`${section.name}-heading`}
                          className="mt-6 space-y-6 px-3 sm:mt-4 sm:space-y-4"
                        >
                          {listClassify.data?.map(
                            (item: MenuClassify, index: number) => (
                              <>
                                <li className="flex" key={index}>
                                  <Link to={"#"} className="font-semibold">
                                    {item.name}
                                  </Link>
                                </li>
                                {item.categoryList?.map((item: Menu, index) => (
                                  <li className="flex" key={index}>
                                    <Link
                                      onClick={() => setOpen(false)}
                                      to={"/collection?category=" + item.id}
                                      className="text-c2i-gray"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </>
                            )
                          )}
                        </ul>
                      </div>
                      <hr className="my-6" />

                      <hr className="my-6" />
                      <div className="mt-2">
                        <p
                          // id={`-heading`}
                          className="font-extrabold text-gray-900"
                        >
                          Xuất xứ
                        </p>
                        <ul
                          // aria-labelledby={`${section.name}-heading`}
                          className="mt-6 space-y-6 px-3 sm:mt-4 sm:space-y-4"
                        >
                          {listMadeIn.data?.map((item: Menu) => (
                            <li className="flex">
                              <Link
                                to={"/collection?madeIn=" + item.id}
                                onClick={() => setOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <Link
                      to="/account"
                      onClick={() => setOpen(false)}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Tài khoản
                    </Link>
                  </div>
                </div>
                {/* 
                <div className="border-t border-gray-200 py-6 px-4">
                  <Link to="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </Link>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Pc menu */}

      <header className="relative bg-white">
        <p className="text-c2i-light flex h-10 items-center justify-center bg-slate-800 px-4 text-sm font-medium text-neutral-200 sm:px-6 lg:px-8">
          Chào Mừng Bạn Đến Với Của Hàng Five-Start Của Chúng Tôi
        </p>

        {/* <nav
          aria-label="Top"
          className="mx-auto max-w-full px-4 sm:px-6 lg:px-20"
        > */}
        <Transition show={showSearch}>
          <nav aria-label="Top" className="container relative">
            <div className="mt-3 flex justify-center border-b border-gray-200">
              <div className="relative mb-3 xl:w-96">
                <input
                  type="search"
                  className="
        form-control
        m-0
        block
        w-full
        rounded
        border
        border-solid
        border-gray-300
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
      "
                  id="exampleSearch2"
                  placeholder="Tìm kiếm"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                {data?.length > 0 ? (
                  <ul
                    className=" absolute  z-50  rounded-xl border-2 bg-white  py-1 px-5"
                    style={{
                      width: "400px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    {data?.map((item: any, index) => {
                      return (
                        <li
                          key={index}
                          className="mt-5 flex cursor-pointer gap-3"
                          onClick={() => {
                            navigate("product/" + item?.id);
                            setShowSearch(false);
                            setSearch(null);
                          }}
                        >
                          <div>
                            <img
                              src={item?.image}
                              className={"h-10 w-10 object-cover"}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-sm font-bold">
                              {" "}
                              {item?.name}
                            </div>
                            <div className="text-sm">
                              <p className="mt-1 text-sm text-gray-500">
                                <div className="flex flex-row gap-4">
                                  <span className="text-red-600">
                                    {" "}
                                    {numberToCurrencyStyle(item.promotionPrice)}
                                    đ
                                  </span>
                                  <span className="line-through">
                                    {" "}
                                    {numberToCurrencyStyle(item?.originPrice)}đ
                                  </span>
                                </div>
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div className="text-center">
                    {search && (
                      <span className="left-25 text-center text-sm">
                        Không Tìm Thấy Dữ Liệu
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </nav>
        </Transition>
        <nav aria-label="Top" className="container">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center text-slate-800">
              <button
                type="button"
                className="rounded-md  bg-white p-2 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex hidden lg:ml-0 lg:block">
                <Link to={"/"}>
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto object-cover"
                    style={{ width: "142px" }}
                    src={
                    "https://thuvienlogo.com/data/04/mau-logo-shop-quan-ao-dep-04.jpg"
                      //"data:image/png;base64,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"
                    }
                    alt=""
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.about.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-800 hover:text-gray-500"
                    >
                      {page.name}
                    </Link>
                  ))}
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-black"
                                  : "border-transparent text-gray-800 hover:text-gray-500",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div
                                className=" relative"
                                style={{ background: "white", zIndex: 999 }}
                              >
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <Link
                                            to={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </Link>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Áo Nam Đẹp & Hot
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-4 gap-y-10 gap-x-8 text-sm">
                                      <div>
                                        <p
                                          // id={`-heading`}
                                          className="font-extrabold text-gray-900"
                                        >
                                          Thương hiệu
                                        </p>
                                        <ul
                                          // aria-labelledby={`${section.name}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {listBrand.data?.map((item: Menu) => (
                                            <li
                                              className="flex"
                                              onClick={() => close()}
                                            >
                                              <Link
                                                to={
                                                  "/collection?brand=" + item.id
                                                }
                                              >
                                                {item.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <p
                                          // id={`-heading`}
                                          className="font-extrabold text-gray-900"
                                        >
                                          Danh mục
                                        </p>
                                        <ul
                                          // aria-labelledby={`${section.name}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {listClassify.data
                                            ?.slice(
                                              0,
                                              listClassify.data?.length / 2
                                            )
                                            ?.map(
                                              (
                                                item: MenuClassify,
                                                index: number
                                              ) => (
                                                <>
                                                  <li
                                                    className="flex"
                                                    key={index}
                                                  >
                                                    <Link
                                                      to={"#"}
                                                      className="font-semibold"
                                                    >
                                                      {item.name}
                                                    </Link>
                                                  </li>
                                                  {item.categoryList?.map(
                                                    (item: Menu, index) => (
                                                      <li
                                                        className="flex"
                                                        key={index}
                                                        onClick={() => close()}
                                                      >
                                                        <Link
                                                          to={
                                                            "/collection?category=" +
                                                            item.id
                                                          }
                                                          className="text-c2i-gray"
                                                        >
                                                          {item.name}
                                                        </Link>
                                                      </li>
                                                    )
                                                  )}
                                                </>
                                              )
                                            )}
                                        </ul>
                                      </div>
                                      <div className="mt-2">
                                        <ul
                                          // aria-labelledby={`${section.name}-heading`}
                                          className="mt-10 space-y-6 sm:mt-4 sm:space-y-4 "
                                        >
                                          {listClassify.data
                                            ?.slice(
                                              listClassify.data?.length / 2,
                                              listClassify.data?.length
                                            )
                                            ?.map(
                                              (
                                                item: MenuClassify,
                                                index: number
                                              ) => (
                                                <>
                                                  <li
                                                    className="mt-8 flex"
                                                    key={index}
                                                  >
                                                    <Link
                                                      to={"#"}
                                                      className="font-semibold"
                                                    >
                                                      {item.name}
                                                    </Link>
                                                  </li>
                                                  {item.categoryList?.map(
                                                    (item: Menu, index) => (
                                                      <li
                                                        className="flex"
                                                        key={index}
                                                        onClick={() => close()}
                                                      >
                                                        <Link
                                                          to={
                                                            "/collection?category=" +
                                                            item.id
                                                          }
                                                          className="text-c2i-gray"
                                                        >
                                                          {item.name}
                                                        </Link>
                                                      </li>
                                                    )
                                                  )}
                                                </>
                                              )
                                            )}
                                        </ul>
                                      </div>

                                      <div>
                                        <p
                                          // id={`-heading`}
                                          className="font-extrabold text-gray-900"
                                        >
                                          Xuất xứ
                                        </p>
                                        <ul
                                          // aria-labelledby={`${section.name}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {listMadeIn.data?.map(
                                            (item: Menu) => (
                                              <li
                                                className="flex"
                                                onClick={() => close()}
                                              >
                                                <Link
                                                  to={
                                                    "/collection?madeIn=" +
                                                    item.id
                                                  }
                                                >
                                                  {item.name}
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-800 hover:text-gray-500"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div
                  className="flex lg:ml-4"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <Link
                    to="#"
                    className="p-2 text-gray-800 hover:text-gray-500"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
                {/*Account*/}
                <div className="flex lg:ml-2">
                  <Link
                    to={
                      (localStorage.getItem("is_login") !== "1" && "/login") ||
                      "/account"
                    }
                    className="p-2 text-gray-800 hover:text-gray-500"
                  >
                    <span className="sr-only">Account</span>
                    <UserIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>
                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-4">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-800 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-800 group-hover:text-gray-500">
                      {amount || 0}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
