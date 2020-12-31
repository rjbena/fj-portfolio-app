import { Row, Col } from "reactstrap";
import Link from "next/link";

import Masthead from "../components/shared/MastHead";

const Dashboard = () => {
  return (
    <>
      <Masthead imagePath="/images/home-bg.jpg" />
      <div className={"base-page blog-user-page"}>
        <Row>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Published Blogs </h2>
          </Col>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Draft Blogs </h2>
          </Col>
        </Row>
      </div>
      ;
    </>
  );
};

export default Dashboard;
