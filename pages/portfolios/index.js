import { useState } from "react";
import Link from "next/link";
import { Row, Col, Button } from "reactstrap";

import PortfolioCard from "../../components/PortfolioCard";
import { useDeletePortfolio } from "../../actions/portfolio";
import { getAllPortfolios } from "../../lib/api/portfolios";
import { isAuthorized } from "../../utils/auth0";
import { getUser } from "../../actions/user";
const Portfolios = ({ portfolios: initialPortfolios }) => {
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const { data: user, loading } = getUser();
  const [deletePortfolio, { data: deleteData, error }] = useDeletePortfolio();

  const _deletePortfolio = async (e, id) => {
    e.preventDefault();
    const isConfirm = confirm("Are you sure you wish to delete Portfolio");
    if (isConfirm) {
      await deletePortfolio(id);
      setPortfolios(portfolios.filter((portfolio) => portfolio._id !== id));
    }
  };
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
                    <Button color="warning" className="mr-2">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    onClick={(e) => _deletePortfolio(e, portfolio._id)}
                    color="danger"
                  >
                    Delete
                  </Button>
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
