import ExtensionsHeader from "@Components/extensions-header";
import madeInService from "@Services/madeInService";
import "@Styles/react/libs/react-select/_react-select.scss";
import "@Styles/react/libs/tables/react-dataTable-component.scss";
import { FC, Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import { Controller, useForm } from "react-hook-form";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  CustomInput,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";

import columns from "./columns";
const CustomHeader = ({ handlePerPage }) => {
  return (
    <div className="invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75">
      <Row>
        <Col xl="6" className="d-flex align-items-center p-0">
          <div className="d-flex align-items-center w-100">
            <Label for="rows-per-page">Hiển thị</Label>
            <CustomInput
              className="form-control mx-50"
              type="select"
              id="rows-per-page"
              onChange={(e) => {
                handlePerPage(e.target.value)
              }}
              style={{
                width: "5rem",
                padding: "0 0.8rem",
                backgroundPosition:
                  "calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0",
              }}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </CustomInput>
            <Label for="rows-per-page">dòng</Label>
          </div>
        </Col>
        <Col
          xl="6"
          className="d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1"
        >
          <Button.Ripple
            color="primary"
            className="mx-1"
            tag={Link}
            to="/cms/property/made-in/add"
          >
            Thêm mới
          </Button.Ripple>
        </Col>
      </Row>
    </div>
  );
};
const EmployeesList=() => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [employeeData, setEmployeeData] = useState({
    data: [],
    currentPage: 0,
    countItems: null,
    countPages: null,
  });
  const [pending,setPending] = useState(false)
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerpage, setRowsPerPage] = useState(10);
  const [params, setParams] = useState({
    name: null,
    pageNumber: currentPage,
    pageSize: rowsPerpage,
    sortBy: "id",
    sortDirection: "DESC",
  });
  async function handleGetListEmployee(value) {
    const result = await madeInService.getListEmployee(params);
    result.isSuccess && setEmployeeData(result?.data);
  }
  useEffect(() => {
    handleGetListEmployee();
  }, [params]);

  const onSubmit = (data) => {
    setCurrentPage(0);
    setParams((prev)=>{
      return {...prev,name:data?.name?.trim()||null,pageNumber:0}
    })
  };
  const CustomPagination = () => {
    return (
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        pageCount={employeeData.countPages || 1}
        activeClassName="active"
        forcePage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page.selected);
          setParams((prev)=>{
            return {...prev,pageNumber:page.selected}
          })
        }}
        pageClassName={"page-item"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        containerClassName={
          "pagination react-paginate justify-content-end my-2 pr-1"
        }
      />
    );
  };
  const handleSort = async (column, sortDirection) => {
    setParams((prev)=>{
      return {...prev,sortBy:column.sortField,sortDirection:sortDirection.toUpperCase()}
    })
  };
  const handlePerPage = (rowsPerpage)=>{
    setCurrentPage(0)
    setRowsPerPage(rowsPerpage)
    setParams((prev)=>{
      return {...prev,pageSize:rowsPerpage,pageNumber:0}
    })
  }
  return (
    <Fragment>
      <ExtensionsHeader title="Xuất xứ" />

      <Card>
        
        <CardBody className="px-3 py-1">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md="3" className="mb-2">
                <Label for="search-invoice">Tên:</Label>

                <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input {...field} />

                )}
              />
              </Col>
            </Row>
            <Row className="justify-content-end mt-2">
              <Button.Ripple color="primary" className="mx-1" type="submit">
                Lọc dữ liệu
              </Button.Ripple>
            </Row>
          </Form>
        </CardBody>
      </Card>
      <Card>
        <DataTable
          noHeader
          pagination
          highlightOnHover
          subHeader
          responsive
          paginationServer
          sortServer
          columns={columns}
          onSort={handleSort}
          sortIcon={<ChevronDown />}
          className="react-dataTable"
          paginationComponent={CustomPagination}
          data={employeeData?.data}
          subHeaderComponent={
            <CustomHeader handlePerPage={handlePerPage} />
          }
        />
      </Card>
    </Fragment>
  );
};

export default EmployeesList;
