import { SlateView } from "slate-simple-editor";
import { Row, Col } from "reactstrap";

import { getAllBlogs, getBySlug } from "../../lib/api/blogs";

const Blog = ({ blog, user }) => {
  return (
    <div className="slate-container">
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <div className="media avatar-box mb-2">
            <img className="mr-2" src={user.picture} alt="profile pic" />
            <div className="media-body align-self-center">
              <h5 className="mt-0 mb-0">{user.name}</h5>
              <p className="mt-0 subtitle">{blog.createdAt}</p>
            </div>
          </div>
          <hr />
          <SlateView initialContent={blog.content} />
        </Col>
      </Row>
    </div>
  );
};

export async function getStaticPaths() {
  const data = await getAllBlogs();
  const blogs = data.map((d) => ({ ...d.blog, author: d.user }));
  const paths = blogs.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { blog, user } = await getBySlug(params.slug);

  return { props: { blog, user } };
}

export default Blog;
