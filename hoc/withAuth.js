import { Spinner } from "reactstrap";

import Redirect from "../components/shared/Redirect";
import { getUser } from "../actions/user";

const withAuth = (Component) => {
  return (props) => {
    const { data: user, loading } = getUser();

    if (loading) {
      return <Spinner>Loading...</Spinner>;
    }
    if (!user) {
      return <Redirect ssr to="/api/v1/login" />;
    } else {
      return <Component user={user} loading={loading} {...props} />;
    }
  };
};

export default withAuth;
