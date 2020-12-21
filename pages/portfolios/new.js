import { useRouter } from "next/router";
import { Row, Col } from "reactstrap";

import PortfolioForm from "../../components/PortfolioForm";
import withAuth from "../../hoc/withAuth";
import { useCreatePortfolio } from "../../actions/portfolio";

const CreatePortfolio = () => {
  const router = useRouter();
  const [
    createNewPortfolio,
    { data: newPortfolio, loading, error },
  ] = useCreatePortfolio();
  const createPortfolio = (portfolio) => {
    createNewPortfolio(portfolio);
  };

  if (newPortfolio) {
    router.push("/portfolios");
  }

  return (
    <div>
      <h1 className="page-header-title">Create Portfolio</h1>
      <Row>
        <Col md="8">
          <PortfolioForm onSubmit={createPortfolio} />
        </Col>
      </Row>
    </div>
  );
};

export default withAuth(CreatePortfolio)("admin");
