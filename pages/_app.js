import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

import BaseLayout from "../components/layouts/BaseLayout";

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout className="cover">
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
