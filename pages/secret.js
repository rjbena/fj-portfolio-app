import withAuth from "../hoc/withAuth";
const Secret = ({ user, loading }) => {
  return <h1>Secret Page Hello {user.name}</h1>;
};

//High Order Component -HOC
//Simple function that takes a component and returns a new
//component with extended functionality

export default withAuth(Secret)();
