import { Row, Col } from "reactstrap";

const Cv = () => {
  return (
    <div>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <iframe
            style={{ width: "100%", height: "800px" }}
            src="/jerga_cv.pdf"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Cv;
