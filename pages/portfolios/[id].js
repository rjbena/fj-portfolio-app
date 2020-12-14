//import axios from "axios";
import { Spinner } from "reactstrap";
import { useRouter } from "next/router";

import { useGetPostById } from "@/actions";

const Portfolio = () => {
  const router = useRouter();
  const { data: portfolio, error, loading } = useGetPostById(router.query.id);

  return (
    <div>
      {loading && <Spinner>Loading...</Spinner>}
      {error && <div className="alert alert-danger">{error.message}</div>}
      {portfolio && (
        <>
          <h1>{portfolio.title}</h1>
          <p>Body: {portfolio.body}</p>
          <p>ID: {portfolio.id}</p>
        </>
      )}
    </div>
  );
};

// export async function getServerSideProps({ params }) {
//   try {
//     const { data } = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts/${params.id}`
//     );
//     return {
//       props: {
//         post: data,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

export default Portfolio;

// import React from 'react';
// import BaseLayout from '../../components/layouts/BaseLayout';
// import axios from 'axios';
// import { withRouter } from 'next/router';

// class Portfolio extends React.Component {

//   static async getInitialProps({query}) {
//     let post = {};
//     try {
//       const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
//       post = res.data;
//     } catch(e) {
//       console.error(e);
//     }

//     return { portfolio: post };
//   }

//   render() {
//     const { portfolio } = this.props;
//     return (
//       <BaseLayout>
//         <h1>I am Portfolio page</h1>
//         <h1>{portfolio.title}</h1>
//         <p>BODY: {portfolio.body}</p>
//         <p>ID: {portfolio.id}</p>
//       </BaseLayout>
//     )
//   }
// }

// export default withRouter(Portfolio);
