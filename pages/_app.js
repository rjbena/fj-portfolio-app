import "../styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import BaseLayout from "../components/layouts/BaseLayout";

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
