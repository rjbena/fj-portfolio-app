import Link from "next/link";
import { Row, Col, Button } from "reactstrap";

import PortfolioCard from "../../components/PortfolioCard";
//import { useGetPosts } from "@/actions";
import { getAllPortfolios } from "../../lib/api/portfolios";
import { isAuthorized } from "../../utils/auth0";
import { getUser } from "../../actions/user";
const Portfolios = ({ portfolios }) => {
  const { data: user, loading } = getUser();

  return (
    <div className="portfolio-page">
      <div className="page-header">
        <h1 className="page-header-title">Portfolios Page</h1>
      </div>
      <Row>
        {portfolios.map((portfolio) => (
          <Col key={portfolio._id} md="4">
            <PortfolioCard portfolio={portfolio}>
              {user && isAuthorized(user, "admin") && (
                <>
                  <Link href={`/portfolios/${portfolio._id}/edit`}>
                    <a>
                      <Button color="warning" className="mr-2">
                        Edit
                      </Button>
                    </a>
                  </Link>
                  <Button color="danger">Delete</Button>
                </>
              )}
            </PortfolioCard>
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
