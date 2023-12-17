import { lazy } from "react";
import { Redirect } from "react-router-dom";

const AppRoutes = [
  {
    path: "/cms/voucher/list",
    component: lazy(() => import("../../views/apps/voucher/list")),
    roles:['admin']
  },
  {
    path: "/cms/voucher/edit/:id",
    component: lazy(() => import("../../views/apps/voucher/edit/index")),
    meta: {
      navLink: "/cms/voucher/edit",
    },
    roles:['admin','employee']

  },
  {
    path: "/cms/voucher/add",
    component: lazy(() => import("../../views/apps/voucher/add/index")),
    roles:['admin']

  },

  
  {
    path: "/cms/invoice/list",
    component: lazy(() => import("../../views/apps/invoice/list")),
    roles:['admin','employee']
  },
  {
    path: "/cms/invoice/edit/:id",
    component: lazy(() => import("../../views/apps/invoice/edit/index")),
    meta: {
      navLink: "/cms/invoice/edit",
    },
    roles:['admin','employee']

  },
  {
    path: "/cms/ordertaiquay/list",
    component: lazy(() => import("../../views/apps/ordertaiquay/list")),
    roles:['admin','employee']
  },
  {
    path: "/cms/ordertaiquay/edit/:id",
    component: lazy(() => import("../../views/apps/ordertaiquay/edit/index")),
    meta: {
      navLink: "/cms/ordertaiquay/edit",
    },
    roles:['admin','employee']

  },
  {
    path: "/cms/employee/list",
    component: lazy(() => import("../../views/apps/employee/list")),
    roles:['admin']

  },
  {
    path: "/cms/employee/add",
    component: lazy(() => import("../../views/apps/employee/add/index")),
    roles:['admin']

  },

  {
    path: "/cms/employee/edit/",
    exact: true,
    component: () => <Redirect to="/cms/employee/edit/1" />,
    roles:['admin']

  },
  {
    path: "/cms/employee/edit/:id",
    component: lazy(() => import("../../views/apps/employee/edit")),
    meta: {
      navLink: "/cms/employee/edit/",
    },
    roles:['admin']

  },
  //CUSTOMER
  {
    path: "/cms/customer/list",
    component: lazy(() => import("../../views/apps/customer/list")),
    roles:['admin','employee']

  },
  {
    path: "/cms/customer/edit/",
    exact: true,
    component: () => <Redirect to="/cms/customer/edit/1" />,
    roles:['admin','employee']

  },
  {
    path: "/cms/customer/edit/:id",
    component: lazy(() => import("../../views/apps/customer/edit")),
    meta: {
      navLink: "/cms/customer/edit/",
    },
    roles:['admin','employee']

  },
  //CLASSIFY PRODUCT
  //Product Set
  {
    path: "/cms/classify/product-set/list",
    component: lazy(() => import("../../views/apps/classify-product/index")),
    roles:['admin']

  },
  {
    path: "/cms/classify/product-set/add",
    component: lazy(() => import("../../views/apps/classify-product/product-set/add/index")),
    roles:['admin']

  },

  {
    path: "/cms/classify/product-set/edit/",
    exact: true,
    component: () => <Redirect to="/cms/classify/product-set/edit/1" />,
    roles:['admin']

  },
  {
    path: "/cms/classify/product-set/edit/:id",
    component: lazy(() => import("../../views/apps/classify-product/product-set/edit/index")),
    meta: {
      navLink: "/cms/classify/product-set/edit/",
    },
    roles:['admin']

  },

  //Brand
  {
    path: "/cms/classify/brand/list",
    component: lazy(() => import("../../views/apps/classify-product/index")),
    roles:['admin']

  },
  {
    path: "/cms/classify/brand/add",
    component: lazy(() => import("../../views/apps/classify-product/brand/add/index")),
    roles:['admin']

  },

  {
    path: "/cms/classify/brand/edit/",
    exact: true,
    component: () => <Redirect to="/cms/classify/brand/edit/1" />,
    roles:['admin']

  },
  {
    path: "/cms/classify/brand/edit/:id",
    component: lazy(() => import("../../views/apps/classify-product/brand/edit/index")),
    meta: {
      navLink: "/cms/classify/brand/edit/",
    },
    roles:['admin']

  },
  //category
  {
    path: "/cms/classify/category/list",
    component: lazy(() => import("../../views/apps/classify-product/index")),
    roles:['admin']

  },
  {
    path: "/cms/classify/category/add",
    component: lazy(() => import("../../views/apps/classify-product/category/add/index")),
    roles:['admin']

  },

  {
    path: "/cms/classify/category/edit/",
    exact: true,
    component: () => <Redirect to="/cms/classify/category/edit/1" />,
    roles:['admin']

  },
  {
    path: "/cms/classify/category/edit/:id",
    component: lazy(() => import("../../views/apps/classify-product/category/edit/index")),
    meta: {
      navLink: "/cms/classify/category/edit/",
    },
    roles:['admin']

  },
  ////
  //PROPERTY PRODUCT
  //Made In
  {
    path: "/cms/property/made-in/list",
    component: lazy(() => import("../../views/apps/property-product/index")),
    roles:['admin','employee']

  },
  {
    path: "/cms/property/made-in/add",
    component: lazy(() => import("../../views/apps/property-product/made-in/add/index")),
    roles:['admin','employee']

  },

  {
    path: "/cms/property/made-in/edit/",
    exact: true,
    component: () => <Redirect to="/cms/property/made-in/edit/1" />,
    roles:['admin','employee']

  },
  {
    path: "/cms/property/made-in/edit/:id",
    component: lazy(() => import("../../views/apps/property-product/made-in/edit/index")),
    meta: {
      navLink: "/cms/property/made-in/edit/",
    },
    roles:['admin','employee']

  },





  //SIZE
  {
    path: "/cms/property/size/list",
    component: lazy(() => import("../../views/apps/property-product/index")),
    roles:['admin','employee']

  },
  {
    path: "/cms/property/size/add",
    component: lazy(() => import("../../views/apps/property-product/size/add/index")),
    roles:['admin','employee']

  },

  {
    path: "/cms/property/size/edit/",
    exact: true,
    component: () => <Redirect to="/cms/property/size/edit/1" />,
    roles:['admin','employee']

  },
  {
    path: "/cms/property/size/edit/:id",
    component: lazy(() => import("../../views/apps/property-product/size/edit/index")),
    meta: {
      navLink: "/cms/property/size/edit/",
    },
    roles:['admin','employee']

  },




//COLOR
{
  path: "/cms/property/color/list",
  component: lazy(() => import("../../views/apps/property-product/index")),
  roles:['admin','employee']

},
{
  path: "/cms/property/color/add",
  component: lazy(() => import("../../views/apps/property-product/color/add/index")),
  roles:['admin','employee']

},

{
  path: "/cms/property/color/edit/",
  exact: true,
  component: () => <Redirect to="/cms/property/color/edit/1" />,
  roles:['admin','employee']

},
{
  path: "/cms/property/color/edit/:id",
  component: lazy(() => import("../../views/apps/property-product/color/edit/index")),
  meta: {
    navLink: "/cms/property/color/edit/",
  },
  roles:['admin','employee']

},



  //Brand
  {
    path: "/cms/classify/brand/list",
    component: lazy(() => import("../../views/apps/property-product/index")),
  roles:['admin']


  },
  {
    path: "/cms/classify/brand/add",
    component: lazy(() => import("../../views/apps/classify-product/brand/add/index")),
  roles:['admin']

  },

  {
    path: "/cms/classify/brand/edit/",
    exact: true,
    component: () => <Redirect to="/cms/classify/brand/edit/1" />,
  roles:['admin']

  },
  {
    path: "/cms/classify/brand/edit/:id",
    component: lazy(() => import("../../views/apps/classify-product/brand/edit/index")),
    meta: {
      navLink: "/cms/classify/brand/edit/",
    },
  roles:['admin']

  },
  {
    path: "/cms/product/list",
    component: lazy(() => import("../../views/apps/product/list/index")),
  roles:['admin','employee']


  },
  {
    path: "/cms/product/add",
    component: lazy(() => import("../../views/apps/product/add/index")),
  roles:['admin','employee']

  },

  {
    path: "/cms/product/edit/:id",
    component: lazy(() => import("../../views/apps/product/edit/index")),
  roles:['admin','employee']

  },
  
  // {
  //   path: "/apps/user/view",
  //   exact: true,
  //   component: () => <Redirect to="/apps/user/view/1" />,
  // roles:['admin','employee']

  // },
  // {
  //   path: '/apps/user/view/:id',
  //   component: lazy(() => import('../../views/apps/employee/view')),
  //   meta: {
  //     navLink: '/apps/user/view'
  //   }
  // },
 
  


  //PROMOTION
  //PRODUCT
  {
    path: "/cms/promotion/product/list",
    component: lazy(() => import("../../views/apps/promotion/index")),
  roles:['admin']

  },
  // {
  //   path: "/cms/ordertaiquay/bill/list",
  //   component: lazy(() => import("../../views/apps/bill/list/index")),
  // roles:['admin']

  // },
  {
    path: "/cms/promotion/product/add",
    component: lazy(() => import("../../views/apps/promotion/product/add/index")),
  roles:['admin']

  },

  {
    path: "/cms/promotion/product/edit",
    exact: true,
    component: () => <Redirect to="/cms/promotion/product/edit/1" />,
  roles:['admin']

  },
  {
    path: "/cms/promotion/product/edit/:id",
    component: lazy(() => import("../../views/apps/promotion/product/edit/index")),
    meta: {
      navLink: "/cms/promotion/product/edit",
    },
  roles:['admin']

  },





  //CATEGORY
  {
    path: "/cms/promotion/category/list",
    component: lazy(() => import("../../views/apps/promotion/index")),
  roles:['admin']

  },
  {
    path: "/cms/promotion/category/add",
    component: lazy(() => import("../../views/apps/promotion/category/add/index")),
  roles:['admin']

  },

  {
    path: "/cms/promotion/category/edit",
    exact: true,
    component: () => <Redirect to="/cms/promotion/category/edit/1" />,
  roles:['admin']

  },
  {
    path: "/cms/promotion/category/edit/:id",
    component: lazy(() => import("../../views/apps/promotion/category/edit/index")),
    meta: {
      navLink: "/cms/promotion/category/edit",
    },
  roles:['admin']

  },


];

export default AppRoutes;
