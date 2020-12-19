import { Card, CardHeader, CardBody, CardText, CardTitle } from "reactstrap";
import Link from "next/link";

const PortfolioCard = ({ portfolio }) => (
  <Link href={`/portfolios/${portfolio._id}`}>
    <a>
      <Card className="portfolio-card">
        <CardHeader className="portfolio-card-header">
          {portfolio.jobTitle}
        </CardHeader>
        <CardBody>
          <p className="portfolio-card-city">{portfolio.location}</p>
          <CardTitle className="portfolio-card-title">
            {portfolio.title}
          </CardTitle>
          <CardText className="portfolio-card-text">
            {portfolio.description}
          </CardText>
        </CardBody>
      </Card>
    </a>
  </Link>
);

export default PortfolioCard;
