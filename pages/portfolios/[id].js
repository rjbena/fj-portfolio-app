//import axios from "axios";

import { getPortflioById, getAllPortfolios } from "../../lib/api/portfolios";

const Portfolio = ({ portfolio }) => {
  return (
    <div>
      <div>
        <h1>Portfolio Details</h1>
      </div>
    </div>
  );
};

//called during build time
export async function getStaticPaths() {
  const portfolios = await getAllPortfolios();
  const paths = portfolios.map((portfolio) => {
    {
      return {
        params: { id: portfolio._id },
      };
    }
  });

  //fallback false redirects not found pages to 404 pages
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const portfolio = await getPortflioById(params.id);

  return {
    props: {
      portfolio,
    },
  };
}

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
