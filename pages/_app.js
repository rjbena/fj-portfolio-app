import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/main.scss";

import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { getUser } from "../actions/user";

function MyApp({ Component, pageProps }) {
  const { data, loading } = getUser();
  return (
    <BaseLayout user={data} loading={loading} className="cover">
      <BasePage>
        <Component {...pageProps} />
      </BasePage>
    </BaseLayout>
  );
}

export default MyApp;
