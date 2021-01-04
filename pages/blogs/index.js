import Link from "next/link";

import { getUser } from "../../actions/user";
import BlogItem from "../../components/BlogItem";
import { getAllBlogs } from "../../lib/api/blogs";
import Masthead from "../../components/shared/MastHead";
import { Row, Col } from "reactstrap";

const Blog = ({ blogs }) => {
  return (
    <div>
      <Masthead imagePath="/images/home-bg.jpg">
        <h1>Fresh Blogs</h1>
        <span className="subheading">Programming, traveling...</span>
      </Masthead>
      <div className="base-page blog-body">
        <Row>
          {blogs.map((blog) => (
            <Col key={blog._id} md="10" lg="8" className="mx-auto">
              <BlogItem blog={blog} />
              <hr></hr>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const blogs = await getAllBlogs();

  return {
    props: { blogs },
  };
}

export default Blog;
