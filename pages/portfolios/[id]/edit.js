import { useRouter } from "next/router";
import { Row, Col } from "reactstrap";
import { toast } from "react-toastify";

import {
  useGetPortfolioById,
  useUpdatePortfolio,
} from "../../../actions/portfolio";
import withAuth from "../../../hoc/withAuth";
import PortfolioForm from "../../../components/PortfolioForm";

const EditPortfolioPage = () => {
  const router = useRouter();
  const { data } = useGetPortfolioById(router.query.id);
  const [updatePortfolio, { error }] = useUpdatePortfolio();

  const update = async (updateData) => {
    await updatePortfolio(router.query.id, updateData);
    toast.success("Portfolio has been updated", { autoClose: 2000 });
  };

  return (
    <div>
      <Row>
        <Col md="8">
          {data && <PortfolioForm onSubmit={update} initialState={data} />}
        </Col>
      </Row>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
};

export default withAuth(EditPortfolioPage)("admin");
