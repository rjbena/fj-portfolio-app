import withAuth from "../../hoc/withAuth";

const Admin = () => {
  return <div>Admin</div>;
};

export default withAuth(Admin)("admin");
