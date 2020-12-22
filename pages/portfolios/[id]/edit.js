import { useRouter } from "next/router";
import { Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";

import {
  useGetPortfolioById,
  useUpdatePortfolio,
} from "../../../actions/portfolio";
import withAuth from "../../../hoc/withAuth";
import PortfolioForm from "../../../components/PortfolioForm";

const EditPortfolioPage = () => {
  const router = useRouter();
  const { data } = useGetPortfolioById(router.query.id);
  const [
    updatePortfolio,
    { data: updatedPortfolio, error, loadin },
  ] = useUpdatePortfolio();

  const update = (updateData) => {
    updatePortfolio(router.query.id, updateData);
  };

  return (
    <div>
      <Row>
        <Col md="8">
          {data && <PortfolioForm onSubmit={update} initialState={data} />}
        </Col>
      </Row>
    </div>
  );
};

export default withAuth(EditPortfolioPage)("admin");
