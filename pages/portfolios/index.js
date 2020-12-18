import Link from "next/link";
import { Row, Col } from "reactstrap";

import PortfolioCard from "../../components/PortfolioCard";
//import { useGetPosts } from "@/actions";
import { getAllPortfolios } from "../../lib/api/portfolios";

const Portfolios = ({ portfolios }) => {
  return (
    <div className="portfolio-page">
      <div className="page-header">
        <h1 className="page-header-title">Portfolios Page</h1>
      </div>
      <Row>
        {portfolios.map((portfolio) => (
          <Col key={portfolio._id} md="4">
            <PortfolioCard portfolio={portfolio} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export async function getStaticProps() {
  const portfolios = await getAllPortfolios();
  return {
    props: { portfolios },
  };
}

export default Portfolios;
