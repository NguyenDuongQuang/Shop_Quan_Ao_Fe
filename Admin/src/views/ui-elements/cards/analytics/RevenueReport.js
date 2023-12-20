import { useState } from "react";
import Chart from "react-apexcharts";
import {
  Button,
  Card,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from "reactstrap";
import { numberToCurrencyStyle } from "@Utils";

import {
  Box,
  DollarSign,
  EyeOff,
  Home,
  Settings,
  TrendingUp,
  User,
} from "react-feather";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const RevenueReport = (props) => {
  const [data, setData] = useState(props?.overallReport);
  const order = [];
  const customer = [];
  const product = [];
  const revenue = [];
  const year = [];

  let totalRevenue = 0;
  props?.overallReport?.forEach((item) => {
    totalRevenue += item?.revenue;
    order.push(item?.orderCount);
    customer.push(item?.customerCount);
    product.push(item?.productCount);
    revenue.push(item?.revenue);
    year.push("Tháng " + item?.month);
  });
  const orderLength = order.length;
  const customerLength = order.length;
  const productLength = order.length;
  const revenueLength = order.length;
  
  const [active, setActive] = useState("1");

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  const Options = {
      chart: {
        stacked: true,
        type: "bar",
        toolbar: { show: false },
      },
      grid: {
        padding: {
          top: -20,
          bottom: -10,
        },
        yaxis: {
          lines: { show: false },
        },
      },
      xaxis: {
        categories: year,
        labels: {
          style: {
            colors: "#b9b9c3",
            fontSize: "0.86rem",
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: [props.primary, props.warning],
      plotOptions: {
        bar: {
          columnWidth: "17%",
          endingShape: "rounded",
        },
        distributed: true,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#b9b9c3",
            fontSize: "0.86rem",
          },
        },
      },
    },
    orderSeries = [
      {
        name: "Earning",
        data: order,
      },
    ],
    customerSeries = [
      {
        name: "Earning",
        data: customer,
      },
    ],
    productSeries = [
      {
        name: "Earning",
        data: product,
      },
    ],
    revenueSeries = [
      {
        name: "Earning",
        data: revenue,
      },
    ];
  return data !== null ? (
    <Card className="card-revenue-budget">
      <Row className="mx-0">
        <Col className="revenue-report-wrapper" md="8" xs="12">
          <div className="d-sm-flex justify-content-between align-items-center mb-3">
            <CardTitle className="mb-50 mb-sm-0">Tổng Quan</CardTitle>
            <div className="d-flex align-items-center">
            </div>
          </div>
          <Nav tabs>
            <NavItem>
              <NavLink
                active={active === "1"}
                onClick={() => {
                  toggle("1");
                }}
              >
                <TrendingUp size={14} />
                <span className="align-middle">Đơn hàng</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === "2"}
                onClick={() => {
                  toggle("2");
                }}
              >
                <User size={14} />

                <span className="align-middle">Khách hàng</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === "3"}
                onClick={() => {
                  toggle("3");
                }}
              >
                <User size={14} />

                <span className="align-middle">Sản phẩm</span>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                active={active === "4"}
                onClick={() => {
                  toggle("4");
                }}
              >
                <DollarSign size={14} />
                <span className="align-middle">Doanh thu</span>
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent className="py-50" activeTab={active}>
            <TabPane tabId="1">
              <Chart
                id="order-report-chart"
                type="bar"
                height="230"
                options={Options}
                series={orderSeries}
              />
            </TabPane>
            <TabPane tabId="2">
              <Chart
                id="customer-report-chart"
                type="bar"
                height="230"
                options={Options}
                series={customerSeries}
              />
            </TabPane>
            <TabPane tabId="3">
              <Chart
                id="product-report-chart"
                type="bar"
                height="230"
                options={Options}
                series={productSeries}
              />
            </TabPane>
            <TabPane tabId="4">
              <Chart
                id="revenue-report-chart"
                type="bar"
                height="230"
                options={Options}
                series={revenueSeries}
              />
            </TabPane>
          </TabContent>
        </Col>
        <Col className="budget-wrapper" md="4" xs="12">
          <UncontrolledButtonDropdown>
            <DropdownToggle
              className="budget-dropdown"
              outline
              color="primary"
              size="sm"
              caret
            >
              2023
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className="w-100">2023</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <div className="d-flex justify-content-center">
            <span className="font-weight-bold mr-25">Doanh thu</span>
            <span>{data?.budget}</span>
          </div>
          <h2 className="mt-2">{numberToCurrencyStyle(totalRevenue)} VND</h2>

          {/* <Chart
            id="budget-chart"
            type="line"
            height="80"
            options={budgetOptions}
            series={budgetSeries}
          /> */}
          {/* <Button color="primary">Increase Budget</Button> */}
        </Col>
      </Row>
    </Card>
  ) : null;
};

export default RevenueReport;
