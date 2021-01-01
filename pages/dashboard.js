import { Row, Col } from "reactstrap";
import Link from "next/link";

import Masthead from "../components/shared/MastHead";

import withAuth from "../hoc/withAuth";
import { getBlogByUser } from "../lib/api/blogs";

const Dashboard = ({ blogs }) => {
  const renderBlogs = (blogs, status) => (
    <ul className="user-blogs-list">
      {blogs
        .filter((blog) => blog.status === status)
        .map((blog) => (
          <li key={blog._id}>
            <Link href={`/blogs/editor/${blog._id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
    </ul>
  );

  return (
    <ul>
      <Masthead imagePath="/images/home-bg.jpg" />
      <div className={"base-page blog-user-page"}>
        <Row>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Published Blogs </h2>
            {renderBlogs(blogs, "published")}
          </Col>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Draft Blogs </h2>
            {renderBlogs(blogs, "draft")}
          </Col>
        </Row>
      </div>
      ;
    </ul>
  );
};

export const getServerSideProps = async () => {
  const blogs = await getBlogByUser();
  return {
    props: {
      blogs,
    },
  };
};
export default withAuth(Dashboard)("admin");
