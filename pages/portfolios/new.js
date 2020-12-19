import { Row, Col } from "reactstrap";

import PortfolioForm from "../../components/PortfolioForm";
import withAuth from "../../hoc/withAuth";

const CreatePortfolio = () => {
  const createPortfolio = (portfolio) => {
    alert(JSON.stringify(portfolio));
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
