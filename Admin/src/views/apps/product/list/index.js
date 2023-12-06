
import Table from "./Table";
import TopProduct from "./TopProduct";
import "@Styles/react/apps/app-users.scss";

const UsersList = () => {
  return (
    <div className="app-user-list">
      <Table />
      <TopProduct/>
    </div>
  );
};

export default UsersList;
