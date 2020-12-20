import { Row, Col } from "reactstrap";

import PortfolioForm from "../../components/PortfolioForm";
import withAuth from "../../hoc/withAuth";
import { createNewPortfolio } from "../../actions/portfolio";

const CreatePortfolio = () => {
  const createPortfolio = (portfolio) => {
    createNewPortfolio(portfolio);
  };
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
