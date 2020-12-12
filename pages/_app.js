import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.scss";

import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout className="cover">
      <BasePage>
        <Component {...pageProps} />
      </BasePage>
    </BaseLayout>
  );
}

export default MyApp;
