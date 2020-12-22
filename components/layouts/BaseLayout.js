import Header from "../shared/Header";
import { ToastContainer, toast } from "react-toastify";
const BaseLayout = ({ className, children, user, loading }) => {
  return (
    <div className="layout-container">
      <Header user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default BaseLayout;
