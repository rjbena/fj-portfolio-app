import { Spinner } from "reactstrap";

import Redirect from "../components/shared/Redirect";
import { getUser } from "../actions/user";

const Secret = () => {
  const { data: user, loading } = getUser();

  if (!user) {
    return <Redirect to="/api/v1/login" />;
  }

  return (
    <>
      {loading && <Spinner>Loading...</Spinner>}
      {user && <h1>I am Secret Page</h1>}
    </>
  );
};

export default Secret;
