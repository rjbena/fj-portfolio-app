import { useRouter } from "next/router";
import { Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";

import { useGetPortfolioById } from "../../../actions/portfolio";
import withAuth from "../../../hoc/withAuth";
import PortfolioForm from "../../../components/PortfolioForm";

const EditPortfolioPage = () => {
  const router = useRouter();
  const { data } = useGetPortfolioById(router.query.id);

  return (
    <div>
      <Row>
        <Col md="8">
          {data && (
            <PortfolioForm
              onSubmit={(data) => alert(JSON.stringify(data))}
              initialState={data}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default withAuth(EditPortfolioPage)("admin");
