import { Container } from "reactstrap";
import { useRouter } from "next/router";
import Head from "next/head";

const BasePage = ({ className, children, canonicalPath }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          key="description"
          content="Just a simple portfolio page based on a udemy course by Filipe Jerga"
        ></meta>
        <meta property="og:title" key="og:title" content="title" />
        <meta property="og:local" key="og:locale" content="en_US" />
        <meta
          property="og:url"
          key="og:url"
          content={`${process.env.BASE_URL}${router.asPath}`}
        />
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:description"
          key="og:description"
          content="Just a simple portfolio page based on a udemy course by Filipe Jerga"
        />
        <meta
          property="og:image"
          key="og:image"
          content={`${process.env.BASE_URL}/images/section-1.png`}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="canonical"
          href={`${process.env.BASE_URL}${
            canonicalPath ? canonicalPath : router.asPath
          }`}
        />
        <title>My Next.JS Portfolio</title>
      </Head>
      <div className={`base-page ${className}`}>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BasePage;
