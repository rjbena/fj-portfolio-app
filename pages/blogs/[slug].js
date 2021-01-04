import { SlateView } from "slate-simple-editor";
import { Row, Col } from "reactstrap";

import { getAllBlogs, getBySlug } from "../../lib/api/blogs";

const Blog = ({ blog }) => {
  return (
    <div className="slate-container">
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <SlateView initialContent={blog.content} />
        </Col>
      </Row>
    </div>
  );
};

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blog = await getBySlug(params.slug);

  return { props: { blog } };
}

export default Blog;
